function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">CASHWEARS</h2>
          <p className="text-gray-400">
            Premium fashion designed for confidence and comfort.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-2 text-gray-400">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>

          <p className="text-gray-400 mb-2">WhatsApp: 08066186996</p>
          <p className="text-gray-400">Lagos, Nigeria</p>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-gray-500 text-sm">
        © 2026 CashWears. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer