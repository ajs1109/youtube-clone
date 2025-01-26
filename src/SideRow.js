import React from "react";
import './SideRow.css'

const SideRow = ({selected, Icon, title,setSelectedCategory }) => {
  return (
    <div className={`sideRow flex py-[10px] px-[20px] hover:bg-[#d3d3d3] hover:cursor-pointer ${selected && 'selected'}`} onClick={()=>{setSelectedCategory(title)}}>
      <Icon className='icons' sx={{ fill:'#606060'}}  />
      <p className="title flex-1 ml-[20px] text-xs font-medium">{title}</p>
    </div>
  );
};

export default SideRow;