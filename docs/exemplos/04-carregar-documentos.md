# Carregar Documentos (`expo-document-picker`)

## 1. Carregar Um Documento

```js
import * as DocumentPicker from 'expo-document-picker';

const pickOneDocument = async () => {
  const result = await DocumentPicker.getDocumentAsync({
    type: 'application/pdf', // Ou '*/*' para aceitar qualquer extensão
    multiple: false,
  });

  if (!result.canceled) {
    const docUri = result.assets[0].uri;
    const docName = result.assets[0].name;
  }
};
```

## Carregar Vários Documentos

```js
import * as DocumentPicker from 'expo-document-picker';

const pickMultipleDocuments = async () => {
  const result = await DocumentPicker.getDocumentAsync({
    type: '*/*', // Aceita PDFs, DOCX, TXT, etc.
    multiple: true, // Habilita múltipla seleção
  });

  if (!result.canceled) {
    const docs = result.assets.map(doc => ({
      uri: doc.uri,
      name: doc.name,
    }));
  }
};
```

