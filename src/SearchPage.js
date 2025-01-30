import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { fetchFromAPI } from "./fetchFromAPI";

function SearchPage() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageToken, setPageToken] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const { searchItem } = useParams();

  const fetchVideos = async (newSearch = false) => {
    setIsLoading(true);
    try {
      const searchQuery = `search?part=snippet&q=${searchItem}${pageToken ? `&pageToken=${pageToken}` : ''}`;
      const data = await fetchFromAPI(searchQuery);
      console.log(data);
      if (newSearch) {
        setVideos(data.items);
      } else {
        setVideos(prev => [...prev, ...data.items]);
      }
      
      setPageToken(data.nextPageToken);
      setHasMore(!!data.nextPageToken);
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset and fetch new videos when search term changes
  useEffect(() => {
    setPageToken('');
    setHasMore(true);
    fetchVideos(true);
  }, [searchItem]);

  return (
    <div className="w-full flex">
      <div className="w-full"> 
        <div className="w-full bg-[#f9f9f9] py-[40px] px-[20px] pb-0">
          <h2 className="text-xl ml-[5px] mb-[20px]">
            Search Results for: {searchItem}
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

export default SearchPage;