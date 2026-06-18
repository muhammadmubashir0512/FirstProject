import { useState } from 'react';
import {View, Text, Image, TextInput, Button,  Touchable, TouchableOpacity,Alert,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import logo from '../assests/logo.png';

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()

  const onSubmit = () => {
    if (mail && password) {   
        console.log('Email...', mail);
        console.log('Password...', password);
        setTimeout(() => {
            setMail('');
            setPassword('');
            navigation.navigate('LawsuiteSearch')
        }, 500);
    }
  };

  const styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingTop: 70,
      paddingBottom: 45,
      height:"100%",
      gap: 50,
    },
    TextStyle: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 22,
    },
    Heading: {
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#D9D9D9',
      padding: 10,
      borderRadius: 8,
      width: '100%',
      height: 55,
    },
    buttons: {
        backgroundColor: '#0D40A5',
            width: '100%',
            padding: 10,
            height: 55,
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
            borderRadius: 12,
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo & Top Heading */}
      <View style={styles.Heading}>
        <Image source={logo} style={{ width: 50, height: 50 }} />
        <View>
          <Text style={styles.TextStyle}>Scholarship Guider</Text>
          <Text style={{ fontSize: 10, fontWeight: 'regular' }}>
            Find Best Scholarships & Consultant
          </Text>
        </View>
      </View>

      {/* Login Cridentials */}
      <View
        style={{flexDirection: 'column', width: '100%', gap: 20, alignItems: 'flex-start', flex:1}}
      >
        <View style={{ gap: 5 }}>
          <Text style={styles.TextStyle}>Welcome Back!</Text>
          <Text
            style={{ fontWeight: 'medium', fontSize: 12, color: '#626262' }}
          >
            Please enter your details to login!.
          </Text>
        </View>

        {/* Inputs Fields */}
        <View style={{ gap: 12, width: '100%' }}>
            {/* Email Field */}
          <View style={{ gap: 10 }}>
            <Text
              style={{ color: '#212121', fontSize: 14, fontWeight: 'bold' }}
            >
              Email
            </Text>
            <TextInput style={styles.input} autoCapitalize="none" placeholderTextColor={'#626262'} placeholder="Enter Your Email" value={mail} onChangeText={text => setMail(text)}/>
          </View>

            {/* Password Field */}
          <View style={{ gap: 10 }}>
            <Text
              style={{ color: '#212121', fontSize: 14, fontWeight: 'bold' }}
            >
              Password
            </Text>
            <TextInput style={styles.input} secureTextEntry={true} placeholderTextColor={'#626262'} placeholder="Enter Your Password" value={password} onChangeText={text => setPassword(text)}/>
          </View>

          {/* Forgot Password */}
          <View style={{flexDirection:"row-reverse"}}>
            <Text style={{color:"#0D40A5", fontSize:12, fontWeight:"bold"}} onPress={()=>navigation.navigate("ForgotPasswordOne")}>Forgot Password?</Text>
          </View>
        </View>
        {/* Button */}
        <TouchableOpacity onPress={onSubmit} style={styles.buttons} >
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
            Login
          </Text>
        </TouchableOpacity>

        <View style={{flex:1}}/>

        {/* Signup Navigation */}
        <View style={{alignItems:"center", width:"100%" }}>
            <Text style={{color:"#626262", fontWeight:"regular", fontSize:14}}>Don't have an account? <Text style={{color:"#0D40A5", fontWeight:"bold", fontSize:14}}>Signup</Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
