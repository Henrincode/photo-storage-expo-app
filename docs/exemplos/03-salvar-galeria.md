# Salvar na Galeria (`expo-media-library`)

## 1. Salvar Uma Foto

```typescript
import * as MediaLibrary from 'expo-media-library';

const savePhoto = async (photoUri: string) => {
  // Solicita permissão de acesso e gravação no armazenamento/galeria do dispositivo e extrai o 'status'
  const { status } = await MediaLibrary.requestPermissionsAsync();

  // Verifica se o usuário permitiu o acesso ao armazenamento ('granted')
  if (status === 'granted') {
    // Transforma o arquivo do caminho temporário (photoUri) em um arquivo definitivo salvo na galeria do celular
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
  await MediaLibrary.createAlbumAsync(albumName, asset, false); // false = copiar, true = mover
};
```



## 7. Como criar Pastas e Subpastas (Estrutura em Árvore)

Para organizar arquivos em estruturas complexas de diretórios (como **Pai > Filho > Neto > Bisneto**), não é possível utilizar a `expo-media-library`, pois as galerias nativas do iOS e Android trabalham exclusivamente em um **nível único e plano de álbuns**.

Para criar pastas e subpastas reais no dispositivo, deve-se utilizar a biblioteca **`expo-file-system`** enviando o caminho relativo completo (ex: `"PastaPai/SubPasta/Neto"`).

### Observação Importante sobre a Galeria
* **Invisibilidade no App de Fotos:** Arquivos salvos em pastas e subpastas pelo `expo-file-system` ficam gravados no **armazenamento interno privado do aplicativo**.
* **Comportamento:** Eles **NÃO** vão aparecer na Galeria ou no app de Fotos nativo do celular do usuário.
* **Uso Recomendado:** É a solução ideal quando o objetivo é organizar documentos, relatórios ou salvar fotos/vídeos que devem ser acessados apenas de dentro do próprio aplicativo.