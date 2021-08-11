// Inspiration: https://dribbble.com/shots/14139308-Simple-Scroll-Animation
// Illustrations by: SAMji https://dribbble.com/SAMji_illustrator

import * as React from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import music from '../api/music';
import CarouselItem from '../components/carouselItem';

const imageW = width * 0.75;
const imageH = imageW * 1.64;

export default ({playTrack, stopTrack}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [playing, setPlaying] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const ref = React.useRef();

  onScrollToItem = () => {
    let index = currentIndex;
    setCurrentIndex(index++);

    refFlatlist.scrollToIndex({animated: true, index: currentIndex});
  };

  getItemLayout = (data, index) => {
    return {length: imageH, offset: imageH * index, index};
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar hidden />
      <View style={StyleSheet.absoluteFillObject}>
        {music.map((image, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={`image-${index}`}
              source={{uri: image.album.cover_xl}}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  opacity,
                },
              ]}
              blurRadius={50}
            />
          );
        })}
      </View>
      <Animated.FlatList
        style={{marginTop: -10}}
        ref={ref}
        onMomentumScrollEnd={ev => {
          setIndex(Math.floor(ev.nativeEvent.contentOffset.x / width));
        }}
        data={music}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({item}) => {
          return (
            <CarouselItem
              stopTrack={stopTrack}
              playTrack={playTrack}
              data={item}
              playing={playing}
              setPlaying={setPlaying}
              nextTrack={() => {
                ref?.current?.scrollToOffset({
                  offset: (index + 1) * width,
                  animated: true,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
};
