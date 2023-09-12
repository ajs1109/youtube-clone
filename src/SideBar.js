import React from 'react';
import SideRow from './SideRow';
import './SideRow.css'
import {Home, Whatshot, Subscriptions, VideoLibrary, History, OndemandVideo, WatchLater, ThumbUpAltOutlined, ExpandMoreOutlined} from '@mui/icons-material'
import { categories } from './constants';

const SideBar = ({selectedCategory,setSelectedCategory}) => {
  console.log(selectedCategory);
  return (
    <div className='md:w-[20%] min-w-[200px] flex md:flex-col overflow-x-auto w-full scrollbar-hide'>
        {categories.map((item,idx) =>
          <div key={idx} className={`mx-auto w-full sideRow flex py-[10px] px-[20px] hover:bg-[#d3d3d3] hover:cursor-pointer ${selectedCategory===item.name && 'selected'}`} onClick={()=> setSelectedCategory(item.name)}>
          {item.icon}
          <p className="title flex-1 ml-[20px] text-xs font-medium">{item.name}</p>
        </div>
        )}
        <hr className='h-[1px] border-0 bg-[#d3d3d3] my-[10px] '/>
    </div>
  )
}

export default SideBar

{/* <Icon className='icons' sx={{ fill:'#606060'}}  /> */}