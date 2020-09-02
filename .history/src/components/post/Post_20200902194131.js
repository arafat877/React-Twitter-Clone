import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import {
  VerifiedUser,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  Publish,
  DeleteOutline,
} from "@material-ui/icons";
import db from "../../utils/firebase";

const Post = forwardRef(
  ({ id, displayName, username, verified, avatar, text, image }, ref) => {
    const deletePost = () => {
      db.collection("posts").doc(id).delete();
    };

    return (
      <div className="post" ref={ref}>
        <div className="postAvatar">
          <Avatar src={avatar} />
        </div>
        <div className="postBody">
          <div className="postBodyHeader">
            <div className="postBodyHeaderText">
              <h3>
                {displayName}
                <span className="postHeaderSpecial">
                  {verified && <VerifiedUser className="postBadge" />}@
                  {username}
                </span>
                <DeleteOutline className="deleteButton" onClick={deletePost} />
              </h3>
            </div>
            <div className="postBodyHeaderDesc">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="postFooter">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
