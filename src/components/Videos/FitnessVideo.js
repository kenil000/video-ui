import React from "react";
import "./FitnessVideo.css";
import VideoCard from "../VideoCard/VideoCard";

function FitnessVideo() {
  const videodata = [
    {
      id: "1",
      image:
        "https://athleanx.com/wp-content/uploads/2020/04/hit-every-muscle-with-pushup-variations-yt-1024x576.png",
      title: "10 MIN FULL BODY HOME WORKOUT",
      Url: "../../1_minute_PUSH_UPS_Challenge_Can_You_Finish_60_seconds_LOIhSQLQkGE.mp4",
    },

    {
      id: "3",
      image:
        "https://dailyworkoutspro.com/wp-content/uploads/2020/07/maxresdefault-8-1024x576.jpg",
      title: "COMPLETE 20 MIN ABS WORKOUT",
      Url: "../../1_minute_PUSH_UPS_Challenge_Can_You_Finish_60_seconds_LOIhSQLQkGE.mp4",
    },

    {
      id: "5",
      image:
        "https://cdn.shopify.com/s/files/1/0866/7664/files/biceps_workout_3_1024x1024.jpg?v=1614065906",
      title: "How To Build Huge Biceps: Optimal Training Explained",
      Url: "../../1_minute_PUSH_UPS_Challenge_Can_You_Finish_60_seconds_LOIhSQLQkGE.mp4",
    },
  ];
  return (
    <div className="fitnessVideos">
      <h3>Fitness Video</h3>
      <div className="fitnessVideos__videos">
        {videodata.map((item) => {
          return (
            <VideoCard
              key={item.id}
              image={item.image}
              title={item.title}
              videos={videodata}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FitnessVideo;
