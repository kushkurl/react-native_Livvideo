import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Video from 'react-native-video';


const LiveStreams = () => {
  return(
<View style={{ width: "100%", height: "100%" }}>
<Video
        source={{
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={styles.video}
        controls={true}
        resizeMode={'cover'}
      />
    </View>
  )
  };

  const styles = StyleSheet.create({
    video: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      backgroundColor: 'black',
    }
  });
export default LiveStreams;

