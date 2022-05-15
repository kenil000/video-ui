import React from "react";
import "./Videocard.css";
import { useNavigate } from "react-router-dom";

function VideoCard({ image, title }) {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const get_video_details = async () => {
  //     const {
  //       data: { items },
  //     } = await request("/videos", {
  //       params: {
  //         id: _vi,
  //       },
  //     });
  //   };
  //   get_video_details();
  // }, [_vi]);
  const handleThumbLink = () => navigate("/watchvideo");
  return (
    <div className="videoCard">
      <img
        onClick={handleThumbLink}
        className="videoCard__thumbnail"
        src={image}
        alt=""
      />
      <div onClick={handleThumbLink} className="videoCard__info">
        <h6>{title}</h6>
      </div>
    </div>
  );
}

export default VideoCard;
