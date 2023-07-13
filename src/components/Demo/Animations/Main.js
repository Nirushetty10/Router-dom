import React, { Component } from "react";
import SliderCard from "./SliderCard";

export default class Main extends Component {
  render() {
    let image = [
      "https://cdn.pixabay.com/photo/2023/06/04/15/51/mountains-8040132_1280.jpg",
      "https://cdn.pixabay.com/photo/2023/07/11/01/09/flowers-8119338_1280.jpg",
      "https://cdn.pixabay.com/photo/2023/06/15/12/26/lotus-8065281_1280.jpg",
      "https://cdn.pixabay.com/photo/2022/11/29/19/10/poppy-7625142_1280.jpg",
    ];
    return image.map((url) => <SliderCard url={url} />);
  }
}
