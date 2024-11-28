import React, { useState } from "react";
import axios from "axios";
import "./AddProductPage.css";

function AddProductPage() {
  const farmerId = localStorage.getItem("farmerId"); // Get farmerId from localStorage
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    item: "",
    productImage: null,
    category: "",
    quantity: 1,
    price: "",
    district: "",
    mobile: "",
    address: "",
    expireDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, productImage: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!farmerId) {
      alert("Farmer ID is missing. Please log in again.");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "productImage" && formData[key]) {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    });
    data.append("farmerId", farmerId); // Attach farmerId to the request

    try {
      const response = await axios.post("http://localhost:8070/product/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(response.data.message || "Product added successfully!");
      setFormData({
        name: "",
        email: "",
        item: "",
        productImage: null,
        category: "",
        quantity: 1,
        price: "",
        district: "",
        mobile: "",
        address: "",
        expireDate: "",
      });
    } catch (error) {
      console.error("Error adding product:", error.response || error.message);
      alert(error.response?.data?.message || "Failed to add product.");
    }
  };

  return (
    <div className="add-product-page">
      <h2>Add New Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Item:
          <input
            type="text"
            name="item"
            value={formData.item}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Product Image:
          <input type="file" name="productImage" onChange={handleFileChange} required />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            min="1"
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          District:
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Mobile:
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Expire Date:
          <input
            type="date"
            name="expireDate"
            value={formData.expireDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Farmer Id:
          <input
            type="text"
            name="farmerId"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductPage;
