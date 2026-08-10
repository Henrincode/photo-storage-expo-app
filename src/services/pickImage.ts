import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

// 2. Função assíncrona responsável por buscar uma imagem da galeria
export default async function pickImage(imageUri: string | null, setImageUri: (p: string) => void) {
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