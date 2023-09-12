import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import { LocalDining, WatchOutlined } from '@mui/icons-material';
import VideosLoader from './VideosLoader';

const Videos = ({videos}) => {
  const scrollfn = () => {
    window.scrollTo({
      top: 0,
      left:0,
      behavior:'smooth'
    })
  }
    console.log(videos)
  return (
    <div className='flex flex-wrap'>
      {videos.length ?
        videos.map((item, idx) => 
          <div key={idx} onClick={scrollfn}>
            {item.id.videoId && (<VideoCard
            title={item.snippet.title}
            views="16.1M"
            timestamp="2 years ago"
            channel={item.snippet.channelTitle}
            image={item.snippet.thumbnails.high?.url}
            videoId={item.id.videoId}
          />)}
          {
            item.id.channelId && (<ChannelCard
              title={item.snippet.title}
              image={item.snippet.thumbnails.high.url}
              channelId={item.id.channelId}
              subscribers = {item?.statistics?.subscriberCount}
            />)
          }
          </div>
          
        ): <VideosLoader/>}
        
    </div>
  );
}

export default Videos