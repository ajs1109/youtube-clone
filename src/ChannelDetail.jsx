import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from './fetchFromAPI';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pageToken, setPageToken] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const { id } = useParams();

    // Fetch channel details
    useEffect(() => {
        const fetchChannelDetails = async () => {
            try {
                const data = await fetchFromAPI(`channels?part=snippet,statistics,brandingSettings&id=${id}`);
                setChannelDetail(data?.items[0]);
                console.log(data);
            } catch (error) {
                console.error("Failed to fetch channel details:", error);
            }
        };
        fetchChannelDetails();
    }, [id]);

    // Function to fetch channel videos
    const fetchChannelVideos = async (newFetch = false) => {
        setIsLoading(true);
        try {
            const searchQuery = `search?part=snippet&channelId=${id}&order=date${pageToken ? `&pageToken=${pageToken}` : ''}`;
            const data = await fetchFromAPI(searchQuery);
            
            if (newFetch) {
                setVideos(data.items);
            } else {
                setVideos(prev => [...prev, ...data.items]);
            }
            
            setPageToken(data.nextPageToken);
            setHasMore(!!data.nextPageToken);
        } catch (error) {
            console.error("Failed to fetch channel videos:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Initial videos fetch
    useEffect(() => {
        setPageToken('');
        setHasMore(true);
        fetchChannelVideos(true);
    }, [id]);

    if (!channelDetail) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <div className="animate-pulse w-16 h-16 rounded-full bg-gray-200"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f9f9f9]">
            {/* Channel Banner */}
            <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden bg-gray-100">
                {channelDetail?.brandingSettings?.image?.bannerExternalUrl ? (
                    <img 
                        src={channelDetail.brandingSettings.image.bannerExternalUrl} 
                        alt={channelDetail.snippet.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200"></div>
                )}
            </div>

            {/* Channel Info */}
            <div className="relative z-10">
                <ChannelCard
                    title={channelDetail.snippet.title}
                    image={channelDetail.snippet.thumbnails.high.url}
                    channelId={channelDetail.id}
                    subscribers={channelDetail?.statistics?.subscriberCount}
                />
                
                {/* Channel Stats */}
                <div className="text-center mb-8">
                    <div className="flex justify-center gap-6 text-sm text-gray-600">
                        <div>
                            <span className="font-bold">{parseInt(channelDetail?.statistics?.videoCount).toLocaleString()}</span> Videos
                        </div>
                        <div>
                            <span className="font-bold">{parseInt(channelDetail?.statistics?.viewCount).toLocaleString()}</span> Views
                        </div>
                    </div>
                    {channelDetail.snippet.description && (
                        <p className="mt-4 max-w-2xl mx-auto px-4 text-sm text-gray-600 line-clamp-2">
                            {channelDetail.snippet.description}
                        </p>
                    )}
                </div>
            </div>

            {/* Channel Videos */}
            <div className="px-4 md:px-8 pb-8">
                <h2 className="text-xl font-bold mb-6">Videos</h2>
                <Videos 
                    videos={videos}
                    isLoading={isLoading}
                    hasMore={hasMore}
                    onLoadMore={() => fetchChannelVideos(false)}
                />
            </div>
        </div>
    );
};

export default ChannelDetail;