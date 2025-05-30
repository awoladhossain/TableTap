import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import banner from "../../assets/images/homeBanner.png";
import { db } from "../../config/firebaseConfig";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const router = useRouter();

  const renderRestaurantItem = ({ item }) => (
    <TouchableOpacity
      className="bg-[#2d2d2d] rounded-2xl p-4 mx-2 mb-4"
      style={styles.card}
      onPress={() => router.push(`/restaurant/${item.name}`)}
    >
      <View className="overflow-hidden rounded-xl">
        <Image
          resizeMode="cover"
          source={{ uri: item.image }}
          className="w-full h-40"
          style={{ borderRadius: 12 }}
        />
        <View className="absolute top-2 right-2 bg-[#fb9b33] px-2 py-1 rounded-full">
          <Text className="text-white text-xs font-semibold">
            {item.rating} ★
          </Text>
        </View>
      </View>
      <View className="mt-3">
        <Text className="text-white text-lg font-bold">{item.name}</Text>
        <Text className="text-gray-400 text-sm mt-1" numberOfLines={1}>
          {item.address}
        </Text>
        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-[#fb9b33] text-sm font-medium">
            {item.opening} - {item.closing}
          </Text>
          <Text className="text-gray-400 text-xs">{item.distance} km</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <>
      {/* Header */}
      <LinearGradient
        colors={["#3a3a3a", "#2d2d2d"]}
        className="px-4 pt-6 pb-4"
      >
        <View className="flex-row items-center justify-between">
          <Text className="text-white text-xl font-semibold">
            Welcome to DineTime
          </Text>
          <Image resizeMode="contain" className="w-28 h-14" source={logo} />
        </View>
      </LinearGradient>

      {/* Banner */}
      <ImageBackground source={banner} className="w-full h-64 relative">
        <LinearGradient
          colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.8)"]}
          className="flex-1 justify-end p-6"
        >
          <Text className="text-white text-3xl font-bold leading-tight">
            Discover Amazing Dining
          </Text>
          <Text className="text-gray-300 text-base mt-2">
            Book your perfect meal today
          </Text>
        </LinearGradient>
      </ImageBackground>

      {/* Hot Deals Section */}
      <View className="px-4 mt-6">
        <Text className="text-white text-2xl font-bold mb-4">🔥 Hot Deals</Text>
        <FlatList
          data={restaurants.slice(0, 5)}
          renderItem={renderRestaurantItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        />
      </View>

      {/* Restaurants Section Header */}
      <View className="px-4 mt-6">
        <Text className="text-white text-2xl font-bold mb-4">
          🏠 Nearby Restaurants
        </Text>
      </View>
    </>
  );
  const getRestaurants = async () => {
    try {
      const q = query(collection(db, "restaurants"));
      const res = await getDocs(q);
      const fetchedRestaurants = [];
      res.forEach((item) => {
        const data = item.data();
        // console.log("Fetched:", data); // Debug log
        fetchedRestaurants.push(data);
      });
      setRestaurants(fetchedRestaurants);
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  useEffect(() => {
    getRestaurants();
    //   uploadData()
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {restaurants.length > 0 ? (
        <FlatList
          data={restaurants}
          renderItem={renderRestaurantItem}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingHorizontal: 8,
          }}
          ListHeaderComponent={renderHeader}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color="#fb9b33" size="large" />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  card: {
    width: Platform.OS === "ios" ? 180 : 170,
    elevation: 8,
    shadowColor: "#fb9b33",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
