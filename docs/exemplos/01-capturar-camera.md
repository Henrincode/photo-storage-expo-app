# 01. Capturar pela Câmera (`expo-image-picker`)

## 1. Capturando uma Foto
```js
import * as ImagePicker from 'expo-image-picker';

const takePhoto = async () => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== 'granted') return;

  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
  });

  if (!result.canceled) {
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

