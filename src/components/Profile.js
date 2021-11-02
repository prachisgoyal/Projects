import React, { useState } from "react";
import {
  View as SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/colors/colors";
import ProfileEdit from "./ProfileEdit";
import { PatientProfile } from "./Data";

const Profile = ({ navigation }) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Gender, setGender] = useState("");
  const [dob, setdob] = useState("");
  const [MaritalStatus, setMaritalStatus] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [Country, setCountry] = useState("");
  const [Email, setEmail] = useState("");
  const [Provider, setProvider] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          {PatientProfile["Patient Demographics"].Who["First Name"]}{" "}
          {PatientProfile["Patient Demographics"].Who["Last Name"]}
        </Text>
        <TouchableOpacity
          key="Edit"
          style={styles.touchable}
          onPress={() => navigation.navigate("ProfileEdit")}
        >
          <Text style={styles.label}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerProfile}>
        <Text style={styles.profileHeading}>Profile Demographics</Text>
        <Text style={styles.profileHeading2}>Who</Text>
        <Text value={Gender} style={styles.profileText}>
          {PatientProfile["Patient Demographics"].Who.Sex}
        </Text>
        <Text
          value={dob}
          placeholderTextColor={colors.fontGray}
          style={styles.profileText}
        >
          {PatientProfile["Patient Demographics"].Who.DOB}
        </Text>
        <Text value={MaritalStatus} style={styles.profileText}>
          {PatientProfile["Patient Demographics"].Who["Marital Status"]}
        </Text>
        <Text style={styles.profileHeading2}>Contact</Text>
        <Text value={Address} style={styles.profileText}>
          {PatientProfile["Patient Demographics"].Contact.Address}
        </Text>
        <Text value={City} style={styles.profileText}>
          {PatientProfile["Patient Demographics"].Contact.City}
        </Text>
        <Text value={State} style={styles.profileText}>
          {PatientProfile["Patient Demographics"].Contact.State}
        </Text>
        <Text value={PostalCode} style={styles.profileText}>
          {PatientProfile["Patient Demographics"].Contact["Postal Code"]}
        </Text>
        <Text value={Country} style={styles.profileText}>
          {PatientProfile["Patient Demographics"].Contact.Country}
        </Text>
        <Text value={Email} style={styles.profileText}>
          {PatientProfile["Patient Demographics"].Contact["Contact Email"]}
        </Text>
        <Text style={styles.profileHeading2}>Choices</Text>
        <Text value={Provider} style={styles.profileText}>
          Provider
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  containerProfile: {
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 20,
    paddingHorizontal: 25,
  },
  touchable: {
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 25,
    backgroundColor: colors.primaryColor,
    alignSelf: "flex-end",
    //marginBottom: 20,
    maxWidth: "20%",
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.white,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.fontGray,
    alignSelf: "flex-start",
    paddingHorizontal: 20,
  },
  profileText: {
    color: colors.fontGray,
    fontSize: 14,
    paddingVertical: 2,
    paddingHorizontal: 2,
  },
  profileHeading: {
    color: colors.fontGray,
    fontSize: 18,
    paddingVertical: 1,
    backgroundColor: colors.primaryColor,
    fontWeight: "500",
    paddingHorizontal: 2,
  },
  profileHeading2: {
    color: colors.fontGray,
    fontSize: 16,
    paddingVertical: 1,
    backgroundColor: colors.gray,
    paddingHorizontal: 2,
  },
});

export default Profile;
