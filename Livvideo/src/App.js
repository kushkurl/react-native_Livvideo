import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import LiveStreams from "./components/LiveStreams";
import {
  View,
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


const gridDimensionW = Dimensions.get('screen').width;
const gridDimensionH = Dimensions.get('screen').height;


const App = (props) => {
  const [swipeDirection, setSwipeDirection] = useState('');

  const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;

  const figureHorizontalDirection = (delta) =>
    delta > 0 ? SWIPE_RIGHT : SWIPE_LEFT;
  const figureVerticalDirection = (delta) =>
    delta > 0 ? SWIPE_DOWN : SWIPE_UP;

  const detectSwipeDirection = ({dx, dy}) => {
    return Math.abs(dx) > Math.abs(dy)
      ? figureHorizontalDirection(dx)
      : figureVerticalDirection(dy);
  };

  const onSwipe = (directionNull, gestureState) => {
    const {dx, dy} = gestureState;
    let direction = detectSwipeDirection({dx, dy});

    switch (true) {
      case direction == SWIPE_UP:{
        setSwipeDirection('up');
        console.log(swipeDirection);
        break;
      } 
      case direction == SWIPE_DOWN:{
        setSwipeDirection('down');
        console.log(swipeDirection);
        break;
      }
      case direction == SWIPE_RIGHT:{
        setSwipeDirection('right');
        console.log(swipeDirection);
        break;
      }
      case direction == SWIPE_LEFT:{
        setSwipeDirection('left');
        console.log(swipeDirection);
        break;
      }
      default:
        break;
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <View style={styles.container}>
     <HomeScreen /> 
      <GestureRecognizer
        style={styles.gridContainer}
        onSwipe={(direction, state) => onSwipe(direction, state)}
        config={config}>
        <LiveStreams />
      </GestureRecognizer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  gridContainer: {
    width: gridDimensionW,
    height: gridDimensionH,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



export default App;
