import React from "react";
import {
  View as SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/colors/colors";
import Profile from "./Profile";
import Accounting from "./Accounting";
import Reports from "./Reports";
import Lists from "./Lists";
import Appointment from "./Appointment";
import Documents from "./Documents";
import Header from "./Header";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.column}>
          {values.map((value) => (
            <TouchableOpacity
              data-testid={value}
              key={value}
              style={styles.touchable}
              onPress={() => navigation.navigate(value)}
            >
              <Text style={styles.label}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const values = [
  "Profile",
  "Lists",
  "Documents",
  "Appointment",
  "Accounting",
  "Reports",
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 20,
    alignItems: "center",
  },
  column: {
    paddingTop: 20,
  },
  touchable: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: "12%",
    minWidth: "50%",
    backgroundColor: colors.primaryColor,
    marginVertical: 25,
    alignSelf: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.white,
    alignSelf: "center",
  },
});

export default Home;
