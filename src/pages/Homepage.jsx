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






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DiscoverProducts from '../components/DiscoverProducts';
// import FilterSidebar from '../components/FilterSidebar';
// import ProductList from '../components/ProductList';

// const HomePage = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedFilters, setSelectedFilters] = useState({});
//   const [selectedSort, setSelectedSort] = useState('RECOMMENDED');

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching products", err);
//       });
//   }, []);

//   return (
//     <div className="homepage">
//       <DiscoverProducts />

//       <div className="main-content" style={{ display: 'flex' }}>
//         <FilterSidebar
//           products={products}
//           selectedFilters={selectedFilters}
//           setSelectedFilters={setSelectedFilters}
//           setSelectedSort={setSelectedSort}
//         />
//         <ProductList
//           products={products}
//           selectedFilters={selectedFilters}
//           selectedSort={selectedSort}
//         />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
