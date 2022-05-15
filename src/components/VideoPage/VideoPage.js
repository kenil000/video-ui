import React from "react";
import "./Videopage.css";
import videoURL from "../../1_minute_PUSH_UPS_Challenge_Can_You_Finish_60_seconds_LOIhSQLQkGE.mp4";

const VideoPage = () => {
  return (
    <div className="player-wrapper">
      <video className="watch__video" autoplay controls>
        <source src={videoURL} type="video/mp4" />
      </video>
      <div className="watch__btm">
        <h4 className="watch__title">
          1_minute_PUSH_UPS_Challenge_Can_You_Finish_60_seconds
        </h4>
      </div>
    </div>
  );
};

export default VideoPage;
