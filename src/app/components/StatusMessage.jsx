'use client';

// Priority: loading > error > empty
export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading) {
    return (
      <div className="rounded border p-3 bg-yellow-50 text-yellow-900">
        Loading tickets
      </div>
    );
  }
  if (error) {
    return (
      <div className="rounded border p-3 bg-red-50 text-red-700">
        {error}
      </div>
    );
  }
  if (isEmpty) {
    return (
      <div className="rounded border p-3 bg-blue-50 text-blue-800">
        No tickets match your filters.
      </div>
    );
  }
  return null;
}