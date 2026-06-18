import { useState } from "react";
import { View, Text, Image, Button, Touchable, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


const CounterApp = () => {

    const [count, setCount] = useState(0)
    const navigation = useNavigation()

    const styles = {
        container: {
            width: "100%",
            height: "100%",
            backgroundColor: "white"
        },
        Areaview: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }
    }

    const increment = () =>{
        setCount((count)=>count+1)
    }

    const Decrement = () =>{
        setCount((prev)=>{
            if (prev > 0) {
                return prev -1
            }
            return prev
        })
    }

    return (
        <SafeAreaView style={[styles.Areaview, styles.container]}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Counter App</Text>
            <Text style={{ margin: 10, fontWeight: "500" }}>Count: {count}</Text>
            <TouchableOpacity style={{ backgroundColor: "purple", margin: 10, padding: 10, borderRadius: 8 }} onPress={()=>increment()}>
                <Text style={{ color: "white", }}>Increment</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: "purple", margin: 10, padding: 10, borderRadius: 8 }} onPress={()=>Decrement()}>
                <Text style={{ color: "white" }}>Decrement</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: "purple", margin: 10, padding: 10, borderRadius: 8 }} onPress={()=>navigation.navigate("Login")}>
                <Text style={{ color: "white" }}>Move to Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default CounterApp