'use client';
import { useEffect, useMemo, useState } from 'react';
import TicketList from './TicketList';
import SearchBox from './SearchBox';
import StatusFilter from './StatusFilter';
export default function Board() {
  // Fetch state
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);
  const [queue, setQueue] = useState([])
  const [search, setSearch] = useState ('')
  const [filters, setFilters] = useState({ status: 'All', priority: 'All'})

   // Handlers for filters
   const setStatus = (status) => 
    setFilters(prev => ({...prev, status}));
  


  useEffect (() => {
    let isActive = true
    async function load() {
        try {
            const res = await fetch('/api/tickets', {cache: 'no-store'});
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const tickets = await res.json();
            if (isActive) {
                setTickets(tickets);
                setLoading(false);
                setTimeout (() => {
                    if (isActive) setLoading(false);
                
                }, 150);
            }
        } catch (err) {
            if (isActive) {
                setError('Unable to load tickets');
                setLoading(false);
            }
        }
    }
    load ();
    return () => { isActive = false;};
}, []);

const visibleTickets = useMemo(() => {
    const q = String(search ?? '').trim().toLowerCase();
    return tickets.filter(t => {
        const matchesStatus = filters.status === 'All' || t.status === filters.status
       const title = String(t.title ?? '').toLowerCase()
        const description = String (t.description ?? '').toLowerCase()
        const matchesSearch = !q || title.includes(q) || description.includes(q)

        return matchesStatus && matchesSearch 

})
 



  }, [tickets, filters, search]);
  const isEmpty = !loading && !error && visibleTickets.length === 0;
  const handleAddToQueue = (ticketId) => {
    
    const found = tickets.find(t => t.id === ticketId);
    if (!found) return;
  
    setQueue(prev => (prev.includes(ticketId) ? prev : [...prev, ticketId]));
  };
  // Fix Later
  return (
    <main className="p-6">
        <SearchBox value={search} onChange={setSearch} />
        <StatusFilter value={filters.status} onChange={setStatus} />

      {loading && <p>Loading…</p>}
      {error && <p>{error}</p>} 

      {!loading && !error && visibleTickets.length > 0 && (
        <TicketList tickets={visibleTickets} onAddToQueue={handleAddToQueue} />
        
      )}
    
    

      {isEmpty && <p>No tickets match your filters.</p>}
    </main>
  );
}

