import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";

const TweetBox = () => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
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
          className="tweetBoxInputImage"
          placeholder="Enter an img URL (Optional)"
          type="text"
        />
        <Button className="tweetBoxTweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
