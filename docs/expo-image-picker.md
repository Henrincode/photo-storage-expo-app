# Documentação: `expo-image-picker`

Biblioteca oficial do Expo para acessar a câmera e a galeria de mídias do dispositivo.

---

## Funções Principais Utilizadas

* **`requestCameraPermissionsAsync()`**: Solicita permissão para acessar a câmera.
* **`requestMediaLibraryPermissionsAsync()`**: Solicita permissão para acessar a galeria de fotos.
* **`launchCameraAsync(options)`**: Abre a câmera nativa do celular para tirar uma foto/vídeo.
* **`launchImageLibraryAsync(options)`**: Abre a galeria nativa do celular para selecionar mídia.

---

## Principais Propriedades de Configuração (`ImagePickerOptions`)

Ao chamar `launchCameraAsync` ou `launchImageLibraryAsync`, você passa um objeto com as seguintes opções:

* **`mediaTypes`**: Define o tipo de arquivo que pode ser selecionado.
  * *Valores:* `ImagePicker.MediaTypeOptions.Images` (apenas fotos), `Videos` (apenas vídeos) ou `All` (ambos).
* **`allowsEditing`**: `boolean`. Se `true`, abre a tela nativa do sistema para cortar e ajustar a foto após a captura ou seleção.
* **`aspect`**: `[width, height]` (Array de números). Define a proporção de corte quando `allowsEditing` é `true` (ex: `[1, 1]` para quadrado, `[4, 3]`).
* **`quality`**: `number` (de `0` a `1`). Define o nível de compressão/qualidade da imagem (`1` é qualidade máxima).
* **`allowsMultipleSelection`**: `boolean`. Permite selecionar mais de uma foto por vez (disponível apenas na galeria via `launchImageLibraryAsync`).
* **`selectionLimit`**: `number`. Define a quantidade máxima de itens que o usuário pode selecionar quando `allowsMultipleSelection` é `true` (usar `0` para sem limite).
* **`base64`**: `boolean`. Se `true`, inclui a string codificada em Base64 do arquivo no resultado (útil para enviar direto em JSON para APIs).
* **`exif`**: `boolean`. Se `true`, extrai os metadados da imagem (como localização GPS, modelo da câmera e data).
* **`cameraType`**: Define qual câmera abre primeiro (ex: `ImagePicker.CameraType.front` para frontal ou `back` para traseira).

---

## Retorno da Função (`ImagePickerResult`)

Quando o usuário tira a foto ou escolhe da galeria, a função retorna um objeto com a seguinte estrutura:

* **`canceled`**: `boolean`. Indica se o usuário cancelou a ação sem escolher/tirar a foto.
* **`assets`**: `Array` de objetos contendo os dados do arquivo capturado:
  * **`uri`**: Caminho/endereço do arquivo no celular (usado no `<Image source={{ uri }} />`).
  * **`width` / `height`**: Dimensões da imagem em pixels.
  * **`type`**: Indica se é `'image'` ou `'video'`.
  * **`fileName`**: Nome original do arquivo (se disponível).
  * **`fileSize`**: Tamanho do arquivo em bytes.