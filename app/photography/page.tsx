import Link from 'next/link';

export default function Photography() {
  const categories = [
    {
      name: 'Landscape',
      href: '/photography/landscape',
      description: 'Breathtaking views and natural wonders',
      gradient: 'from-green-400 to-blue-500',
    },
    {
      name: 'Sports',
      href: '/photography/sports',
      description: 'Action-packed moments in motion',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      name: 'Moments',
      href: '/photography/moments',
      description: 'Candid captures of life\'s special times',
      gradient: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-center mb-6">Photography</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
        Explore my photography work across different categories. Each collection tells a unique story.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="group"
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className={`h-64 bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                <span className="text-white text-3xl font-bold">{category.name}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
