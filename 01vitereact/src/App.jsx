
import React, { useState, useEffect } from 'react';

const API_KEY = 'YOUR_YOUTUBE_API_KEY';
const CHANNEL_ID = 'SPECIFIC_YOUTUBE_CHANNEL_ID';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`);
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>YouTube Videos</h1>
      <div className="videos-container">
        {videos.map(video => (
          <div key={video.id.videoId} className="video">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

