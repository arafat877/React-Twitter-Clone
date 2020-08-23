import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgetsInput">
        <Search className="widgetsSearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgetsContainer">
        <h2>What's happening</h2>
        <TwitterTimelineEmbed
          sourceType="profile"
          sourceName="reactjs"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
};

export default Widgets;
