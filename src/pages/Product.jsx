import React from 'react'
import Products from "../data/Products"
import SectionTitle from "../components/ui/SectionTitle"
import ProductCard from "../components/ui/ProductCard"
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
const Product = () => {
  return (
    <>
    <Navbar/>
     
       <div className="max-w-7xl mx-auto px-4 mt-5">
          <SectionTitle
            title="Featured Collection"
            subtitle="Discover premium fashion pieces curated for modern streetwear lovers."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Footer/>
      
    </>
  )
}

export default Product