import React from "react";


class LottiePlayer extends React.Component {
    shouldComponentUpdate() {
      return false;
    }
  
    render() {
      return (
        <lottie-player
          src="https://lottie.host/1d2cf11c-b794-4de1-afa1-86f59508128e/8xDr2tRotJ.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></lottie-player>
      );
    }
  }
  export default LottiePlayer;