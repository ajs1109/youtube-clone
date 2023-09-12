import React, { useEffect, useState } from "react";
import { TuneOutlined } from "@mui/icons-material";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import { fetchFromAPI } from "./fetchFromAPI";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { useParams } from "react-router-dom";

function SearchPage() {
  const [videos, setVideos] = useState([]);
    const {searchItem} = useParams();
    useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${searchItem}`).then((data) =>
        setVideos(data.items)
      )
    }, [searchItem]);
  
    return (
      <div className="w-full flex">
        <div> 
    <div className="w-full bg-[#f9f9f9] py-[40px] px-[20px] pb-0 ">
      <h2 className="text-xl ml-[5px] mb-[20px] ">Suggested Videos</h2>
        <Videos videos={videos} />
    </div>
 </div>
      </div>
    );
}

export default SearchPage;
