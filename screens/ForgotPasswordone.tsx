import {View, Text, Image, TextInput, Button,  Touchable, TouchableOpacity,Alert,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';



const ForgotPasswordone = () => {
    const navigation = useNavigation()
    const [mail, setMail] = useState("")

    const onSubmit = () =>{
        if (mail) {
            console.log("Forgot Mail....", mail)
            setTimeout(() => {
                // navigation.navigate("")
            }, 500);
        }
    }
  return (
    <SafeAreaView>
        <View>
            
        </View>
    </SafeAreaView>
  )
}

export default ForgotPasswordone