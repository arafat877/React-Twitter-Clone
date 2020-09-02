import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "../tweetBox/TweetBox";
import Post from "../post/Post";
import db from "../../utils/firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  useEffect(() => {
    setPosts(
      posts.sort(function (a, b) {
        var c = new Date(a.createdAt);
        var d = new Date(b.createdAt);
        return c - d;
      })
    );
  }, [posts]);

  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((p) => (
          <Post
            key={p._id}
            displayName={p.displayName}
            username={p.username}
            avatar={p.avatar}
            verified={p.verified}
            text={p.text}
            image={p.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
