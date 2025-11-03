'use client'
useEffect(() => {
    let isActive = true; // guard against setState after unmount
    async function load() {
      try {
        const res = await fetch('/api/tickets', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (isActive) {
          setProducts(data);
          setLoading(true);   // show loading briefly before settle
          // Micro delay to demonstrate loading state cleanly (optional)
          setTimeout(() => {
            if (isActive) setLoading(false);
          }, 150);
        }
      } catch (err) {
        if (isActive) {
          setError('Unable to load products.');
          setLoading(false);
        }
      }
    }
    load();
    return () => { isActive = false; };
  }, []);