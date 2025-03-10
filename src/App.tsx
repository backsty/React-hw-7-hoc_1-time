import React, { useState } from 'react';
import Video from './components/Video';
import DateTime from './components/DateTime';
import DateTimePretty from './components/DateTimePretty';
import { VideoItem, VideoListProps } from './types';

const EnhancedDateTime = DateTimePretty(DateTime);

const VideoList: React.FC<VideoListProps> = ({ list }) => {
  return (
    <>
      {list.map((item) => (
        <Video key={item.url} url={item.url}>
          <EnhancedDateTime date={item.date} />
        </Video>
      ))}
    </>
  );
};

const App: React.FC = () => {
  const [list] = useState<VideoItem[]>([
    {
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: '2024-05-15 10:30:00',
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2019-03-03 12:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2020-02-03 23:16:00',
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-01-03 12:10:00',
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2021-01-01 16:17:00',
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2024-12-02 05:24:00',
    },
  ]);

  return <VideoList list={list} />;
};

export default App;
