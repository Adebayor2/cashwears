function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300 hover:-translate-y-2">
      <img
        src={product.image}
        alt={product.name}
        className="w-100 h-100 object-cover "
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>

        <p className="text-gray-500 mb-4">{product.price}</p>

        <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition">
          View Product
        </button>
      </div>
    </div>
  )
}

export default ProductCard