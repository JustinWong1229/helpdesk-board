'use client'

// Displays a single ticket and an add button


export default function TicketCard({ id, title, description, priority, status, assignee, updatedAt, onAddToQueue }) {
   

    return (
        <div className="border rounded-lg p-4 h-full flex flex-col justify-between">
      <div>
      <div className="text-sm text-gray-500">{description}</div>
        <h3 className="font-medium">{title}</h3>
        <div className="mt-1 text-lg">Status: {status}</div>
        <div className="mt-1 text-lg">Priority: {priority}</div>
        <div className="mt-1 text-lg">Assignee: {assignee}</div>
        <div className="mt-1 text-lg">Update Date: {updatedAt}</div>
       
      </div>
      <button className={`mt-4 rounded px-3 py-2 text-white bg-gray-400 bg-green-600 hover:bg-green-700'}`}
        onClick={() => onAddToQueue(id)}
        
      >
        Add to Queue
      </button>
      </div>
    )
}