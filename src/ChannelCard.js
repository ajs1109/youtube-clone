import React from "react";
import { Link } from "react-router-dom";
import { demoVideoUrl } from "./constants";

function ChannelCard({ 
    image, 
    title, 
    channelId, 
    subscribers,
    description
}) {
    // Format numbers with K, M notation
    const formatCount = (count) => {
        if (!count) return '0';
        const num = parseInt(count);
        if (num >= 1000000) {
            return `${(num / 1000000).toFixed(1)}M`;
        } else if (num >= 1000) {
            return `${(num / 1000).toFixed(1)}K`;
        }
        return num.toLocaleString();
    };

    return (
        <div className={`w-full max-w-[270px] mb-[40px] mx-auto ${subscribers && "-mt-[70px]"}`}>
            <Link 
                to={channelId ? `/channel/${channelId}` : demoVideoUrl}
                className="block text-center group"
            >
                <div className="relative">
                    <img 
                        src={image} 
                        alt={title} 
                        className="rounded-full h-[140px] w-[140px] mx-auto object-cover border-4 border-white shadow-lg 
                                 transition-transform duration-300 group-hover:scale-105"
                    />
                    {subscribers && (
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                            SUBSCRIBED
                        </div>
                    )}
                </div>
                
                <div className="mt-8 px-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {title}
                    </h3>
                    
                    <div className="flex flex-col gap-2">
                        {/* Stats Row */}
                        <div className="flex justify-center gap-4 text-sm text-gray-600">
                            {subscribers && (
                                <div className="flex flex-col items-center">
                                    <span className="font-semibold">{formatCount(subscribers)}</span>
                                    <span className="text-xs">subscribers</span>
                                </div>
                            )}
                        </div>
                        
                        {/* Description */}
                        {description && (
                            <p className="text-sm text-gray-600 line-clamp-2 mt-2">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ChannelCard;