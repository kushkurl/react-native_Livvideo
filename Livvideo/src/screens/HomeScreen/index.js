import React from "react";
import {Text} from 'react-native';
import Category from "../../components/CategoryBar";
import LiveStream from "../../components/LiveStreams";

const HomeScreen = () => {
   return ( 
        <>
        <Category />

        <LiveStream />
        
        </>
   )
}

export default HomeScreen;