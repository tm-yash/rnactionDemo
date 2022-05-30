import React from "react";
import {View,Text,Button} from "react-native";

const LoginScreen =({navigation})=>{
    return(
        <View>
            <Text>
                Login screens
            </Text>
            <Button title="goto home"
                onPress={()=>navigation.pop('Home')}
            />
        </View>
    )
}

export default LoginScreen