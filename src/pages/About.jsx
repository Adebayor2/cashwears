import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

function About() {
  return (
    <>
      <Navbar />

      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            About CashWears
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            CashWears is a modern fashion brand focused on confidence,
            creativity, and premium streetwear culture.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop"
              alt="Fashion"
              className="rounded-3xl h-[600px] object-cover w-full"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>

            <p className="text-gray-600 mb-6 leading-8">
              CashWears was created to redefine modern fashion with simple,
              stylish, and confidence-driven clothing. We believe fashion is a
              form of self-expression.
            </p>

            <p className="text-gray-600 leading-8">
              Our goal is to create premium streetwear pieces that combine
              comfort, quality, and timeless design.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Fashion Designed For Confidence
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            Every CashWears piece is designed to help you stand out while
            remaining comfortable and stylish.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
export default About