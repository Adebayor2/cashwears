function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gray-100">
      <div className="max-w-7xl  mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-[6px] text-gray-500 mb-4">
            New Collection
          </p>

          <h1 className="lg:text-7xl text-black md:text-6xl font-black leading-tight mb-6">
               Wear Confidence.
            <br />
          <span className="text-gray-600">  Define Your Style.</span>
          </h1>
   
          <p className="text-gray-600 text-lg mb-8 max-w-lg">
            Modern streetwear crafted for comfort, confidence, and premium
            everyday fashion.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://wa.me/2348066186996"
              target="_blank"
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition"
            >
              Shop Collection
            </a>

            <a
              href="/about"
              className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition"
            >
              Learn More
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop"
            alt="Fashion Model"
            className="rounded-3xl w-full h-150 mt-3 object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero