import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPage from './src/pages/MoviesPage';
import MovieDetailsPage from './src/pages/MovieDetailsPage';
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import ForgotPasswordPage from './src/pages/ForgetPasswordPage';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='moviePage' component={MoviesPage} options={{headerShown: false}}/>
        <Stack.Screen name="MovieDetailsPage" component={MovieDetailsPage} />
        <Stack.Screen name= 'LoginPage' component={LoginPage}/>
      <Stack.Screen name= 'Register' component={RegisterPage}/>
      <Stack.Screen name= 'ForgotPassword' component={ForgotPasswordPage}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
