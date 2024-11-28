import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./FruitPage.css";
import Navbar from "../../NavbarRegistered/NavbarRegistered";
import FooterNew from "../../Footer/FooterNew";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSquarePlus, faCartPlus } from "@fortawesome/free-solid-svg-icons";

function FruitPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8070/product/fruit");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    navigate("/add-product"); // Correctly use navigate to redirect
  };

  return (
    <div>
      <Navbar />
      <div className="nothing-cateogory-pages-veg"></div>
      <div className="search-container-veg">
        <input
          type="text"
          placeholder="Search vegetables..."
          className="search-input-veg"
        />
        <button className="search-button-veg">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <div>
          <button
            className="add-products-button"
            onClick={handleAddProduct} // Correctly calling the function
          >
            <FontAwesomeIcon icon={faSquarePlus} /> {"  "} Add New Vegetable
          </button>
        </div>
        <div>
          <button
            className="make-order-button-veg"
            onClick={() => {
              window.location.href = "http://localhost:3000/order";
            }}
          >
            <FontAwesomeIcon icon={faCartPlus} /> {"  "} Make an Order
          </button>
        </div>
      </div>
      
      <div className="products-container-veg">
  {products.length > 0 ? (
    products.map((product) => (
      <div className="products-item-veg" key={product._id}>
  <a href="/login" className="product-item-veg-link">
    <img
      src={`http://localhost:8070/uploads/${product.productImage}`}
      alt={product.name}
    />
    <p><strong>Name:</strong> {product.name}</p>
    <p><strong>Item:</strong> {product.item}</p>
    <p><strong>Category:</strong> {product.category}</p>
    <p><strong>Quantity:</strong> {product.quantity}</p>
    <p><strong>Price:</strong> ₹{product.price}</p>
    <p><strong>District:</strong> {product.district}</p>
    <p><strong>Mobile:</strong> {product.mobile}</p>
    <p><strong>Address:</strong> {product.address}</p>
    <p><strong>Expire Date:</strong> {product.expireDate}</p>
  </a>
</div>

    ))
  ) : (
    <p>No vegetable products found.</p>
  )}
</div>

      <div className="nothing-cateogory-pages-below-veg"></div>
      <FooterNew />
    </div>
  );
}

export default FruitPage;  
