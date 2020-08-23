import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "../../utils/firebase";

const TweetBox = () => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Safak Kocaoglu",
      username: "safak",
      avatar:
        "https://avatars2.githubusercontent.com/u/1486366?s=460&u=e8efaf0d63842b11771391988d38139a2b631f05&v=4",
      verified: true,
      text: message ,
      image,
    });
    setMessage("");
    setImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBoxInput">
          <Avatar src="https://avatars2.githubusercontent.com/u/1486366?s=460&u=e8efaf0d63842b11771391988d38139a2b631f05&v=4" />
          <input
            value={message}
            placeholder="What's happening?"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <input
          value={image}
          className="tweetBoxInputImage"
          placeholder="Enter an img URL (Optional)"
          type="text"
          onChange={(e) => setImage(e.target.value)}
        />
        <Button
          type="submit"
          onClick={handleSend}
          className="tweetBoxTweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
