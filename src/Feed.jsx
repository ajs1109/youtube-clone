import SideBar from "./SideBar";
import Recommended from "./Recommended";
import React, { useEffect, useState } from 'react'
import Videos from "./Videos";
import { fetchFromAPI } from "./fetchFromAPI";

const Feed = () => {
    const [videos, setVideos] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState("Library");
    useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
        setVideos(data.items)
      )
    }, [selectedCategory]);
  
    return (
      <div className="w-full flex md:flex-row flex-col">
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <div> 
    <div className="w-full bg-[#f9f9f9] py-[40px] px-[20px] pb-0 ">
      <h2 className="text-xl ml-[5px] mb-[20px] ">Suggested Videos</h2>
        <Videos videos={videos} />
    </div>
 </div>
      </div>
    );
}

export default Feed