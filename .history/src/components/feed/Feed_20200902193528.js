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
      setPosts(snapshot.docs.map((doc) => doc))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((p) => (
          <Post
            key={p.id}
            id={p.id}
            displayName={p.data().displayName}
            username={p.data().username}
            avatar={p.data().avatar}
            verified={p.data().verified}
            text={p.data().text}
            image={p.data().image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
