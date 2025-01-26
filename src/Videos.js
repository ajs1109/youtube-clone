import React from 'react';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
import VideosLoader from './VideosLoader';

const Videos = ({ videos, isLoading }) => {
    if (isLoading) return <VideosLoader />;
    
    if (!videos.length) {
        return (
            <div className="text-center text-gray-500 py-10">
                No videos found for this category.
            </div>
        );
    }

    return (
        <div className='flex flex-wrap'>
            {videos.map((item, idx) => (
                <div key={idx} className="w-full md:w-[254px] mb-4 mx-2">
                    {item.id.videoId && (
                        <VideoCard
                            title={item.snippet.title}
                            channel={item.snippet.channelTitle}
                            image={item.snippet.thumbnails.high?.url}
                            videoId={item.id.videoId}
                        />
                    )}
                    {item.id.channelId && (
                        <ChannelCard
                            title={item.snippet.title}
                            image={item.snippet.thumbnails.high.url}
                            channelId={item.id.channelId}
                            subscribers={item?.statistics?.subscriberCount}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default Videos;