# 03. Salvar na Galeria (`expo-media-library`)

## 1. Salvar Uma Foto

```typescript
import * as MediaLibrary from 'expo-media-library';

const savePhoto = async (photoUri: string) => {
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status === 'granted') {
    await MediaLibrary.createAssetAsync(photoUri);
  }
};
```

## 2. Salvar Um Vídeo

```js
import * as MediaLibrary from 'expo-media-library';

const saveVideo = async (videoUri: string) => {
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status === 'granted') {
    // O mesmo método trata fotos e vídeos automaticamente
    await MediaLibrary.createAssetAsync(videoUri);
  }
};
```

## 3. Salvar Mais de Uma Foto

```js
import * as MediaLibrary from 'expo-media-library';

const saveMultiplePhotos = async (photoUris: string[]) => {
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status === 'granted') {
    await Promise.all(photoUris.map(uri => MediaLibrary.createAssetAsync(uri)));
  }
};
```

## 4. Salvar Mais de Um Vídeo

```js
import * as MediaLibrary from 'expo-media-library';

const saveMultipleVideos = async (videoUris: string[]) => {
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status === 'granted') {
    await Promise.all(videoUris.map(uri => MediaLibrary.createAssetAsync(uri)));
  }
};
```

## 5. Salvar Mais de Uma Foto e Vídeo

```js
import * as MediaLibrary from 'expo-media-library';

const saveMultipleMixed = async (fileUris: string[]) => {
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status === 'granted') {
    await Promise.all(fileUris.map(uri => MediaLibrary.createAssetAsync(uri)));
  }
};
```

## 6. Salvar em uma Pasta/Álbum Personalizado

```js
import * as MediaLibrary from 'expo-media-library';

const saveToCustomAlbum = async (fileUri: string, albumName: string) => {
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status !== 'granted') return;

  // 1. Cria a mídias no sistema
  const asset = await MediaLibrary.createAssetAsync(fileUri);
  
  // 2. Adiciona a mídias ao álbum (cria o álbum se ele não existir)
  await MediaLibrary.createAlbumAsync(albumName, asset, false);
};
```