import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./RegVegetablePage.css";
import Navbar from "../../NavbarRegistered/NavbarRegistered";
import FooterNew from "../../Footer/FooterNew";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSquarePlus, faCartPlus } from "@fortawesome/free-solid-svg-icons";

function RegVegetablePage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function
  const farmerId = localStorage.getItem("farmerId"); // Get the logged-in farmer's ID

  useEffect(() => {
    if (farmerId) {
      // Fetch the products for the logged-in farmer based on their ID
      const fetchProducts = async () => {
        try {
          const response = await fetch(`http://localhost:8070/product/vegetable/byfarmer/${farmerId}`);
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      fetchProducts();
    } else {
      console.error("Farmer ID not found in localStorage.");
    }
  }, [farmerId]); // Run this effect whenever the farmerId changes

  const handleAddProduct = () => {
    navigate("/add-product"); // Redirection to AddProductPage as per your requirement
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
            onClick={handleAddProduct} // Calling the function to redirect
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
              {/* Product details display */}
              <div className="product-item-veg-link">
                <img
                  src={`http://localhost:8070/uploads/${product.productImage}`}
                  alt={product.name}
                  className="product-image"
                />
                <p><strong>Farmer Name:</strong> {product.name}</p>
                <p><strong>Item:</strong> {product.item}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Quantity:</strong> {product.quantity}</p>
                <p><strong>Price:</strong> ₹{product.price}</p>
                <p><strong>District:</strong> {product.district}</p>
                <p><strong>Mobile:</strong> {product.mobile}</p>
                <p><strong>Address:</strong> {product.address}</p>
                <p><strong>Expire Date:</strong> {product.expireDate}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No vegetable products found for this farmer.</p>
        )}
      </div>

      <div className="nothing-cateogory-pages-below-veg"></div>
      <FooterNew />
    </div>
  );
}

export default RegVegetablePage;
