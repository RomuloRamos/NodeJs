import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelected }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelected(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
