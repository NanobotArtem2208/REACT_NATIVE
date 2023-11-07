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

export default function Main({ navigation }) {
  const [data, setData] = useState(dataProducts.products);

  useEffect(() => {
    setData(dataProducts.products);
  }, []);
  const renderProduct = (product) => (
    <TouchableOpacity
      onPress={(product) => {
        console.log(product.img)
        navigation.navigate("InfoProduct", product);
      }}
      style={styles.productContainer}
    >
      <Image source={{ uri: product.img }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((product) => renderProduct(product))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  productContainer: {
    width: "48%",
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    padding: 10,
  },
  productImage: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
  },
});
