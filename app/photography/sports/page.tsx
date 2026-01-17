import Link from 'next/link';

export default function Sports() {
  // Placeholder for gallery items - would be replaced with actual images
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Sports ${i + 1}`,
  }));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/photography" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
          ← Back to Photography
        </Link>
      </div>

      <h1 className="text-5xl font-bold mb-4">Sports Photography</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
        Freezing the action and emotion of athletic competition. These images capture 
        the intensity, dedication, and triumph of sports.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200 dark:bg-gray-800 aspect-square rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500">
              <span className="text-white font-semibold">{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
        <p>Gallery images coming soon. This is a placeholder layout.</p>
      </div>
    </div>
  );
}
