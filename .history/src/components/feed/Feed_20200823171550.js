import React from "react";
import "./Feed.css";
import TweetBox from "../tweetBox/TweetBox";
import Post from "../post/Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName="Safak Kocaoglu"
        username="safak.k"
        avatar="https://avatars2.githubusercontent.com/u/1486366?s=460&u=e8efaf0d63842b11771391988d38139a2b631f05&v=4"
        verified
        text="First post :)"
      />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
