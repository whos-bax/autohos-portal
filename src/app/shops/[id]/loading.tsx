export default function ShopDetailLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image skeleton */}
      <div className="relative h-48 lg:h-64 bg-gray-300 animate-pulse" />

      {/* Info card skeleton */}
      <div className="mx-auto max-w-7xl px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-32 bg-gray-200 rounded mb-4" />
          <div className="flex gap-4">
            <div className="h-6 w-24 bg-gray-200 rounded" />
            <div className="h-6 w-24 bg-gray-200 rounded" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 w-32 bg-gray-200 rounded" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
                <div className="h-6 bg-gray-200 rounded w-3/4" />
              </div>
            ))}
          </div>

          <div className="h-8 w-32 bg-gray-200 rounded mt-8" />
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="h-5 bg-gray-200 rounded w-full mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
