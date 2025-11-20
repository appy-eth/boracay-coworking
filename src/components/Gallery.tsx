const images = [
  {
    url: '/IMG_9463.JPG',
    title: 'Cozy Booth Seating',
    span: 'md:col-span-2'
  },
  {
    url: '/resort-pool.jpg',
    title: 'Pool Access'
  },
  {
    url: '/laptop-on-beach.JPG',
    title: 'Beach Workspace'
  },
  {
    url: '/where-is-boracay-located.jpg',
    title: 'Beach Paradise',
    span: 'md:col-span-2'
  },
  {
    url: '/Paraw-Sailing.webp',
    title: 'Sunset Sailing'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your New Office
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Just 2 minutes from the beach and right near D'Mall
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3] ${image.span || ''}`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
