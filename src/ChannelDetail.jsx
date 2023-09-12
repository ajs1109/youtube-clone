import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {fetchFromAPI} from './fetchFromAPI'
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const {id} = useParams();
    useEffect(()=> {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))
        fetchFromAPI(`search?part=snippet&channelId=${id}`).then((data) => setVideos(data?.items))
    },[id])
    console.log(channelDetail);
    console.log(videos)
  return (
    <div className='h-full w-full'>
        {channelDetail && <div>
            <img src={channelDetail.brandingSettings.image.bannerExternalUrl} alt="" className='w-full h-[200px] object-cover'/>
            <ChannelCard
         title={channelDetail.snippet.title}
         image={channelDetail.snippet.thumbnails.high.url}
         channelId={channelDetail.id}
         subscribers = {channelDetail?.statistics?.subscriberCount}
        /> 
        <div className='flex flex-wrap justify-center w-full'>
            {videos && videos.map((item,idx) => (
                
                <VideoCard
            title={item.snippet.title}
            views="16.1M"
            timestamp="2 years ago"
            channel={item.snippet.channelTitle}
            channelImage="https://yt3.googleusercontent.com/ytc/AOPolaRhCQHgfEndUHn_l5K8di2WEDsdKDXxjf52-emohQ=s176-c-k-c0x00ffffff-no-rj"
            image={item.snippet.thumbnails.high.url}
            key={idx}
            videoId={item.id.videoId}
          />   
                
            ))}
        </div>
            </div>}
    </div>
  )
}

export default ChannelDetail