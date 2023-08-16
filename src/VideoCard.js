import React, { useState, useRef } from 'react';
import VideoHeader from './VideoHeader.js';
import VideoFooter from './VideoFooter.js';
import './VideoCard.css';



function VideoCard({url, likes, shares, channel, avatarSrc, song, songFile}) {
  const [isVideoPlaying, setIsVideoPlaying] = 
  useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = 
  useState(false);
  const videoRef = useRef(null);
const audioRef = useRef(null);

  //useRef

  //const [isVideoPlaying, setIsVideoPlaying] =   useState(false)
  
  //use State
  //useRef

  // const onVideoPress = () => {
  //   if (isVideoPlaying){
  //     videoRef.current.pause();
  //     setIsVideoPlaying(false)
  //   } else {
  //     videoRef.current.play();
  //     setIsVideoPlaying(true)
  //   }
  // };

  const onVideoPress = () => {
    if (isVideoPlaying&&isAudioPlaying){
      videoRef.current.pause();
      setIsVideoPlaying(false);
      audioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
      audioRef.current.play();
      setIsAudioPlaying(true);
    }
  };



  console.log("url");
console.log('song file =====>', songFile, url);
  return (
    
    <div className='videoCard'>
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        src={url}
        alt= 'IG reel video'
        // muted={false}
        //src='/Users/nicholasorji/Downloads/coverr-man-texting-on-his-phone-outdoors-6302-1080p.mp4'
        loop
        className='videoCard__player'
        type="video/mp4"
        autoplay
      /> 
      <audio 
      // muted={false}
      loop
      ref={audioRef} >
        <source src={songFile}
        />
      </audio>
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