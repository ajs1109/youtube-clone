import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { useParams } from "react-router-dom";
import {fetchFromAPI} from "./fetchFromAPI";
import Videos from "./Videos";

const Recommended = () => {
  const [videos, setVideos] = useState([]);
  const search = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${search}`).then((data) =>
      setVideos(data.items)
    )
  }, [search]);

  return (
    <div className="basis-4/5 bg-[#f9f9f9] py-[40px] px-[20px] pb-0 ">
      <h2 className="text-xl ml-[5px] mb-[20px] ">Suggested Videos</h2>
        <Videos videos={videos} />
    </div>
  );
};

export default Recommended;
