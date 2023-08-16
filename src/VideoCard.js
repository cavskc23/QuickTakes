import React, { useState, useRef } from 'react';
import VideoHeader from './VideoHeader.js';
import VideoFooter from './VideoFooter.js';
import './VideoCard.css';



function VideoCard({url, likes, shares, channel, avatarSrc, song}) {
  const [isVideoPlaying, setIsVideoPlaying] = 
  useState(false);
  const videoRef = useRef(null);

  //useRef

  //const [isVideoPlaying, setIsVideoPlaying] =   useState(false)
  
  //use State
  //useRef

  const onVideoPress = () => {
    if (isVideoPlaying){
      videoRef.current.pause();
      setIsVideoPlaying(false)
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true)
    }
  };

  return (
    <div className='videoCard'>
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        src={url}
        alt= 'IG reel video'
        //src='/Users/nicholasorji/Downloads/coverr-man-texting-on-his-phone-outdoors-6302-1080p.mp4'
        loop
        className='videoCard__player'
        type="video/mp4"
      /> 
      <VideoFooter 
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div> 
  )
}

export default VideoCard;