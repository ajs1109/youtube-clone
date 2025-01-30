import React from "react";
import { Link } from "react-router-dom";
import { demoThumbnailUrl, demoVideoUrl } from "./constants";
import { formatDistance } from 'date-fns';

function VideoCard({ image, title, channel, videoId, publishedAt, viewCount, duration }) {

    const timeAgo = publishedAt ? formatDistance(new Date(publishedAt), new Date(), { addSuffix: true }) : '';
    
    // Format view count
    const formatViews = (views) => {
        if (!views) return '';
        const num = parseInt(views);
        if (num >= 1000000) {
            return `${(num / 1000000).toFixed(1)}M`;
        } else if (num >= 1000) {
            return `${(num / 1000).toFixed(1)}K`;
        }
        return num.toString();
    };

    // Format duration (assuming duration is in ISO 8601 format like "PT1H2M10S")
    const formatDuration = (duration) => {
        if (!duration) return '';
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        const hours = (match[1] || '').replace('H', '');
        const minutes = (match[2] || '').replace('M', '');
        const seconds = (match[3] || '').replace('S', '');
        
        if (hours) {
            return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
        }
        return `${minutes || '0'}:${seconds.padStart(2, '0')}`;
    };

    return (
        <div className="w-full rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white">
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <div className="relative group">
                    <img 
                        src={image || demoThumbnailUrl} 
                        alt={title} 
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {duration && (
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                            {formatDuration(duration)}
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="text-sm font-medium line-clamp-2 mb-2 text-gray-900 group-hover:text-blue-600">
                        {title}
                    </h3>
                    <div className="flex flex-col gap-1">
                        <Link 
                            to={`/channel/${channel.channelId}`} 
                            className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            {channel.title}
                        </Link>
                        <div className="flex items-center text-xs text-gray-600 gap-2">
                            {viewCount && (
                                <>
                                    <span>{formatViews(viewCount)} views</span>
                                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                </>
                            )}
                            {timeAgo && <span>{timeAgo}</span>}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default VideoCard;