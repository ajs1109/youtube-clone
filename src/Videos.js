import React, { useCallback, useRef } from 'react';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
import VideosLoader from './VideosLoader';

const Videos = ({ videos, isLoading, hasMore, onLoadMore }) => {
    const observer = useRef();
    const lastVideoElementRef = useCallback(node => {
        if (isLoading) return;
        
        if (observer.current) observer.current.disconnect();
        
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                onLoadMore();
            }
        }, {
            threshold: 0.5
        });
        
        if (node) observer.current.observe(node);
    }, [isLoading, hasMore, onLoadMore]);

    if (!videos?.length && !isLoading) {
        return (
            <div className="text-center text-gray-500 py-10">
                No videos found.
            </div>
        );
    }

    return (
        <>
            <div className='flex flex-wrap'>
                {videos.map((item, idx) => {
                    const isLastElement = idx === videos.length - 1;
                    
                    return (item.id?.channelId || item.id?.videoId) && (
                        <div 
                            key={idx} 
                            ref={isLastElement ? lastVideoElementRef : null}
                            className="w-full md:w-[254px] mb-4 mx-2"
                        >
                            {item.id.videoId && (
                                <VideoCard
                                    title={item.snippet.title}
                                    channel={item.snippet.channelTitle}
                                    image={item.snippet.thumbnails.high?.url}
                                    videoId={item.id.videoId}
                                    publishedAt={item.snippet.publishedAt}
                                />
                            )}
                            {item.id.channelId && (
                                <ChannelCard
                                    title={item.snippet.title}
                                    image={item.snippet.thumbnails.high.url}
                                    channelId={item.id.channelId}
                                    subscribers={item?.statistics?.subscriberCount}
                                    description={item?.snippet?.description}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
            
            {/* Show loader at bottom while fetching more videos */}
            {isLoading && <VideosLoader />}
            
            {/* Show message when no more videos */}
            {!isLoading && !hasMore && videos.length > 0 && (
                <div className="text-center text-gray-500 py-6">
                    No more videos to load
                </div>
            )}
        </>
    );
}

export default Videos;