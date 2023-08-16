import React, {useState, useEffect} from "react";
import './App.css';
import VideoCard from './VideoCard.js';
import db from './firebase.js';

function App() {
  
  const [reels, setReels] = useState([]);

  useEffect (() => {
    //App component will run ONCE when it loads
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  },[]);

  return (
    
    // BEM naming convention
    <div className="app">
      
    
      <div className="app__top">
          <img
            className="app__logo"
            src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-png-instagram-logo-camel-productions-website-25.png"
            alt=""
          
          />
          
          <h1>Reels </h1>
          {/*image at top - logo*/}
          {/* Reels text*/}
      </div>

      <div className="app__videos">
        {/* Container at top */}
      {reels.map(({channel, avatarSrc, song, url, likes, shares}) => (
        <VideoCard 
          channel={channel}
          avatarSrc={avatarSrc}
          song={song}
          url={url}
          likes={likes}
          shares={shares}
          />
          )
          )}
      </div>

    </div>
  );
}

export default App;
