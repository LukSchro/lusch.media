import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Lukas Schroeder
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Photography & Videography
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-12">
          Capturing moments, landscapes, and stories through the lens. 
          Explore my visual journey through photography and videography.
        </p>
        <div className="flex gap-6">
          <Link
            href="/photography"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View Photography
          </Link>
          <Link
            href="/videography"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
          >
            View Videography
          </Link>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/photography/landscape" className="group">
            <div className="bg-gray-200 dark:bg-gray-800 h-64 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 group-hover:scale-105 transition-transform">
                <span className="text-white text-2xl font-bold">Landscape</span>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Landscape Photography</h3>
          </Link>
          <Link href="/photography/sports" className="group">
            <div className="bg-gray-200 dark:bg-gray-800 h-64 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500 group-hover:scale-105 transition-transform">
                <span className="text-white text-2xl font-bold">Sports</span>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Sports Photography</h3>
          </Link>
          <Link href="/photography/moments" className="group">
            <div className="bg-gray-200 dark:bg-gray-800 h-64 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 group-hover:scale-105 transition-transform">
                <span className="text-white text-2xl font-bold">Moments</span>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold">Captured Moments</h3>
          </Link>
        </div>
      </section>
    </div>
  );
}
