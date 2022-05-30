import React from "react";
import {View,Text,Button} from "react-native";


const HomeScreen =({navigation})=>{
    return(
     <View>
         <Text>
             Home Screen
         </Text>
         <Button
             title="go to splash"
             onPress={()=>navigation.popToTop()}
         />
     </View>
    )
}

export default HomeScreen