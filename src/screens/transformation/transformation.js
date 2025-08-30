import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import api from "../../service/api";
import styles from './style';



export default function Transformation({ route }) {
  const navigation = useNavigation();
  const { id } = route.params; // Pegamos apenas o id
  const [persona, setPersona] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const [loadingImages, setLoadingImages] = useState({}); 

  useEffect(() => {
    async function fetchCharacter() {
      try {
        const response = await api.get(`/characters/${id}`);
        setPersona(response.data);
      } catch (error) {
        console.log("Erro ao carregar personagem", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#efb92e"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="arrow-left" size={28} color="#FFF" />
        </TouchableOpacity>

        <View style={styles.mainInfo}>
          <View style={styles.characterImageContainer}>
            {imageLoading && (
              <ActivityIndicator
                size="large"
                color="#efb92e"
                style={StyleSheet.absoluteFillObject}
              />
            )}
            <Image
              source={{ uri: persona.image }}
              style={styles.characterImage}
              onLoadEnd={() => setImageLoading(false)}
            />
          </View>
          <Text style={styles.characterName}>{persona.name}</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Base KI</Text>
            <Text style={styles.infoValue}>{persona.ki}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Max KI</Text>
            <Text style={styles.infoValue}>{persona.maxKi}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Raça</Text>
            <Text style={styles.infoValue}>{persona.race}</Text>
          </View>
        </View>
      </View>

      <View style={styles.transformationsList}>
        <Text style={styles.sectionTitle}>Transformações</Text>
        {persona?.transformations?.length > 0 ? (
          persona.transformations.map((transform) => (
            <View key={transform.id} style={styles.transformationCard}>
              {loadingImages[transform.id] && (
                <ActivityIndicator
                  size="small"
                  color="#efb92e"
                  style={StyleSheet.absoluteFillObject}
                />
              )}
              <Image
                source={{ uri: transform.image }}
                style={styles.transformationImage}
                onLoadEnd={() =>
                  setLoadingImages((prev) => ({
                    ...prev,
                    [transform.id]: false,
                  }))
                }
              />
              <View style={styles.transformationInfo}>
                <Text style={styles.transformationName}>{transform.name}</Text>
                <Text style={styles.transformationKi}>
                  Power Level: {transform.ki}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.noTransformations}>
            <Text style={styles.noTransformationsText}>
              Este personagem não possui transformações.
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}


