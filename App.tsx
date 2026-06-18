import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CounterApp from "./screens/CounterApp";
import Login from "./screens/Login";
import ForgotPasswordone from "./screens/ForgotPasswordone";
import LawsuiteSearch from "./screens/Lawsuit/LawsuiteSearch";

function App() {

  const Stack = createNativeStackNavigator();
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="CounterApp" component={CounterApp} options={{headerShown: false}}/>
        <Stack.Screen name="ForgotPasswordOne" component={ForgotPasswordone} options={{headerShown: false}}/>
        <Stack.Screen name="LawsuiteSearch" component={LawsuiteSearch} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


export default App;