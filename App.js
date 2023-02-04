import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from'@react-navigation/native-stack';
import CalculatorHome from './CalculatorHome';
import History from './History';

const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"component={CalculatorHome} />
        <Stack.Screen name="History"component={History} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }