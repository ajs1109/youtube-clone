import React from 'react'
const arr=['1','1','1','1','1','1','1','1','1','1','1','1',];
const VideosLoader = () => {
  return (
    
<div className='flex flex-wrap'>
    {
        arr.map((x,ind)=>
        <div role="status" key={ind} className="w-[250px] h-[270px] rounded animate-pulse mx-2">
        <div className="flex items-center justify-center h-[140px] mb-4 bg-slate-200 rounded dark:bg-gray-300">
         
        </div>
        <div className="h-2.5 ml-3 bg-gray-200 rounded-full dark:bg-gray-300 w-[230px] mb-2"></div>
        <div className="h-2.5 ml-3 bg-gray-200 rounded-full dark:bg-gray-300 w-[230px] mb-4"></div>
        <div className="h-2.5 ml-3 bg-gray-200 rounded-full dark:bg-gray-300 w-[100px] mb-4"></div>
        
        <span className="sr-only">Loading...</span>
    </div>
        )
        
    }
</div>

  )
}

export default VideosLoader