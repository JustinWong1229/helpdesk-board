'use client'
// Controlled select: value + onChange(value)
export default function PriorityFilter({value, onChange}) {
    const options = ['All', 'Low', 'Medium', 'High', 'Critical'];
   return (
    <label className="block">
        <span className="text-sm font-medium">Priority Filter:</span>
        <select
            className="mt-1 w-full rounded border px-3 py-2"
            value={value}
            onChange={(e) => onChange(e.target.value)}>
                {options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            
                
                

        </select>
    </label>
   )
}