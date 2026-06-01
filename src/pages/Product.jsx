import React from 'react'
import products from "../data/products"
import SectionTitle from "../components/ui/SectionTitle"
import ProductCard from "../components/ui/ProductCard"
const Product = () => {
  return (
    <>
       <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Featured Collection"
            subtitle="Discover premium fashion pieces curated for modern streetwear lovers."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
    </>
  )
}

export default Product