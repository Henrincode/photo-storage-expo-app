import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';


// 1. Função assíncrona responsável por abrir a câmera do dispositivo
export default async function takePhoto(imageUri: string | null, setImageUri: (p: string) => void) {
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