import React from 'react'
import { Avatar } from '@mui/material'
import { VerifiedOutlined } from '@mui/icons-material'
function VideoRow({views, verified, description, timestamp, channel, channelImage, title, image }) {
  return (
    <div className='flex mb-[30px] max-w-[700px] '>
        <img src={image} alt="" className='object-contain rounded-[13%]' width='246px' height='138px' />
        <div className='ml-[14px] '>
            <h3>{title}</h3>
            <p>
                 {views} views . {timestamp} 
            </p>
            <div className="flex channelName text-[12px] text-[#606060] ">
        <Avatar style={{width:30, height:30}} className="videoCardAvatar" alt={channel} src={channelImage} />
                <p className=' ml-[10px] m-auto '>{channel} {verified && <VerifiedOutlined/>}</p>
            </div>
            <p className='mt-[20px] text-[12px] text-[#606060] '>{description}</p>
        </div>
    </div>
  )
}

export default VideoRow