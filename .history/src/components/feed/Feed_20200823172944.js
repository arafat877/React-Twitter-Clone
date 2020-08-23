import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "../tweetBox/TweetBox";
import Post from "../post/Post";
import db from "../../utils/firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((p) => (
        <Post
          displayName={p.displayName}
          username={p.username}
          avatar={p.avatar}
          verified={p.verified}
          text={p.text}
          image={p.image}
        />
      ))}
    </div>
  );
};

export default Feed;
