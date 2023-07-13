import React, { Component } from "react";
import { Carousel } from "react-carousel-minimal";
import "./Home.scss";

export default class Home extends Component {
  render() {
     const data = [
      {
        image:
          "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-slider-pic1.webp",
        caption: "Sofa",
      },
      {
        image:
          "https://images.squarespace-cdn.com/content/v1/63655ecf69f2e70bf04a8396/5cbe5e0e-c306-44bc-8559-59a8374dbf6d/CV-american-modern-3.jpg",
        caption: "Bed",
      },
      {
        image:
          "https://rukminim1.flixcart.com/image/450/450/xif0q/dining-set/y/o/d/-original-imaghsahhvbha7tg.jpeg?q=90&crop=false",
        caption: "Dining",
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/2660/5236/files/living_e00a2e52-4e73-44e4-938a-14fc8c1a75cd.jpg?v=1614882859",
        caption: "Sofa",
      },
      {
        image:
          "https://image.made-in-china.com/2f0j00LqZVOtinlluA/Modern-Home-Restaurant-Dining-Room-Furniture-High-Quality-Extendable-MDF-Table-Top-Dining-Table-with-Steel-Tube-Leg.webp",
        caption: "Dining",
      },
      {
        image:
          "https://floatingwalls.in/admin/dining-chair/UploadImages/FUR-01211_0.png",
        caption: "Table",
      },
      {
        image:
          "https://media1.popsugar-assets.com/files/thumbor/BDM0sfMgqBNF99Fv7hFfUAk1IvA/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/03/10/910/n/1922794/f0e35b2e04ff3789_netimgDnvsfu/i/High-Quality-Couch-Set-Playa-Outdoor-Reversible-Sectional-Lounge-Chair-Coffee-Table-Set.jpg",
        caption: "Outdoor sofa",
      },
      {
        image:
          "https://spnsfurniture.com/wp-content/uploads/2019/11/3-Important-Types-of-Furniture-for-Your-Living-Room.jpg",
        caption: "Sofa",
      }
    ];

    const captionStyle = {
      fontSize: "2em",
      fontWeight: "bold",
    };
    const slideNumberStyle = {
      fontSize: "20px",
      fontWeight: "bold",
    };

    return (
      <div className="home-main">
        <div className="section-left">
          <h1>Revamp Your Space With Furn</h1>
          <p>
            Our Website Offers A Diverse Collection Of High Quality Furniture
            For Every room In Home. At Competitive Prices. Easy Delivery Options
            Make Shopping Convenient.
          </p>
        </div>
        <div className="section-right">
          <div className="App">
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  padding: "0",
                }}
              >
                <Carousel
                  data={data}
                  time={2000}
                  width="600px"
                  height="400px"
                  captionStyle={captionStyle}
                  radius="10px"
                  slideNumber={true}
                  slideNumberStyle={slideNumberStyle}
                  captionPosition="bottom"
                  automatic={true}
                  dots={true}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
                  thumbnails={false}
                  thumbnailWidth="10px"
                  style={{
                    textAlign: "center",
                    width: "600px",
                    maxHeight: "400px",
                    // margin: "40px auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
