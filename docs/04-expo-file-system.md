# Documentação: `expo-file-system`

Biblioteca oficial do Expo para gerenciar o sistema de arquivos local do dispositivo (leitura, escrita, cópia, exclusão e criação de pastas/diretórios no armazenamento privado do aplicativo).

---

## Funções Principais Utilizadas

* **`getInfoAsync(fileUri)`**: Verifica se um arquivo ou diretório existe no caminho informado e retorna informações detalhadas sobre ele.
* **`makeDirectoryAsync(fileUri, options)`**: Cria uma nova pasta no diretório especificado.
* *Opção:* `{ intermediates: true }` — Cria automaticamente todas as pastas intermediárias caso a hierarquia pai/filho ainda não exista.


* **`copyAsync(options)`**: Copia um arquivo de um caminho de origem (`from`) para um caminho de destino (`to`).
* **`deleteAsync(fileUri, options)`**: Remove permanentemente um arquivo ou diretório do armazenamento local.
* **`readDirectoryAsync(fileUri)`**: Lista todos os arquivos e pastas presentes dentro de um diretório específico.

---

## Variáveis de Diretório Padrão

O Expo fornece caminhos seguros predefinidos para salvar os dados do app:

* **`FileSystem.documentDirectory`**: Diretório privado e permanente para salvar dados gerados pelo usuário (documentos, bancos de dados locais, arquivos salvos). Os arquivos aqui **não** são apagados pelo sistema operacional ao limpar cache.
* **`FileSystem.cacheDirectory`**: Diretório temporário para arquivos que podem ser apagados a qualquer momento pelo sistema operacional (como fotos recém-tiradas antes de salvar ou arquivos baixados temporariamente).