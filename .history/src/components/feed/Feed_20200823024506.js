import React from "react";
import "./Feed";
import TweetBox from "../tweetBox/TweetBox"
import 'Post' from "../post/Post"

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
        <TweetBox/>
      </div>
      <Post/>
    </div>
  );
};

export default Feed;
