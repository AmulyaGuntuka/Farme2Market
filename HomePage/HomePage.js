import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
//import RegisterPopup from "../Register/RegisterPage";
import "./HomePage.css";
import Categories from "../Catoegories/Categories";
//import CarouselCategory from "../Carousel/CarouselCategory";
import TypeWriter from "../AutoWritingText/TypeWriter";
import Video from "../ProcessLine/Video";
import Video1 from "../ProcessLine/Video1";
//import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import KeyFeatures from "../KeyFeatures/KeyFeatures";
import FooterNew from "../Footer/FooterNew";
//import RegisterPage from "../Register/RegisterPage";

function HomePage() {
  //const [buttonPopup, setButtonPopup] = useState(false);
  const welcomeRef = useRef(null); // Reference   for the welcome-text section

  return (
    <div>
      <Navbar scrollToWelcome={() => welcomeRef.current.scrollIntoView({ behavior: "smooth" })} />
      <img
        src={process.env.PUBLIC_URL + "/Navbar/home2.jpg"}
        alt=""
        className="crop"
      />
      <div className="type-writer-container">
        <TypeWriter
          text="Welcome to Farm2Market"
          // "No Service Charge For Your First Order...",
          //"Makes Your Work Easy, Fast and Transparent...",

          textStyle={{
            fontFamily: "Gill Sans",
            fontSize: "20px",
          }}
        />
      </div>
      <div className="overlay-rectangle"></div>
      <div className="overlay-content">
        <p className="overlay-paragraph">Who Are You?</p>
        <a className="profile" href="/farmer">
          <img
            src={process.env.PUBLIC_URL + "/Profile/farmer.png"}
            alt=""
            className="img-user"
          />
        </a>
        <p className="profile-name">Farmer</p>
        <a className="profile" href="/seller">
          <img
            src={process.env.PUBLIC_URL + "/Profile/seller.png"}
            alt=""
            className="img-user"
          />
        </a>
        <p className="profile-name">Consumer</p>
        <a className="profile" href="/deliveryman">
          <img
            src={process.env.PUBLIC_URL + "/Profile/delivery.png"}
            alt=""
            className="img-user"
          />
        </a>
        <p className="profile-name">Delivery services</p>
      </div>

      <div className="button-container">
        <button
          onClick={() => {
            window.location.href = "http://localhost:3000/register";
          }}
          className="button-register"
        >
Get Started        </button>
      </div>

      <div ref={welcomeRef} className="welcome-text">
        <span className="welcome">Welcome to</span>{" "}
        <span className="cropxchange">Farm2Market!</span>
      </div>
      <div className="main-paragraph">
        <p>
        From the Fields to Your Family: To connect consumers with local farmers, bringing you fresh, wholesome produce and goods straight from the field. Our mission is to support local farming families, ensure the highest quality products, and promote sustainable agriculture. It’s more than a purchase — it’s a step towards a healthier, more connected food system.
        </p>
      </div>

      <Categories />

      <div className="how-it-works">
        <span className="welcome">How It</span>{" "}
        <span className="cropxchange">Works</span>
      </div>
      <div className="how-it-works-paragraph">
        <p>
        Our platform connects you directly with local farmers, making it easy to shop for fresh, sustainable produce. Simply browse our selection of seasonal fruits, vegetables, dairy, meats, and more, then place your order and choose your preferred delivery option. Once your order is confirmed, the farmer prepares and delivers the products directly to your doorstep, ensuring freshness and quality. By shopping with us, you're supporting local agriculture and enjoying farm-to-table convenience right at home.
        </p>
      </div>

      <div className="video-container">
        <Video />
      </div>

    <div className="how-to-use">
      <span className="welcome">How to</span>{" "}
      <span className = "cropxchange">Use</span>
    </div>
    <br/>
    <br/>
      <div className="video-container">
        <video controls width="70%" className="how-it-works-video">
          <source src="C:\MERN Stack\Project\CropMaeketplace-main\frontend\src\components\ProcessLine\Agriculture Website using Bootstrap.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="our-solution">
        <span className="welcome">Our</span>{" "}
        <span className="cropxchange">Solution</span>
      </div>
      <div className="how-it-works-paragraph">
        <p>
          Farm2Market is a  market solution that brings together
          Farmers and Customers. Agri Marketplace does not buy or sell
          crops and is not a broker. Instead, we offer you the ability to
          effortlessly connect with the local farmers in order to get fresh fruits and vegetables
          at a lower price. 
        </p>
      </div>

      <div className="all">
        <img
          src={process.env.PUBLIC_URL + "/Homepage/venndiagram.png"}
          alt=""
          className="all-image"
        />
      </div>

      <div className="our-solution">
        <span className="welcome">Our</span>{" "}
        <span className="cropxchange">Pricing</span>
      </div>
      <div className="how-it-works-paragraph">
        <ul className="list-content">
          <li>
            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} /> All
            users who prefer to post orders, have to pay a small fee to
            Farm2Market.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} /> The
            first order is free of charge for all users and charges will be done
            after the first bid.
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} /> After the bid is updated, there
            is a small charge.
          </li>
        </ul>
      </div>

      <div className="all">
        <img
          src="https://agrimp.com/assets/icons/grain_bag_en-35a97c53a2457418423528885a62a4c2d52f0427241fa798c2f80432caf10b99.png"
          alt=""
          className="price-image"
        />
      </div>

      <div className="our-solution">
        <span className="welcome">Key</span>{" "}
        <span className="cropxchange">Features</span>
      </div>
      <div className="how-it-works-paragraph">
        <p>
          Discover how Farm2Market can benefit you and all other
          food supply chain actors.
        </p>
      </div>

      <KeyFeatures />

      <FooterNew />
    </div>
  );
}

export default HomePage;