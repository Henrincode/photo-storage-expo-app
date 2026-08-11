# Documentação: `expo-media-library`

Biblioteca oficial do Expo para salvar, ler e gerenciar arquivos na galeria/armazenamento permanente do celular.

---

## Funções Principais Utilizadas

* **`requestPermissionsAsync()`**: Solicita ao usuário a permissão de leitura e escrita no armazenamento interno/galeria.
* **`getPermissionsAsync()`**: Apenas verifica o status atual das permissões sem abrir a caixa de diálogo para o usuário.
* **`createAssetAsync(localUri)`**: Recebe o caminho temporário de um arquivo (`uri`) e o grava permanentemente na galeria do dispositivo.

---

## Funções para Respostas Avançadas

Criar álbuns, listar fotos ou apagar mídias:

* **`createAlbumAsync(albumName, asset, copyAsset)`**: Cria um álbum personalizado na galeria (ex: pasta "MeuApp") e move a foto para dentro dele.
* **`getAssetsAsync(options)`**: Busca e lista as mídias já existentes no dispositivo do usuário (permite paginar, filtrar por tipo, data, etc.).
* **`deleteAssetsAsync(assets)`**: Remove um ou mais arquivos de mídia permanentemente da galeria do celular.
* **`saveToLibraryAsync(localUri)`**: Atalho direto para salvar um arquivo na galeria padrão sem retornar a instância criada.