import React, { useState } from "react";
import {
  View as SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/colors/colors";

const Lists = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.profileHeading}>Medications</Text>
        <View style={styles.MedicationsContainer}>
          <Text style={styles.profileHeading2}>Drug</Text>
          <Text style={styles.profileHeading2}>Start Date</Text>
          <Text style={styles.profileHeading2}>End Date</Text>
          <Text style={styles.profileHeading2}>Referrer</Text>
        </View>

        <Text style={styles.profileHeading}>Medications Allergy List</Text>
        <View style={styles.MedicationsContainer}>
          <Text style={styles.profileHeading2}>Title</Text>
          <Text style={styles.profileHeading2}>Reported Date</Text>
          <Text style={styles.profileHeading2}>Referrer</Text>
        </View>
        <Text style={styles.profileHeading}>Issues List</Text>
        <View style={styles.MedicationsContainer}>
          <Text style={styles.profileHeading2}>Title</Text>
          <Text style={styles.profileHeading2}>Reported Date</Text>
          <Text style={styles.profileHeading2}>Referrer</Text>
        </View>
        <Text style={styles.profileHeading}>Amendment Lists</Text>
        <Text style={styles.profileHeading2}>No Results</Text>
        <Text style={styles.profileHeading}>Lab Results</Text>
        <Text style={styles.profileHeading2}>No Results</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingHorizontal: 25,
  },
  MedicationsContainer: {
    alignItems: "stretch",
    flexDirection: "row",
    justifyContent: "space-around",
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
    marginTop: 30,
  },
  profileHeading2: {
    color: colors.fontGray,
    fontSize: 16,
    paddingVertical: 1,
    paddingHorizontal: 2,
    alignItems: "flex-start",
  },
});

export default Lists;
