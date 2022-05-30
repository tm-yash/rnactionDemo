import React from "react";
import {View,Text,Button} from 'react-native';


const SplashScreen =({navigation})=>{
    return(
        <View>
            <Text>
                SplashScreen
            </Text>
            <Button
                title="go to login screen"
                onPress={()=>navigation.push('Login')}
            />
        </View>
    )
}

export default SplashScreen