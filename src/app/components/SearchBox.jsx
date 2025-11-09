'use client'
// Search Bar

export default function SearchBox ({ value, options = [], onChange }) {
    return (
        <label className= "block">
            <span className= "text-sm font medium">Search Box</span>
            <input
            className="mt-1 w-full rounded border px-3 py-2"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder= "Type to search for error ticket" />
             
        </label>
    )
}