import { useState } from "react"
import { Link } from "react-router-dom"
import { HiMenuAlt3, HiX } from "react-icons/hi"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-widest">
          CASHWEARS
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-gray-500 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-gray-500 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-gray-500 transition">
            Contact
          </Link>
           <Link to="/products" className="hover:text-gray-500 transition">
            Products
          </Link>

          <a
            href="https://wa.me/2348066186996"
            target="_blank"
            className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Shop Now
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-5 flex flex-col gap-4 bg-white">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
            <Link to="/products" className="hover:text-gray-500 transition">
            Products
          </Link>

          <a
            href="https://wa.me/2348066186996"
            target="_blank"
            className="bg-black text-white text-center py-3 rounded-full"
          >
            Shop Now
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar