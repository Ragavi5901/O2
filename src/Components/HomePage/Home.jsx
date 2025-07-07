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
    <div className="w-full overflow-x-hidden">
  <div className="max-w-[100vw] overflow-x-hidden">
    <Hero />
    <ProductRange />
    <ShopCategory />
    <FeaturedProducts />
    <RelaxationSection />
    <WhyChoose />
    <Reviews />
  </div>
</div>
  )
}

export default Home