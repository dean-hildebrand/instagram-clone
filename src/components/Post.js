import React from "react";
import "../css/post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <Avatar
        className="post__avatar"
        alt=""
        // src="/static/images/avatar/1.jpg"
      />
      <h3>Username</h3>

      <img
        className="post__image"
        src="https://miro.medium.com/max/2400/1*jDIj2SKAE-Bp32owLoHDjw.png"
        alt=""
      />

      <h4 className="post__text">
        <strong>dean_hildebrand</strong> first post on instagram clone
      </h4>
    </div>
  );
}

export default Post;
