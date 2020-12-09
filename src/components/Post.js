import React from "react";
import "../css/post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="DeanHildebrand"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>

      <img
        className="post__image"
        src="https://miro.medium.com/max/2400/1*jDIj2SKAE-Bp32owLoHDjw.png"
      />

      <h4 className="post__text">
        <strong>dean_hildebrand</strong> first post on instagram clone
      </h4>
    </div>
  );
}

export default Post;
