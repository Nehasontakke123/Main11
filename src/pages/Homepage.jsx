import React from 'react'
import DiscoverProducts from '../components/DiscoverProducts'
import FilterSidebar from '../components/FilterSidebar'
import ProductList from '../components/ProductList'

const Homepage = () => {
  return (
    <div>
        <DiscoverProducts/>
        <FilterSidebar/>
        <ProductList/>
    </div>
  )
}

export default Homepage