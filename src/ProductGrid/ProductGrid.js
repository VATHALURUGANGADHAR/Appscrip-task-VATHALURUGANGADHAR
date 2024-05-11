import ProductCard from "../ProductCard/ProductCard";
import './productGrid.css'
import React, { useState, useEffect } from 'react';

const ProductGrid = () =>  {
     // State for storing products
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); // Update state with fetched products
        console.log(data)
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once after initial render

  // Render the grid with ProductCards
  return (

    <div className="mainContainer">
      <div className="dropdown">
      <div>
        <label for= "dropdown" className="droplabel">RECOMMENDED</label>
          <select id = "dropdown">
            <option value="RECOMMENDED"> RECOMMENDED</option>
            <option value= "NEWEST FIRST">NEWEST FIRST</option>
            <option value= "POPULAR">POPULAR</option>
            <option value = "PRICE: HIGH TO LOW">PRICE: HIGH TO LOW</option>
            <option value  ="PRICE: "LOW TO HIGH>PRICE: LOW TO HIGH</option>
          </select>
      </div>
      </div>

      <ul className="listContainer">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
      </ul>
    </div>
  );
};


export default ProductGrid