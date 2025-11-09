'use client'

// Displays a single ticket and an add button
// Disables the button once ticket is being worked on

export default function TicketCard({ id, title, description, priority, status, assignee, updatedAt, inQueue = false, onAddToQueue }) {
    const disabled = inQueue || status === 'Resolved'

    return (
        <div class name="border rounded-lg p-4 h-full flex flex-col justify-between">
      <div>
      <div className="text-sm text-gray-500">{description}</div>
        <h3 className="font-medium">{title}</h3>
        <div className="mt-1 text-lg">Status:{status}</div>
        <div className={`mt-1 text-sm ${disabled ? 'text-red-600' : 'text-gray-600'}`}>
          {inQueue
        ? 'Already in your queue'
        : status === 'Resolved'
        ? 'Ticket is resolved'
        : `Priority: ${priority}${assignee ? ` • Assignee: ${assignee}` : ''}${
            updatedAt ? `• Updated: ${updatedAt}` : ''
        }`}
        </div>
      </div>
      <button className={`mt-4 rounded px-3 py-2 text-white ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
        onClick={() => onAddToQueue(id)}
        disabled={disabled}
      >
        Add to Queue
      </button>
      </div>
    )
}