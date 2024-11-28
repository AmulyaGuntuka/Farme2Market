import React, { useState, useEffect } from "react";
import "./FarmerPage.css";
import Navbar from "../Navbar/Navbar";
import FooterNew from "../Footer/FooterNew";
import Categories from "../Catoegories/Categories";  // Fixed typo here
import TypeWriter from "../AutoWritingText/TypeWriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faShoppingBag, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function FarmerPage() {
  const [products, setProducts] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8070/product");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="nothing"></div>
      <div className="crop-container">
        <img
          src="https://organicbiz.ca/wp-content/uploads/2019/05/vegetables-farmers-870915532-alle12-iStock-GettyImages.jpg"
          alt=""
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
          <Categories />
        </div>
      </div>

      {/* Fresh Farm Products Section */}
      <div className="nothing2"></div>
      <div className="topic">
        <p>Fresh Farm Products</p>
      </div>

      <div className="orders-wrapper">
        <div className="orders-container">
          {products.slice(0, 8).map((product, index) => (
            <div key={index} className="order-item">
              <img
                src={`http://localhost:8070/uploads/${product.productImage}`}  // Fixed string interpolation here
                alt={product.item}
                className="order-image"
              />
              <p>{product.item}</p>
              <p>Quantity: {product.quantity || "N/A"}</p>
              <p>Price: ₹{product.price.toFixed(2)}</p>
              <p>Posted Date: {product.postedDate || "N/A"}</p>
              <p>Expires Date: {product.expireDate || "N/A"}</p>
              <button className="cart-button">
                <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
              </button>
              <button className="supply-button">
                <FontAwesomeIcon icon={faShoppingBag} /> Buy Now
              </button>
            </div>
          ))}
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

export default FarmerPage;
