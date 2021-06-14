import React from "react";
import './Video.scss';

function Video() {
  return (
    <div className="Video BoxShadow">
      <div className="Video__Header">
        <h3 className="Video__Header">Product Video</h3>
        <span className="Video__DotIcon"></span>
      </div>
      <div className="VideoContainer">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/Oy6hk6Y7VHQ`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        />
      </div>
    </div>
  );
}

export default Video;
