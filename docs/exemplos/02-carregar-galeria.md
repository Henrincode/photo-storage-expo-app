# 02. Carregar da Galeria (`expo-image-picker`)

## 1. Carregando Uma Foto

```typescript
import * as ImagePicker from 'expo-image-picker';

const pickPhoto = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') return;

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
  });

  if (!result.canceled) {
    const photoUri = result.assets[0].uri;
  }
};
```

## 2. Carregando Um Vídeo

```js
import * as ImagePicker from 'expo-image-picker';

const pickVideo = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') return;

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Videos,
  });

  if (!result.canceled) {
    const videoUri = result.assets[0].uri;
  }
};
```

## 3. Carregando Mais de Uma Imagem

```js
import * as ImagePicker from 'expo-image-picker';

const pickMultiplePhotos = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') return;

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsMultipleSelection: true,
    selectionLimit: 5, // Limite opcional
  });

  if (!result.canceled) {
    const photoUris = result.assets.map(asset => asset.uri);
  }
};
```

## 4. Carregando Mais de Um Vídeo

```js
import * as ImagePicker from 'expo-image-picker';

const pickMultipleVideos = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') return;

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    allowsMultipleSelection: true,
  });

  if (!result.canceled) {
    const videoUris = result.assets.map(asset => asset.uri);
  }
};
```

# 5. Carregando Mais de Uma Foto e Vídeo Juntos

```js
import * as ImagePicker from 'expo-image-picker';

const pickMultipleMixed = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') return;

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All, // Aceita fotos E vídeos na mesma seleção
    allowsMultipleSelection: true,
  });

  if (!result.canceled) {
    const allUris = result.assets.map(asset => asset.uri);
  }
};
```