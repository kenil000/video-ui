import React from "react";
import "./DietVideo.css";
import VideoCard from "../VideoCard/VideoCard";

function DietVideo() {
  const videodata = [
    {
      id: "2",
      image:
        "https://static.toiimg.com/photo/msid-70769358/70769358.jpg?2053649",
      title: "The Best Science-Based Diet for Fat Loss (ALL MEALS SHOWN!)",
      Url: "../../1_minute_PUSH_UPS_Challenge_Can_You_Finish_60_seconds_LOIhSQLQkGE.mp4",
    },

    {
      id: "4",
      image:
        "https://previews.123rf.com/images/adiruch/adiruch1702/adiruch170200300/72343848-diet-plan-dieta-saludable-dieta-adelgazamiento-y-p%C3%A9rdida-de-peso-concepto.jpg",
      title: "How to Create a Healthy Plate",
      Url: "../../1_minute_PUSH_UPS_Challenge_Can_You_Finish_60_seconds_LOIhSQLQkGE.mp4",
    },

    {
      id: "6",
      image:
        "https://marathonhandbook.com/wp-content/uploads/2022/01/Runners-Meal-Plan10.jpg",
      title: "Build The Perfect Meal Plan To Get Ripped (4 Easy Steps)",
      Url: "../../1_minute_PUSH_UPS_Challenge_Can_You_Finish_60_seconds_LOIhSQLQkGE.mp4",
    },
  ];
  return (
    <div className="dietVideos">
      <h3>Diet Video</h3>
      <div className="dietVideos__videos">
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

export default DietVideo;
