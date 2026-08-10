# Carregar da Galeria (`expo-image-picker`)

## 1. Carregando Uma Foto

```typescript
import * as ImagePicker from 'expo-image-picker';

const pickPhoto = async () => {
  // Solicita ao usuário a permissão de leitura da biblioteca/galeria de mídias e extrai a propriedade 'status'
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

  // Caso o usuário não conceda a permissão ('granted'), encerra a execução da função imediatamente
  if (status !== 'granted') return;

  // Abre a interface nativa da galeria de fotos do dispositivo aguardando a seleção do usuário
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images, // Lista somente imagens
    quality: 1, // Qualidade
  });

  // Verifica se o usuário de fato selecionou uma foto (não fecho ou cancelou a seleção)
  if (!result.canceled) {
    // Acessa o primeiro item do array de mídias retornadas ('assets') e extrai o seu caminho local (URI)
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
    mediaTypes: ImagePicker.MediaTypeOptions.Videos, // Lista somente vídeos
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
    allowsMultipleSelection: true, // Permite selecionar mais de um arquivo
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