import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import {
  VerifiedUser,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  Publish,
} from "@material-ui/icons";

const Post = () => {
  return (
    <div className="post">
      <div className="postAvatar">
        <Avatar src="https://avatars2.githubusercontent.com/u/1486366?s=460&u=e8efaf0d63842b11771391988d38139a2b631f05&v=4" />
      </div>
      <div className="postBody">
        <div className="postBodyHeader">
          <div className="postBodyHeaderText">
            <h3>
              Safak Kocaoglu{" "}
              <span className="postHeaderSpecial">
                <VerifiedUser className="postBadge" />
                @safak.k
              </span>
            </h3>
          </div>
          <div className="postBodyHeaderDesc">
            <p>First post 🚀 </p>
          </div>
        </div>
        <img
          src="https://avatars2.githubusercontent.com/u/1486366?s=460&u=e8efaf0d63842b11771391988d38139a2b631f05&v=4"
          alt=""
        />
        <div className="postFooter">
            <ChatBubbleOutline fontSize="small"/>
            <Repeat fontSize="small"/>
            <FavoriteBorder fontSize="small"/>
            <Publish fontSize="small"/>
        </div>
      </div>
    </div>
  );
};

export default Post;
