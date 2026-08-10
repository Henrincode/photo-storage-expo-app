# Salvar Documentos (`expo-file-system` / `expo-sharing`)

> **Nota Técnica:** Mídias como fotos/vídeos usam o `expo-media-library` para a Galeria. Para salvar **documentos gerais** (ex: PDFs/DOCs) no gerenciador de arquivos do sistema ou abrir a caixa nativa "Salvar em Arquivos/Downloads", utilizam-se os módulos `expo-file-system` e `expo-sharing`.

## 1. Salvar Um Documento no Armazenamento Local

```js
import * as FileSystem from 'expo-file-system';

const saveDocument = async (fileUri: string, fileName: string) => {
  // Define o caminho de destino no diretório privado de documentos do App
  const destinationUri = `${FileSystem.documentDirectory}${fileName}`;

  // Copia o arquivo para a pasta do aplicativo
  await FileSystem.copyAsync({
    from: fileUri,
    to: destinationUri,
  });
};
```

## Salvar Vários Documentos

```js
import * as FileSystem from 'expo-file-system';

const saveMultipleDocuments = async (documents: { uri: string; name: string }[]) => {
  await Promise.all(
    documents.map(doc =>
      FileSystem.copyAsync({
        from: doc.uri,
        to: `${FileSystem.documentDirectory}${doc.name}`,
      })
    )
  );
};
```

## Escolher Pasta ou Compartilhar Arquivo no Dispositivo

```js
import * as Sharing from 'expo-sharing';

const exportToDeviceFolder = async (fileUri: string) => {
  // Abre o menu nativo para o usuário escolher em qual pasta do sistema/nuvem salvar o documento
  const isAvailable = await Sharing.isAvailableAsync();
  if (isAvailable) {
    await Sharing.shareAsync(fileUri);
  }
};
```