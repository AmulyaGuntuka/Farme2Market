import React, { useState, useEffect } from "react";
import "./DeliverymanPage.css";
import Navbar from "../Navbar/Navbar";
import FooterNew from "../Footer/FooterNew";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import TypeWriter from "../AutoWritingText/TypeWriter";

function DeliverymanPage() {
  const [deliveryPosts, setDeliveryPosts] = useState([]);

  useEffect(() => {
    const fetchDeliveryPosts = async () => {
      try {
        // Replace this mock data with the real API data
        const mockData = [
          {
            vehicleImage:
              "http://5.imimg.com/data5/SELLER/Default/2023/2/WH/ER/JK/93093082/honda-sp-125-bike.jpg",
            model: "Bike",
            capacity: 800,
            price: 70,
          },
          {
            vehicleImage:
              "http://www.team-bhp.com/forum/attachments/commercial-vehicles/1228964d1397198673-maharashtra-issue-81-450-replacement-auto-rickshaw-permits-yellow-double-light-isometric.jpg",
            model: "Auto",
            capacity: 300,
            price: 40,
          },
          {
            vehicleImage:
              "https://ace.tatamotors.com/images/mini-truck/tata-ace-modes/tata-ace-zip-xl.png",
            model: "Van",
            capacity: 500,
            price: 50,
          },
          {
            vehicleImage:
              "https://images.news18.com/ibnlive/uploads/2020/12/1608756772_tata-ultra-t.7.jpg?impolicy=website&width=510&height=356",
            model: "Truck",
            capacity: 1000,
            price: 100,
          },
        ];

        // Simulate fetching data from an API
        setDeliveryPosts(mockData);
      } catch (error) {
        console.error("Error fetching delivery posts:", error);
      }
    };

    fetchDeliveryPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="nothing"></div>
      <div className="crop-container">
        <img
          src="https://imgnew.outlookindia.com/public/uploads/articles/2019/1/31/amazon.jpg"
          alt="Delivery Banner"
          className="crop-image"
        />
      </div>
      <div className="topic"></div>

      <div className="type-writer-container">
        <TypeWriter
          text="Welcome Deliverymen!"
          loop={false}
          className="writer"
          textStyle={{
            fontFamily: "Gill Sans",
            fontSize: "60px",
          }}
        />
      </div>

      <div className="nothing2"></div>

      <div className="topic">
        <p>Delivery Services</p>
      </div>

      <p id="note">Read it</p>

      <div className="orders-wrapper">
        <div className="orders-container">
          {deliveryPosts.slice(0, 4).map((order, index) => (
            <div key={index} className="order-item">
              <img
                src={order.vehicleImage}
                alt={`${order.model} delivery vehicle`}
                className="order-image"
              />
              <p>{order.model}</p>
              <p>Capacity: {order.capacity} kg</p>
              <p>Price: Rs.{order.price}/km</p>
              <button className="supply-button">Select</button>
            </div>
          ))}
        </div>
        {deliveryPosts.length > 4 && (
          <a href="/deliverypost" className="view-all-button">
            <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
          </a>
        )}
      </div>

      <FooterNew />
    </div>
  );
}

export default DeliverymanPage;
