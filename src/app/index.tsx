
import styles from '@/app/styles';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';

// Importa todas as funcionalidades do módulo de câmera e galeria do Expo
import * as ImagePicker from 'expo-image-picker';

// Importa todas as funcionalidades do módulo de armazenamento do Expo para salvar arquivos
import * as MediaLibrary from 'expo-media-library';

export default function App() {
  // Cria o estado 'imageUri' para guardar o caminho (URI) da foto selecionada/capturada.
  // Inicia como 'null' porque nenhuma foto foi carregada ainda.
  const [imageUri, setImageUri] = useState<string | null>(null);

  // 1. Função assíncrona responsável por abrir a câmera do dispositivo
  async function takePhoto() {
    // Solcita a permissão do usuário para usar a câmera e desestrutura o 'status' da resposta
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    // Verifica se a permissão NÃO foi concedida pelo usuário
    if (status !== 'granted') {
      // Exibe um alerta de erro informando a necessidade da permissão
      Alert.alert('Permissão negada', 'Precisamos da permissão da câmera para continuar.');
      return; // Interrompe a execução da função
    }

    // Abre a interface nativa da câmera do celular e aguarda a ação do usuário
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true, // Permite que o usuário corte/ajuste a foto após tirar
      quality: 1,          // Define a qualidade da imagem (0 a 1, sendo 1 a máxima)
    });

    // Verifica se o usuário tirou a foto (se o processo não foi cancelado)
    if (!result.canceled) {
      // Atualiza o estado 'imageUri' com o endereço interno da imagem tirada
      setImageUri(result.assets[0].uri);
    }
  };

  // 2. Função assíncrona responsável por buscar uma imagem da galeria
  async function pickImage() {
    // Solicita a permissão do usuário para acessar a biblioteca de fotos
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    // Se a permissão for negada, exibe o alerta e encerra
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos da permissão da galeria para continuar.');
      return;
    }

    // Abre a galeria de fotos do dispositivo e aguarda a seleção
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, // Permite edição/corte antes de selecionar
      quality: 1,          // Mantém a alta qualidade da imagem selecionada
    });

    // Se o usuário selecionou uma imagem (não cancelou a seleção)
    if (!result.canceled) {
      // Atualiza o estado com o endereço da imagem selecionada na galeria
      setImageUri(result.assets[0].uri);
    }
  };

  // 3. Função assíncrona responsável por salvar a foto atual na galeria do dispositivo
  async function saveImage() {
    // Verifica se o estado da imagem está vazio (se o usuário ainda não tirou nem escolheu uma foto)
    if (!imageUri) {
      Alert.alert('Erro', 'Selecione ou tire uma foto primeiro!');
      return; // Encerra a função
    }

    // Solicita permissão para salvar arquivos na biblioteca do dispositivo
    const { status } = await MediaLibrary.requestPermissionsAsync();

    // Se a permissão for concedida
    if (status === 'granted') {
      try {
        // Tenta criar um novo recurso na galeria usando o endereço da imagem guardada no estado
        await MediaLibrary.createAssetAsync(imageUri);
        // Notifica o usuário sobre o sucesso
        Alert.alert('Sucesso!', 'Imagem salva na galeria com sucesso.');
      } catch (error) {
        // Captura e exibe um erro se algo falhar no salvamento
        Alert.alert('Erro', 'Não foi possível salvar a imagem.');
      }
    } else {
      // Notifica o usuário caso a permissão de escrita tenha sido negada
      Alert.alert('Permissão negada', 'Precisamos da permissão para salvar fotos.');
    }
  };

  // Retorno visual da interface do componente (JSX)
  return (
    // Container pai que envelopa toda a tela com o estilo 'container'
    <View style={styles.container}>

      {/* Título exibido no topo do aplicativo */}
      <Text style={styles.title}>Enviar imagem</Text>

      {/* Caixa delimitadora para exibição do preview da imagem */}
      <View style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons name="camera-plus" size={200} color={styles.imageIcon.color} />
        )}
      </View>

      {/* Agrupamento dos botões de ação do app */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Text style={styles.buttonText}>Tirar Foto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Buscar na Galeria</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={saveImage}>
          <Text style={styles.buttonText}>Salvar no Celular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

