import React from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { demoVideoUrl,demoThumbnailUrl } from "./constants";
import { CheckCircle } from "@mui/icons-material";

function VideoCard({ image, title, channel, views, timestamp, channelImage, videoId } ) {
  return (
    <div className="w-[254px] mb-[20px] mx-2  ">
      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
      <img src={image ? image :demoThumbnailUrl } alt="" className="videoInfo h-[140px] w-[250px] object-cover rounded-lg" />
      <div className="videoCardInfo flex mt-[10px] pr-[30px] ">
        <div className="videoText ml-[15px]">
            <p className="text-[14px]/[22px] font-medium font-roboto">{title.slice(0,60)}</p>
            <p className="text-[14px]  text-[#606060] flex ">{channel} 
            {/* <CheckCircle sx={{width:"12px", mb:"2px"}}/> */}
            </p>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default VideoCard;
