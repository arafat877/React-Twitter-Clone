import React from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBoxInput">
          <Avatar src="https://avatars2.githubusercontent.com/u/1486366?s=460&u=e8efaf0d63842b11771391988d38139a2b631f05&v=4" />
            <input placeholder="What's happening?/> 
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
