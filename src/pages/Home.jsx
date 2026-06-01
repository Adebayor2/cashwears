import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Hero from "../components/ui/Hero"
import Product from "./Product"


  function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="py-20">
       <Product/>
      </section>

      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
            <p className="text-gray-400">
              Carefully designed fashion pieces with premium materials.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Nationwide Delivery</h3>
            <p className="text-gray-400">
              Fast and reliable delivery across Nigeria.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Modern Style</h3>
            <p className="text-gray-400">
              Streetwear-inspired fashion built for confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join The CashWears Community
          </h2>
        <p className="text-gray-600 mb-8 text-lg">
            Stay updated with new arrivals and exclusive fashion drops.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
         

            <button className="bg-black text-white px-8 w-100 py-4 rounded-full hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home


