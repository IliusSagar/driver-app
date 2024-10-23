import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';  // Ensure the path is correct
import RegisterScreen from './screens/RegisterScreen';  // Ensure the path is correct
import CategoryScreen from './screens/tabs/CategoryScreen';  // Ensure the path is correct
import SettingsScreen from './screens/tabs/SettingsScreen'; // You can add other screens for bottom tabs
import Toast from 'react-native-toast-message';  // Import Toast

// Create stack and tab navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define the bottom tab navigator
function TabNavigator() {
  return (
    <Tab.Navigator>

      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{ title: 'Category' }} // Customize as needed
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings' }} // Add your Settings or other screens
      />
    </Tab.Navigator>
  );
}

// Main app component
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Login' }}  // Customize the header title
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: 'Register' }}  // Customize the header title
          />
          <Stack.Screen
            name="Home"
            component={TabNavigator}  // Replace HomeScreen with TabNavigator
            options={{ title: 'Home' }}  // Customize the header title
          />

        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}
