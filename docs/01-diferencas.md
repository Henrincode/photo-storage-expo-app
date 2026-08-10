# Diferença Importante

### **`expo-media-library` vs `expo-document-picker`**:

* O `expo-media-library` é otimizado para **mídias visuais** (fotos, vídeos e áudios na galeria).
* Para salvar ou abrir **documentos gerais** (PDF, DOCX, XLSX), a biblioteca correta do ecossistema Expo é a **`expo-document-picker`** junto com o **`expo-file-system`**.

### **`expo-file-system` vs `expo-media-library`**:

* O `expo-file-system` lida com **pastas, subpastas em árvore (pai, filho, neto) e arquivos genéricos** (PDFs, TXT, JSON), mas mantém tudo de forma **privada e invisível** no app de Fotos do celular.
* O `expo-media-library` lida com a **galeria pública** do sistema operacional, mas é restrito a uma estrutura de nível único (plana, sem subpastas reais).