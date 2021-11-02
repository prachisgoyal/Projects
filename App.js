import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/components/Home";
import Profile from "./src/components/Profile";
import ProfileEdit from "./src/components/ProfileEdit";
import More from "./src/components/More";
import Accounting from "./src/components/Accounting";
import Reports from "./src/components/Reports";
import Lists from "./src/components/Lists";
import Login from "./src/components/Login";
import AboutUs from "./src/components/AboutUs";
import Appointment from "./src/components/Appointment";
import Documents from "./src/components/Documents";
import Header from "./src/components/Header";
import colors from "./assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        style: styles.tabBar,
        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: "gray",
        headerStyle: {
          backgroundColor: colors.primaryColor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "justify",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Welcome",
          headerTitle: (props) => <Header {...props} />,
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="menu" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="TabNav"
          options={{ headerShown: false }}
          component={TabNav}
        ></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        <Stack.Screen
          name="ProfileEdit"
          options={{ title: "Edit Profile" }}
          component={ProfileEdit}
        ></Stack.Screen>
        <Stack.Screen name="Reports" component={Reports}></Stack.Screen>
        <Stack.Screen name="Documents" component={Documents}></Stack.Screen>
        <Stack.Screen name="Appointment" component={Appointment}></Stack.Screen>
        <Stack.Screen name="Lists" component={Lists}></Stack.Screen>
        <Stack.Screen name="Accounting" component={Accounting}></Stack.Screen>
        <Stack.Screen
          name="AboutUs"
          options={{ title: "About Us" }}
          component={AboutUs}
        ></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
  },
});

export default App;
