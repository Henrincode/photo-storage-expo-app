# Capturar pela Câmera (`expo-image-picker`)

## 1. Capturando uma Foto
```js
import * as ImagePicker from 'expo-image-picker';

const takePhoto = async () => {
  // Solicita permissão de acesso à câmera e desestrutura a propriedade 'status' da resposta
  const { status } = await ImagePicker.requestCameraPermissionsAsync();

  // Verifica se a permissão foi negada; se não for 'granted' (concedida), interrompe a execução da função
  if (status !== 'granted') return;

  // Abre a interface nativa da câmera do celular aguardando o usuário tirar e confirmar a foto
  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images, // Restringe para fotos
    quality: 1, // Qualidade
  });

  // Checa se o usuário concluiu a captura da foto com sucesso (não clicou em cancelar)
  if (!result.canceled) {
    // Extrai o caminho local temporário (URI) do primeiro arquivo gerado pela câmera
    const photoUri = result.assets[0].uri;
  }
};
```

## 2. Capturando um Vídeo

```js
import * as ImagePicker from 'expo-image-picker';

const recordVideo = async () => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== 'granted') return;

  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Videos, // Restringe para vídeos
    videoMaxDuration: 15, // Duração máxima em segundos
  });

  if (!result.canceled) {
    const videoUri = result.assets[0].uri;
  }
};
```

## 3. Capturando Foto e Vídeo (Mesma Câmera)

```js
import * as ImagePicker from 'expo-image-picker';

const takePhotoOrVideo = async () => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== 'granted') return;

  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All, // Permite escolher foto ou vídeo ao abrir a câmera
  });

  if (!result.canceled) {
    const assetUri = result.assets[0].uri;
    const isVideo = result.assets[0].type === 'video';
  }
};
```

