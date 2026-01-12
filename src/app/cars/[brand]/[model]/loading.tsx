export default function CarDetailLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="animate-pulse">
            <div className="h-4 w-24 bg-blue-400/30 rounded mb-4" />
            <div className="h-10 w-64 bg-blue-400/30 rounded mb-2" />
            <div className="h-6 w-48 bg-blue-400/30 rounded" />
          </div>
        </div>
      </div>

      {/* Stats skeleton */}
      <div className="mx-auto max-w-7xl px-4 -mt-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
              <div className="h-6 bg-gray-200 rounded w-3/4" />
            </div>
          ))}
        </div>
      </div>

      {/* Content skeleton */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 w-48 bg-gray-200 rounded" />
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="h-5 bg-gray-200 rounded w-1/3" />
                  <div className="h-5 bg-gray-200 rounded w-1/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
