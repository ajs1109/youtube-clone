import { FeaturedVideoOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "./fetchFromAPI";
import ReactPlayer from "react-player";
import Videos from "./Videos";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);
  console.log(videoDetail);
  console.log(videos)
  return (
    <div className="flex md:flex-row flex-col gap-2 md:max-h-[88vh] h-full w-full ">
      {videoDetail?.snippet?.title && (
        <div className="flex flex-col mx-2 md:basis-[80%] md:w-full w-[90vw]  h-">
         <div className="w-[95vw] h-[calc(95vw*0.5625)] md:h-[80vh] md:w-full">
         <ReactPlayer
         width="100%"
         height="100%"
            controls
            url={`https://www.youtube.com/watch?v=${id}`}
            playing
          />
         </div>
          <p className="text-xl font-semibold tracking-wide ml-2 mt-1">
            {videoDetail.snippet.title}
          </p>
          <div className="flex justify-between md:w-full w-[95vw]">
            <p className="opacity-50 ml-2 text-lg">
              <Link to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
            </p>
            <div className="mr-2 flex opacity-50 gap-2">
              <p>
                {videoDetail.statistics.viewCount &&
                  `${parseInt(
                    videoDetail.statistics.viewCount
                  ).toLocaleString()} views`}
              </p>
              <p>
                {videoDetail.statistics.likeCount &&
                  `${parseInt(
                    videoDetail.statistics.likeCount
                  ).toLocaleString()} likes`}
              </p>
            </div>
          </div>
        </div>
      )}
      {
        videos && <div className="overflow-y-scroll scrollbar-hide w-full mx-auto md:max-w-[300px] md:min-w-[270px]">
            <Videos videos={videos}/>
        </div>
      }
    </div>
  );
};

export default VideoDetail;
