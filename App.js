import React, {useState} from 'react';
import Carousel from './src/screens/carousel';
import Sound from 'react-native-sound';
import Search from './src/screens/search';

export default function App() {
  const [song, setSong] = useState(null);

  const handleAudio = url => {
    if (song) {
      song.stop();
      track = new Sound(url, null, e => {
        if (e) {
          console.log('error', e);
        } else {
          // setReady(true);

          setSong(track);
          track.play();
          // setPlaying(true);
        }
      });
    } else {
      track = new Sound(url, null, e => {
        if (e) {
          console.log('error', e);
        } else {
          // setReady(true);

          setSong(track);
          track.play();
          // setPlaying(true);
        }
      });
    }
  };

  const stopTrack = () => {
    if (song) {
      song.stop();
    }
  };

  return (
    <>
      {/* <Carousel
        playTrack={track => {
          handleAudio(track);
        }}
        stopTrack={() => {
          stopTrack();
        }}
      /> */}
      <Search />
    </>
  );
}
