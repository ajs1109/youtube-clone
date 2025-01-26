import React from "react";
import { Link } from "react-router-dom";
import { demoThumbnailUrl, demoVideoUrl } from "./constants";

function VideoCard({ image, title, channel, videoId }) {
    return (
        <div className="w-full rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <div className="relative">
                    <img 
                        src={image || demoThumbnailUrl} 
                        alt={title} 
                        className="w-full h-48 object-cover"
                    />
                </div>
                <div className="p-3">
                    <h3 className="text-sm font-medium line-clamp-2 mb-1">
                        {title}
                    </h3>
                    <p className="text-xs text-gray-600">
                        {channel}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default VideoCard;