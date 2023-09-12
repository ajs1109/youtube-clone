import React from 'react'
import {Avatar} from '@mui/material'
import { VerifiedOutlined } from '@mui/icons-material'

function ChannelRow({image, channel, subs, channelId, verified, description}) {
  return (
    <div className='flex align-center w-[70%] '>
        <Avatar className="my-[10px] mx-[60px] " style={{width:120 , height:120}} alt={channel} src={image}/>
        <div className='flex flex-col'>
            <p className="text-lg justify-between">{channel} {verified && <VerifiedOutlined/>}</p> 
            <p className='text-[#606060] text-sm '>{channelId} . {subs} subscribers</p>
            <p className='text-[#606060] text-sm '>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow