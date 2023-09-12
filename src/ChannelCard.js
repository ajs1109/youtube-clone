import React from "react";
import { Link } from "react-router-dom";
import { demoVideoUrl } from "./constants";

function ChannelCard({ image, title, channelId, subscribers } ) {
  return (
    <div className={`w-[270px] mb-[40px] mx-auto ${subscribers && "mt-[-70px]"}`}>
      <Link to={channelId ? `/channel/${channelId}`:demoVideoUrl}>
      <img src={image} alt="" className="videoInfo rounded-full h-[140px] w-[140px] mx-auto" />
      <div className="videoCardInfo flex mt-[10px] pr-[30px] ">
       
        <div className="videoText w-full ml-[15px]">
            <p className="text-[14px]/[22px] w-full font-medium font-roboto text-center mx-auto">{title.slice(0,60)}
            {/* <CheckCircle className="opacity-60" sx={{width:"16px",margin:"auto"}}/> */}
            </p>
            {subscribers && <p className="text-[14px]/[22px] w-full font-medium font-roboto text-center">{parseInt(subscribers).toLocaleString()} Subscribers</p>}
        </div>
      </div>
      </Link>
    </div>
  );
}

export default ChannelCard;
