import React from "react";
import { SafeAreaView, StyleSheet, Text, Image } from "react-native";
import colors from "../../assets/colors/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FontAwesome5
        name="file-medical"
        size={32}
        color="rgba(500, 50, 100, 1)"
      />
      <Text style={styles.fontstyle}>Welcome Jena</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingLeft: 10,
  },
  fontstyle: {
    paddingTop: 5,
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
});
