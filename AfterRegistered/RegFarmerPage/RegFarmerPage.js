import React, { useState, useEffect } from "react";
import "./RegFarmerPage.css";
import NavbarRegistered from "../../NavbarRegistered/NavbarRegistered";
import FooterNew from "../../Footer/FooterNew";
import RegCategories from "../RegCatoegories/RegCategories";
import TypeWriter from "../../AutoWritingText/TypeWriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faShoppingBag, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function RegFarmerPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // For handling loading state

  // Get farmerId from localStorage (or from context)
  const farmerId = localStorage.getItem("farmerId");  // Ensure that farmerId is available

  // Fetch products from API if farmerId is available
  useEffect(() => {
    if (farmerId) {
      const fetchProducts = async () => {
        try {
          const response = await fetch(`http://localhost:8070/product/farmer/${farmerId}`);
          if (response.ok) {
            const data = await response.json();
            setProducts(data);  // Set products in state
          } else {
            console.error("Failed to fetch products:", response.status);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);  // Stop loading after fetching is complete
        }
      };

      fetchProducts();
    } else {
      console.error("Farmer ID is not available.");
      setLoading(false);  // Stop loading in case of no farmerId
    }
  }, [farmerId]);  // Runs only once on component mount

  if (loading) {
    return <div>Loading...</div>;  // Show a loading indicator while data is being fetched
  }

  return (
    <div>
      <NavbarRegistered />
      <div className="nothing"></div>

      <div className="crop-container">
        <img
          src="https://organicbiz.ca/wp-content/uploads/2019/05/vegetables-farmers-870915532-alle12-iStock-GettyImages.jpg"
          alt="Farmers"
          className="crop-image"
        />
      </div>

      <div className="type-writer-container">
        <TypeWriter
          text="Welcome Farmers!"
          loop={false}
          className="writer"
          textStyle={{
            fontFamily: "Gill Sans",
            fontSize: "60px",
          }}
        />
      </div>

      <div className="categories-container">
        <div className="categories-div">
          <RegCategories />
        </div>
      </div>

      <div className="nothing2"></div>
      <div className="topic">
        <p>Your Products</p>
      </div>

      <div className="orders-wrapper">
        <div className="orders-container">
          {products.length > 0 ? (
            products.slice(0, 8).map((product, index) => (
              <div key={index} className="order-item">
                <img
                  src={`http://localhost:8070/uploads/${product.productImage}`}
                  alt={product.item || "Product Image"}
                  className="order-image"
                />
                <p>{product.item}</p>
                <p>Quantity: {product.quantity || "N/A"}</p>
                <p>Price: ₹{product.price ? product.price.toFixed(2) : "N/A"}</p>
                <p>Posted Date: {product.postedDate || "N/A"}</p>
                <p>Expires Date: {product.expireDate || "N/A"}</p>
                <button className="cart-button">
                  <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                </button>
                <button className="supply-button">
                  <FontAwesomeIcon icon={faShoppingBag} /> Buy Now
                </button>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
        {products.length > 8 && (
          <a href="/farmerorder" className="view-all-button1">
            <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
          </a>
        )}
      </div>

      <FooterNew />
    </div>
  );
}

export default RegFarmerPage;
