'use client';
import { useEffect, useMemo, useState } from 'react';
import TicketList from './TicketList';
import SearchBox from './SearchBox';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';
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

   const setPriority = (priority) =>
    setFilters(prev => ({...prev, priority}))

   
    const STATUSES   = ["Open", "In Progress", "Review", "Blocked", "Done"];
    const PRIORITIES = ["Low", "Medium", "High", "Critical"];

  

// fetches the tickets
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


useEffect(() => {
    if (!tickets.length) return;
    const id = setInterval(() => {
      setTickets(prev => {
        if (!prev.length) return prev;
  
        const target = prev[Math.floor(Math.random() * prev.length)];
        const changeStatus = Math.random() < 0.5;
        const field = changeStatus ? "status" : "priority";
        const pool  = changeStatus ? STATUSES : PRIORITIES;
  
        
        const choices = pool.filter(v => v !== target[field]);
        if (!choices.length) return prev;
        const nextVal = choices[Math.floor(Math.random() * choices.length)];
  
        // Return a new array with the updated ticket (immutability)
        return prev.map(t =>
          t.id === target.id
            ? { ...t, [field]: nextVal }
            : t
        );
      });
    }, 6000 + Math.floor(Math.random() * 4000)); 
  // Clean up
    return () => clearInterval(id); 
  }, [tickets.length]);
  


// Computes visible tickets based on search and status/priority filters
const visibleTickets = useMemo(() => {
    const q = String(search ?? '').trim().toLowerCase();
    return tickets.filter(t => {
        const matchesStatus = filters.status === 'All' || t.status === filters.status
        const matchesPriority = filters.priority === 'All' || t.priority === filters.priority
       const title = String(t.title ?? '').toLowerCase()
        const description = String (t.description ?? '').toLowerCase()
        const matchesSearch = !q || title.includes(q) || description.includes(q)

        return matchesStatus && matchesPriority && matchesSearch 

})
 



  }, [tickets, filters, search]);
  const isEmpty = !loading && !error && visibleTickets.length === 0;
  const handleAddToQueue = (ticketId) => {
    
    const found = tickets.find(t => t.id === ticketId);
    if (!found) return;
  
    setQueue(prev => (prev.includes(ticketId) ? prev : [...prev, ticketId]));

    
  };
  const handleRemoveFromQueue = (id) => 
    setQueue(prev => prev.filter(tid => tid !== id));

const handleClearQueue = () => setQueue([]);

  
  return (
    <main className="p-6">
        {/* Search Box */}
        <SearchBox value={search} onChange={setSearch} />
        {/* Filers */}
        <StatusFilter value={filters.status} onChange={setStatus} />
        <PriorityFilter value={filters.priority} onChange={setPriority} />

        {/* Status Message */}
        <StatusMessage loading={loading} error={error} isEmpty={isEmpty} />
       

      {loading && <p>Loading…</p>}
      {error && <p>{error}</p>} 

        {/* Ticket List */}

      {!loading && !error && visibleTickets.length > 0 && (
        <TicketList tickets={visibleTickets} onAddToQueue={handleAddToQueue} />
        
      )}
      {/* Queue Summary */}
      <MyQueueSummary queue={queue} tickets={tickets} onRemove={handleRemoveFromQueue} onClear={handleClearQueue} />
    
    

      {isEmpty && <p>No tickets match your filters.</p>}
    </main>
  );
}

