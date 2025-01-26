import React, { useEffect, useState } from 'react';
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "./fetchFromAPI";

const Feed = () => {
    const [videos, setVideos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchVideos = async () => {
            setIsLoading(true);
            try {
                const data = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
                setVideos(data.items);
            } catch (error) {
                console.error("Failed to fetch videos:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideos();
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
                    />
                </div>
            </div>
        </div>
    );
}

export default Feed;