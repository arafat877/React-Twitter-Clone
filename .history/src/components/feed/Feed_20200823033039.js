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
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
