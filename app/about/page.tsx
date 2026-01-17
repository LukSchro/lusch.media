export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">About Lukas Schroeder</h1>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-6xl font-bold">LS</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Visual Storyteller</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                I'm a passionate photographer and videographer dedicated to capturing 
                the beauty of the world around us. With years of experience in various 
                styles of visual media, I specialize in landscape, sports, and candid 
                photography, as well as documentary and creative videography.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                My work is driven by a desire to freeze moments in time and tell 
                compelling stories through images and motion.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Experience</h3>
            <p className="text-gray-600 dark:text-gray-400">Professional photographer and videographer</p>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Specialties</h3>
            <p className="text-gray-600 dark:text-gray-400">Landscape, Sports, Events, Documentary</p>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-400">Available for projects worldwide</p>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Services</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>Landscape and Nature Photography</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>Sports and Action Photography</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>Event Coverage and Candid Photography</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>Documentary and Commercial Videography</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span>Video Editing and Post-Production</span>
            </li>
          </ul>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl mb-6">
            Interested in working together? Let's create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@lusch.media"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Email Me
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
