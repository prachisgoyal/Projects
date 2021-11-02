import React, { useState } from "react";
import {
  View as SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/colors/colors";
import { PatientProfile } from "./Data";

const ProfileEdit = ({ navigation }) => {
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

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          key="Save"
          style={styles.touchable}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.label}>Save</Text>
        </TouchableOpacity>
        <TextInput
          value={FirstName}
          onChangeText={(FirstName) => setFirstName(FirstName)}
          placeholder="First Name"
          placeholderTextColor={colors.fontGray}
          style={styles.textInput}
        />
        <TextInput
          value={LastName}
          onChangeText={(LastName) => setLastName(LastName)}
          placeholder="last Name"
          placeholderTextColor={colors.fontGray}
          style={styles.textInput}
        />
        <TextInput
          value={Gender}
          onChangeText={(Gender) => setGender(Gender)}
          placeholder="Gender"
          placeholderTextColor={colors.fontGray}
          style={styles.textInput}
        />
        <TextInput
          value={dob}
          onChangeText={(dob) => setdob(dob)}
          placeholder="DOB: mm-dd-yyyy"
          keyboardType="number-pad"
          placeholderTextColor={colors.fontGray}
          style={styles.textInput}
        />
        <TextInput
          value={MaritalStatus}
          onChangeText={(MaritalStatus) => setMaritalStatus(MaritalStatus)}
          placeholder="Marital status"
          placeholderTextColor={colors.fontGray}
          style={styles.textInput}
        />
        <TextInput
          value={Address}
          onChangeText={(Address) => setAddress(Address)}
          placeholder="Address"
          placeholderTextColor={colors.fontGray}
          style={styles.textInput}
        />
        <TextInput
          value={City}
          onChangeText={(City) => setCity(City)}
          placeholder="City"
          placeholderTextColor={colors.fontGray}
          style={styles.textInput}
        />
        <TextInput
          value={State}
          onChangeText={(State) => setState(dob)}
          placeholder="State"
          placeholderTextColor={colors.fontGray}
          style={styles.textInput}
        />
        <TextInput
          value={PostalCode}
          onChangeText={(PostalCode) => setPostalCode(dob)}
          placeholder="Postal Code"
          placeholderTextColor={colors.fontGray}
          style={styles.textInput}
        />
        <TextInput
          value={Country}
          onChangeText={(Country) => setCountry(Country)}
          placeholder="Country"
          placeholderTextColor={colors.fontGray}
          style={styles.textInput}
        />
        <TextInput
          value={Email}
          onChangeText={(Email) => setEmail(Email)}
          placeholder="Contact Email"
          keyboardType="email-address"
          placeholderTextColor={colors.fontGray}
          style={styles.textInput}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 20,
    paddingHorizontal: 25,
  },
  textInput: {
    borderColor: colors.gray,
    backgroundColor: colors.gray,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginVertical: 10,
  },
  touchable: {
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: colors.primaryColor,
    alignSelf: "flex-end",
    maxWidth: "50%",
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.white,
  },
});

export default ProfileEdit;
