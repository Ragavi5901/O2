import React from 'react'
import Hero from './Hero'
import ShopCategory from './ShopCategory'
import FeaturedProducts from './FeaturedProducts'
import RelaxationSection from './RelaxationSection'
import WhyChoose from './WhyChoose'
import Reviews from './Reviews'
import ProductRange from './ProductRange'

const Home = () => {
  return (
    <div>
        <Hero />
        <ProductRange />
        <ShopCategory />
        <FeaturedProducts />
        <RelaxationSection />
        <WhyChoose />
        <Reviews />
    </div>
  )
}

export default Home