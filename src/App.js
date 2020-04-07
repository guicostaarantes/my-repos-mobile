import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, StatusBar, StyleSheet } from "react-native";
import api from "./services/api";
import Repo from "./Repo";

export default function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRepos = async () => {
    try {
      setLoading(true);
      const response = await api.get("repositories");
      setRepos(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRepos();
  }, []);

  async function handleLike(id) {
    try {
      const response = await api.post(`repositories/${id}/like`);
      setRepos(
        repos.map((repo) => {
          if (repo.id === id) repo.likes++;
          return repo;
        })
      );
    } catch (err) {}
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={repos}
          renderItem={({ item }) => (
            <Repo item={item} handleLike={handleLike} />
          )}
          keyExtractor={(item) => item.id}
          refreshing={loading}
          onRefresh={getRepos}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a18fdd",
  },
});
