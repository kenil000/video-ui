import React from "react";
import "./WatchVideo.css";
import VideoCard from "../VideoCard/VideoCard";
import { data } from "../../videoinfo";
import Comments from "../Comments/Comments";
import videoURL1 from "../../assets/1_minute_PUSH_UPS_Challenge_Can_You_Finish_60_seconds_LOIhSQLQkGE.mp4";

const WatchVideo = () => {
  return (
    <div className="watch">
      <div className="watch__wrap">
        <div className="watch__left">
          <video className="watch__video" autoplay controls>
            <source src={videoURL1} type="video/mp4" />
          </video>
          <div className="watch__btm">
            <h4 className="watch__title">
              1_minute_PUSH_UPS_Challenge_Can_You_Finish_60_seconds
            </h4>
          </div>
          <div className="watch__comment">
            <Comments
              commentsUrl="http://localhost:3000/comments"
              currentUserId="1"
            />
          </div>
        </div>
        <div className="watch__right">
          <div className="inner__right">
            <h4>Related Videos</h4>
            {data.map((item) => {
              return (
                <VideoCard
                  key={item.title}
                  image={item.image}
                  title={item.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
