import React, { Component } from "react";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about-section">
        <div className="content">
        <h3>
          Welcome to FURN, your ultimate destination for high-quality furniture
          that brings style, comfort, and functionality to every room in your
          home. We take pride in offering a diverse and carefully curated
          collection that caters to various tastes and preferences. At FURN, we
          understand that your home is a reflection of your personality and a
          sanctuary where memories are made. That's why we strive to provide
          furniture that not only meets your practical needs but also adds a
          touch of elegance and charm to your living spaces. Our commitment to
          quality means that we source our furniture from trusted manufacturers
          known for their craftsmanship and attention to detail.
        </h3>
        </div>
        
        <div className="image">
          <img
            src="https://www.ulcdn.net/media/furniture-stores/bangalore/jayanagar/slideshow/Jayanagar-store-desktop.jpg?1675407860"
            alt=""
          />
        </div>
      </div>
    );
  }
}
