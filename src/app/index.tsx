
import styles from '@/app/styles';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

// Importa todas as funcionalidades do módulo de câmera e galeria do Expo


// Importa todas as funcionalidades do módulo de armazenamento do Expo para salvar arquivos


import pickImage from '@/services/pickImage';
import saveImage from '@/services/saveImage';
import takePhoto from '@/services/takePhoto';

export default function App() {
  // Cria o estado 'imageUri' para guardar o caminho (URI) da foto selecionada/capturada.
  // Inicia como 'null' porque nenhuma foto foi carregada ainda.
  const [imageUri, setImageUri] = useState<string | null>(null);

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
        <TouchableOpacity style={styles.button} onPress={() => takePhoto(imageUri, setImageUri)}>
          <Text style={styles.buttonText}>Tirar Foto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => pickImage(imageUri, setImageUri)}>
          <Text style={styles.buttonText}>Buscar na Galeria</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={() => saveImage(imageUri)}>
          <Text style={styles.buttonText}>Salvar no Celular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

