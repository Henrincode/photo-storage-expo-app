# Documentação: `expo-sharing`

Biblioteca oficial do Expo responsável por abrir a interface nativa de compartilhamento do sistema operacional (compartilhar arquivos locais com outros aplicativos, e-mail, WhatsApp, nuvem ou salvar no gerenciador de arquivos).

---

## Função Principal Utilizada

* **`shareAsync(fileUri, options)`**: Abre o menu nativo de compartilhamento do dispositivo passando o arquivo gerado ou salvo localmente.
* *Parâmetro `fileUri`:* O caminho local do arquivo (ex: vindo do `expo-file-system` ou `expo-document-picker`).
* *Objeto `options` (Opcional):* Permite definir parâmetros como `dialogTitle` (título da janela de compartilhamento) ou `mimeType`.



---

## Verificação de Compatibilidade

* **`isAvailableAsync()`**: Retorna uma Promise booleana (`true` ou `false`) indicando se o compartilhamento está disponível no dispositivo atual (geralmente indisponível em emadores sem configuração ou alguns ambientes web).