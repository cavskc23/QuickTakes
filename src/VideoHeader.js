import React from 'react'
import './VideoHeader.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

function VideoHeader() {
  return (
    <div className='videoHeader'>
      <ArrowBackIosNewIcon />
      <h3>Reels</h3>
      <CameraAltIcon />
    </div>
  )
}

export default VideoHeader