import * as MediaLibrary from 'expo-media-library';
import { Alert } from "react-native";

// 3. Função assíncrona responsável por salvar a foto atual na galeria do dispositivo
export default async function saveImage(imageUri: string | null) {
  // Verifica se o estado da imagem está vazio (se o usuário ainda não tirou nem escolheu uma foto)
  if (!imageUri) {
    Alert.alert('Erro', 'Selecione ou tire uma foto primeiro!');
    return; // Encerra a função
  }

  // Solicita permissão para salvar arquivos na biblioteca do dispositivo
  const { status } = await MediaLibrary.requestPermissionsAsync(true);

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