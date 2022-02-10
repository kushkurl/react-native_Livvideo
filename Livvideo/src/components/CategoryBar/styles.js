import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   safeView: {
        margin: 1,
   },
    buttonOuterLayout: {
        backgroundColor: "#EEEEEE",
        alignItems: 'flex-start',
        flexDirection: "row",
        borderRadius: 10
      },
      buttonStyle: {  
        marginBottom: 12,
        marginTop: 12,  
        alignItems: 'center',  
        backgroundColor: '#EDEDED',
        borderColor: "#7D7D7D",
        borderWidth: .5,
        shadowColor: "black",
        shadowRadius: 2, 
        elevation: 5,
        margin: 7,
        borderRadius: 12
    },  
    buttonText: {  
        padding: 7,  
        color: 'black',  
        fontSize: 12  
    },
    dividerStyle: {
        borderBottomColor: '#C8C8C8',
        borderBottomWidth: 1,
        elevation: .5,
        shadowRadius: 1,
        shadowColor: "grey"
    }
});

export default styles;