import React from "react";
import {
  View as SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/colors/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AboutUs from "./AboutUs";
import Login from "./Login";

const More = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.column}>
          {fields.map((field) => (
            <TouchableOpacity
              key={field.name}
              style={styles.touchable}
              onPress={() => navigation.navigate(field.name)}
            >
              <Text style={styles.label}>{field.value}</Text>
              <FontAwesome5
                style={styles.arrow}
                name="chevron-right"
                size={16}
                color={colors.fontGray}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
  Documents;
};

const fields = [
  { name: "AboutUs", value: "About us" },
  { name: "Login", value: "Sign out" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    flexDirection: "column",
    marginTop: 40,
  },
  column: {},
  touchable: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 8,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    minWidth: "52%",
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.fontGray,
  },
  arrow: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
});

export default More;
