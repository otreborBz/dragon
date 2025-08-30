import { useEffect, useState } from "react";
import { View, ActivityIndicator, Image, FlatList } from "react-native";
import api from "../../service/api";
import Card from "../../components/card";
import styles from './style';

export default function Home({ navigation }) {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadingPersona();
  }, []);

  async function loadingPersona() {
    try {
      const resposta = await api.get("/characters?limit=100");
      setPersonagens(resposta.data.items);
    } catch (error) {
      console.log("Erro ao carregar personagens", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#ff9800" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image 
        source={{uri: "https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp"}} 
        style={styles.logo} 
      />
      <FlatList
        data={personagens}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Card persona={item} />}
        style={styles.list}
      />
    </View>
  );
}


