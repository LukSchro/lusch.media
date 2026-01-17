export default function Videography() {
  // Placeholder for video items - would be replaced with actual videos
  const videoItems = [
    {
      id: 1,
      title: 'Mountain Adventure',
      description: 'A cinematic journey through alpine landscapes',
      duration: '3:45',
    },
    {
      id: 2,
      title: 'Sports Highlight Reel',
      description: 'Best moments from the championship season',
      duration: '5:20',
    },
    {
      id: 3,
      title: 'Urban Stories',
      description: 'Life in motion through city streets',
      duration: '4:12',
    },
    {
      id: 4,
      title: 'Nature Documentary',
      description: 'Wildlife in their natural habitat',
      duration: '8:30',
    },
    {
      id: 5,
      title: 'Behind the Scenes',
      description: 'Making of a photography project',
      duration: '6:15',
    },
    {
      id: 6,
      title: 'Event Coverage',
      description: 'Full coverage of a special event',
      duration: '12:00',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-center mb-6">Videography</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
        Stories told through motion and sound. Explore my video work spanning documentaries, 
        events, and creative projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {videoItems.map((video) => (
          <div
            key={video.id}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
          >
            <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center relative">
              <div className="text-white text-center">
                <svg
                  className="w-16 h-16 mx-auto mb-2 opacity-80"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                <span className="text-sm">{video.duration}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{video.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center text-gray-600 dark:text-gray-400">
        <p>Video player integration coming soon. This is a placeholder layout.</p>
      </div>
    </div>
  );
}
