import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
const API = "AIzaSyDcG4EBYBmBIeCmohNRoa5-Zwgy-eNzjCg";
const channelId = "@KRSNAOfficial";
const baseUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}`;
const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet&regionCode=in&maxResults=20`;
const mostPopularVideosUrl = `https://www.googleapis.com/youtube/v3/videos`;
// const fetchurl = `https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf`;

export const fetchAPI = async (url) => {
  const data = await axios.get(`${fetchurl}${url}`)
  return data;
}

const YoutubeOffAPI = () => {
  const [allVideos, setAllVideos] = useState([]);

  const getVideos = async () => {
    const result = await axios.get(fetchurl);
    setAllVideos(result.data.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  console.log(allVideos);

  return (
    <div className="w-full bg-[#f9f9f9] flex flex-col">
      <h2 className="text-xl ml-[5px] mb-[20px] ">Recommended</h2>
      <div className="Videos flex flex-wrap">
        {allVideos &&
          allVideos.map((videos) => (
            <VideoCard
              title={videos.snippet.title}
              views="16.1M"
              timestamp={Date.now()-videos.snippet.publishedAt}
              channel={videos.snippet.channelTitle}
              channelImage="https://yt3.googleusercontent.com/ytc/AOPolaRhCQHgfEndUHn_l5K8di2WEDsdKDXxjf52-emohQ=s176-c-k-c0x00ffffff-no-rj"
              image={videos.snippet.thumbnails.high.url}
            />
          ))}
      </div>
    </div>
  );
};

export default YoutubeOffAPI;
