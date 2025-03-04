import React from 'react';
import { VideoProps } from '../types';

const Video: React.FC<VideoProps> = ({ url, children }) => {
  return (
    <div className="video">
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        referrerPolicy="origin"
      ></iframe>
      {children}
    </div>
  );
};

export default Video;
