import React, {useState, useEffect} from 'react';
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
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('screen');
const imageW = width * 0.75;
const imageH = imageW * 1.64;

export default function carouselItem({
  playTrack,
  stopTrack,
  data,
  playing,
  setPlaying,
  nextTrack,
}) {
  return (
    <View
      style={{
        width,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 20,
      }}>
      <View
        style={{
          position: 'absolute',
          top: 80,
          right: 46,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.usernameText}>Steve Jobs</Text>

        <Image
          source={{
            uri: 'https://image.cnbcfm.com/api/v1/image/100496736-steve-jobs-march-2011-getty.jpg?v=1617291443&w=720&h=405',
          }}
          style={{
            height: 40,
            width: 40,
            borderRadius: 40,
            borderWidth: 2,
            borderColor: 'white',
          }}
        />
      </View>

      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          backgroundColor: 'black',
          opacity: 0.4,
          position: 'absolute',
          top: 50,
          left: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Feather name={'x'} size={16} color={'white'} />
      </View>

      {playing ? (
        <TouchableOpacity
          onPress={() => {
            stopTrack();
            setPlaying(false);
          }}>
          <Image
            source={{uri: data.album.cover_xl}}
            style={{
              width: imageW,
              height: imageH,
              resizeMode: 'cover',
              borderRadius: 16,
              marginTop: 20,
            }}
          />
          <View
            style={{
              backgroundColor: '#dad7db',
              width: imageW - 16,
              height: imageH - 400,
              position: 'absolute',
              top: 410,
              opacity: 0.97,
              borderRadius: 20,
              alignItems: 'center',
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <View style={{marginLeft: 16}}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.artist}>{data.artist.name}</Text>
            </View>
            <FontAwesome
              name={'angle-right'}
              size={20}
              color="black"
              style={{position: 'absolute', opacity: 0.1, right: 10}}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            playTrack(data.preview);
            setPlaying(true);
          }}>
          <Image
            source={{uri: data.album.cover_xl}}
            style={{
              width: imageW,
              height: imageH,
              resizeMode: 'cover',
              borderRadius: 16,
              marginTop: 20,
            }}
          />
          <View
            style={{
              backgroundColor: '#dad7db',
              width: imageW - 16,
              height: imageH - 400,
              position: 'absolute',
              top: 410,
              opacity: 0.97,
              borderRadius: 20,
              alignItems: 'center',
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <View style={{marginLeft: 16}}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.artist}>{data.artist.name}</Text>
            </View>
            <FontAwesome
              name={'angle-right'}
              size={20}
              color="black"
              style={{position: 'absolute', opacity: 0.5, right: 10}}
            />
          </View>
        </TouchableOpacity>
      )}

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity
          onPress={nextTrack}
          style={{
            width: 86,
            height: 86,
            backgroundColor: '#262626',
            borderRadius: 60,
            opacity: 0.5,
            borderWidth: 1,
            borderColor: 'black',
            marginHorizontal: 10,
            justifyContent: 'center',
          }}>
          <Feather
            name={'x'}
            size={50}
            style={{alignSelf: 'center', color: '#bd4b4b'}}
          />
        </TouchableOpacity>

        <View
          style={{
            width: 86,
            height: 86,
            backgroundColor: '#262626',
            borderRadius: 60,
            opacity: 0.5,
            borderWidth: 1,
            borderColor: 'black',
            marginHorizontal: 10,
            justifyContent: 'center',
          }}>
          <Feather
            name={'headphones'}
            size={50}
            style={{alignSelf: 'center', color: '#e8e1e1'}}
          />
        </View>

        <TouchableOpacity
          onPress={nextTrack}
          style={{
            width: 86,
            height: 86,
            backgroundColor: '#262626',
            borderRadius: 60,
            opacity: 0.5,
            borderWidth: 1,
            borderColor: 'black',
            marginHorizontal: 10,
            justifyContent: 'center',
          }}>
          <Feather
            name={'heart'}
            size={50}
            style={{alignSelf: 'center', color: '#bd4b4b'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: '600',
  },
  artist: {
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.7,
  },
  usernameText: {
    fontSize: 14,
    fontWeight: '600',
    marginRight: 6,
    color: 'white',
  },
});
