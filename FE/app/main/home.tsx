import React, { useRef, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { ResizeMode, Video } from 'expo-av';
import { FontAwesome, Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const background = require("@/src/assets/video/demo.mp4");

const Home = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      {/* Video Component */}
      <Video
        ref={video}
        style={styles.video}
        source={background}
        useNativeControls={false}  // Disable native controls for custom experience
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.following}>Following</Text>
        <Text style={styles.forYou}>For You</Text>
      </View>

      {/* Action buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={styles.profileImage}
          />
          <View style={styles.addIcon}>
            <Feather name="plus" size={12} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="heart" size={40} color="white" />
          <Text style={styles.iconText}>328.7K</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="comment" size={40} color="white" />
          <Text style={styles.iconText}>578</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Feather name="share-2" size={40} color="white" />
          <Text style={styles.iconText}>Share</Text>
        </TouchableOpacity>
      </View>

      {/* Video description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.username}>@craig_love</Text>
        <Text style={styles.description}>
          The most satisfying job #fyp #satisfying #roadmarking
        </Text>
        <Text style={styles.song}>🎵 Roddy Roundicch - The Rou</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <FontAwesome name="home" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="search" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.plusButton}>
            <FontAwesome name="plus" size={20} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="inbox" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="user" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  header: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  following: {
    color: "rgba(255, 255, 255, 0.5)",
    marginRight: 20,
  },
  forYou: {
    color: "white",
    fontWeight: "bold",
  },
  actionContainer: {
    position: "absolute",
    right: 10,
    bottom: 150,
    alignItems: "center",
  },
  profileButton: {
    marginBottom: 30,
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
  },
  addIcon: {
    position: "absolute",
    bottom: -10,
    right: 0,
    backgroundColor: "#ff4040",
    borderRadius: 12,
    padding: 2,
  },
  iconButton: {
    alignItems: "center",
    marginBottom: 20,
  },
  iconText: {
    color: "white",
    marginTop: 5,
  },
  descriptionContainer: {
    position: "absolute",
    left: 10,
    bottom: 100,
    width: width * 0.75,
  },
  username: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    color: "white",
    marginBottom: 5,
  },
  song: {
    color: "white",
    marginTop: 5,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  plusButton: {
    backgroundColor: "#40bf73",
    width: 60,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
