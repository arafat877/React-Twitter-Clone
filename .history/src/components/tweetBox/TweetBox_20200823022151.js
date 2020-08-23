import React from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBoxInput"></div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
