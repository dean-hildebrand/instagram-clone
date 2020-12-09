import React from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <Post
        imageUrl="https://miro.medium.com/max/2400/1*jDIj2SKAE-Bp32owLoHDjw.png"
        username="deanhildebrand"
        caption="passing down props"
      />
      <Post
        imageUrl="https://miro.medium.com/max/2400/1*jDIj2SKAE-Bp32owLoHDjw.png"
        username="atully"
        caption="love you xxx"
      />
      <Post
        imageUrl="https://miro.medium.com/max/2400/1*jDIj2SKAE-Bp32owLoHDjw.png"
        username="joeyt1987"
        caption="sick app bro"
      />
    </div>
  );
}

export default App;
