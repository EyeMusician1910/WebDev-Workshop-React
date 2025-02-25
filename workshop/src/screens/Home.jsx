import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductCatalog from '../components/ProductCatalog'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <ProductCatalog />
    </div>
  )
}

export default Home