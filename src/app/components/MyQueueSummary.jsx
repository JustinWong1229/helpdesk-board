'use client'
// Shows the number of ticket in users queue
// Allows user to remove ticket from queue and reset queue cleaars queue
export default function ({ queue = [], tickets =[], onRemove, onClear}) {
    const titleById = new Map(tickets.map(t => [t.id, t.title]))
    const count = queue.length
    const isEmpty = count === 0
 
    return (
        <div className="mt-6 border rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-3">Queue</h2>

      {isEmpty ? (
        <p className="text-sm text-gray-600">Your queue is empty.</p>
      ) : (
        <ul className="space-y-2">
          {queue.map((id) => (
            <li key={id} className="flex items-center justify-between">
              <div className="font-medium truncate pr-3">
                {titleById.get(id) ?? id}
              </div>
              <button
                className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700 disabled:bg-gray-400"
                onClick={() => onRemove?.(id)}
                title="Remove from queue"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
       <div className="mt-4 flex items-center justify-between border-t pt-4">
        <div className="text-lg font-semibold">
          Queued: <strong>{count}</strong>
        </div>
      </div>

      <div className="mt-4">
        <button
          className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700 disabled:bg-gray-400"
          onClick={onClear}
          disabled={isEmpty}
        >
          Clear Queue
        </button>
      </div>
    </div>
  );
}
