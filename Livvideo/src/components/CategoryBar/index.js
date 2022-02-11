import React from "react";
import { TouchableHighlight, View, Text, ScrollView } from "react-native";

import styles from "./styles";

const Category = () => {

    return (
    <View style={styles.safeView}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
           
            <TouchableHighlight underlayColor="white">  
                    <View style={styles.buttonStyle}>  
                        <Text style={styles.buttonText}>Political</Text>  
                    </View>  
                </TouchableHighlight>  

                <TouchableHighlight underlayColor="white">  
                    <View style={styles.buttonStyle}>  
                        <Text style={styles.buttonText}>Entertianment</Text>  
                    </View>  
                </TouchableHighlight> 

                <TouchableHighlight underlayColor="white">  
                    <View style={styles.buttonStyle}>  
                        <Text style={styles.buttonText}>Science</Text>  
                    </View>  
                </TouchableHighlight> 

                <TouchableHighlight underlayColor="white">  
                    <View style={styles.buttonStyle}>  
                        <Text style={styles.buttonText}>Cultural</Text>  
                    </View>  
                </TouchableHighlight> 

                <TouchableHighlight underlayColor="white">  
                    <View style={styles.buttonStyle}>  
                        <Text style={styles.buttonText}>General</Text>  
                    </View>  
                </TouchableHighlight>
                <TouchableHighlight underlayColor="white">  
                    <View style={styles.buttonStyle}>  
                        <Text style={styles.buttonText}>Comedy</Text>  
                    </View>  
                </TouchableHighlight> 
        </ScrollView>
        <View
        style={styles.dividerStyle}
      />
      </View>
    )
}

export default Category;