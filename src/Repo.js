import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Repo(props) {
  const { item, handleLike } = props;

  return (
    <View style={styles.repositoryContainer}>
      <Text style={styles.repository}>{item.title}</Text>

      <View style={styles.techsContainer}>
        {item.techs.map((tech) => (
          <View key={tech} style={styles.techView}>
            <Text style={styles.tech}>{tech}</Text>
          </View>
        ))}
      </View>

      <View style={styles.likesContainer}>
        <Text style={styles.likeText} testID={`repository-likes-${item.id}`}>
          {item.likes} {item.likes === 1 ? "curtida" : "curtidas"}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLike(item.id)}
        testID={`like-button-${item.id}`}
      >
        <Text style={styles.buttonText}>Curtir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 20,
  },
  repository: {
    fontSize: 26,
    fontWeight: "bold",
  },
  techsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  techView: {
    marginRight: 10,
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tech: {
    fontSize: 12,
    color: "#000",
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  button: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    color: "#fff",
    backgroundColor: "#7159c1",
    padding: 15,
  },
});
