import React, { useState } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      imageUrl: "https://miro.medium.com/max/2400/1*jDIj2SKAE-Bp32owLoHDjw.png",
      username: "deanhildebrand",
      caption: "passing down props",
    },
    {
      imageUrl: "https://miro.medium.com/max/2400/1*jDIj2SKAE-Bp32owLoHDjw.png",
      username: "deanhildebrand",
      caption: "passing down props",
    },
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {posts.map((post) => (
        <Post
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
      />
    </div>
  );
}

export default App;
