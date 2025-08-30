import { useState } from "react";
import { View, Text, Image,TouchableOpacity, Modal, Pressable, ScrollView, ActivityIndicator } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import styles from './cardStyle';

export default function Card({ persona }) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const goToTransformation = () => {
    navigation.navigate('Transformation', { id: persona.id });
  }

  return (
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        <View style={{ position: 'relative' }}>
          <TouchableOpacity onPress={goToTransformation}>
            <Image
              source={{ uri: persona.image }}
              style={styles.image}
              onLoadEnd={() => setImageLoading(false)}
            />
          </TouchableOpacity>
          {imageLoading && (
            <ActivityIndicator
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
              size="large"
              color="#efb92e"
            />
          )}
        </View>

        <View style={styles.characteristicsContainer}>
          <Text style={styles.name}>{persona.name}</Text>
          <Text style={styles.characteristicText}><Text style={styles.label}>Raça: </Text>{persona.race}</Text>
          <Text style={styles.characteristicText}><Text style={styles.label}>Gênero: </Text>{persona.gender}</Text>
          <Text style={styles.characteristicText}><Text style={styles.label}>Base KI: </Text>{persona.ki}</Text>
          <Text style={styles.characteristicText}><Text style={styles.label}>Total KI: </Text>{persona.maxKi}</Text>
          <Text style={styles.characteristicText}><Text style={styles.label}>Afiliação: </Text>{persona.affiliation}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.info} onPress={() => setModalVisible(true)}>
        <Feather name="plus-circle" size={24} color="#fff" />
        <Text style={styles.textInfo}>Info</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
              <Text style={styles.description}>{persona.description}</Text>
              <Pressable onPress={() => setModalVisible(false)} style={styles.button}>
                <Text style={styles.buttonText}>Fechar</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}



