import { useEffect, useState } from "react";
import dataProducts from "../data/dataProducts.json";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function InfoProduct({ route }) {
  console.log(route.params.name);
  return <View>
    <Text>{route.params.name}</Text>
  </View>;
}

const styles = StyleSheet.create({});
