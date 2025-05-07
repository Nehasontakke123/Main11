import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart } from 'react-icons/fa'; // Import wishlist icon from react-icons
import '../assets/css/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]); // State to track wishlist

  // Fetch products from FakeStoreAPI
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching products");
        setLoading(false);
      });
  }, []);

  // Handle adding/removing items from the wishlist
  const toggleWishlist = (product) => {
    if (wishlist.includes(product.id)) {
      setWishlist(wishlist.filter(id => id !== product.id)); // Remove from wishlist
    } else {
      setWishlist([...wishlist, product.id]); // Add to wishlist
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="product-list">
      {/* <h2>Product List</h2> */}
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="wishlist-icon" onClick={() => toggleWishlist(product)}>
              <FaHeart color={wishlist.includes(product.id) ? "red" : "gray"} />
            </div>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
