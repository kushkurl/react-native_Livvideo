import React from 'react';
import styles from './styles';

import Video from 'react-native-video';


const LiveStream = () => {
  <Video
    source={{ uri: 'https://www.youtube.com/watch?v=rZ0TZCbMtDc&list=RDrZ0TZCbMtDc&start_radio=1' }}
    style={{ width: 300, height: 300 }}
    controls={true}
    ref={(ref) => {
      this.player = ref
    }} />
};
export default LiveStream;

