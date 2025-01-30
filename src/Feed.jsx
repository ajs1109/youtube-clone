import React, { useEffect, useState } from 'react';
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "./fetchFromAPI";

const Feed = () => {
    const [videos, setVideos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [isLoading, setIsLoading] = useState(false);
    const [pageToken, setPageToken] = useState('');
    const [hasMore, setHasMore] = useState(true);

    const fetchVideos = async (newSearch = false) => {
        setIsLoading(true);
        try {
            const searchQuery = `search?part=snippet&q=${selectedCategory}${pageToken ? `&pageToken=${pageToken}` : ''}`;
            const data = await fetchFromAPI(searchQuery);
            console.log(data);
            if (newSearch) {
                setVideos(data.items);
            } else {
                setVideos(prev => [...prev, ...data.items]);
            }
            
            // Store next page token for subsequent requests
            setPageToken(data.nextPageToken);
            // If no next page token, we've reached the end
            setHasMore(!!data.nextPageToken);
        } catch (error) {
            console.error("Failed to fetch videos:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Initial load and category change
    useEffect(() => {
        setPageToken('');
        setHasMore(true);
        fetchVideos(true);
    }, [selectedCategory]);

    return (
        <div className="w-full flex md:flex-row flex-col">
            <SideBar 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory}
            />
            <div className="flex-1"> 
                <div className="w-full bg-[#f9f9f9] py-[40px] px-[20px] pb-0">
                    <h2 className="text-xl ml-[5px] mb-[20px]">
                        {selectedCategory} Videos
                    </h2>
                    <Videos 
                        videos={videos} 
                        isLoading={isLoading}
                        hasMore={hasMore}
                        onLoadMore={() => fetchVideos(false)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Feed;