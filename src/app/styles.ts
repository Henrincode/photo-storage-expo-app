import colors from '@/utils/tailwindColors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Estilo do container principal da tela
  container: {
    flex: 1,                   // Ocupa 100% da altura da tela
    backgroundColor: '#f5f5f5', // Cor de fundo cinza bem claro
    alignItems: 'center',       // Alinha os elementos filhos no centro horizontal
    justifyContent: 'center',    // Alinha os elementos filhos no centro vertical
    padding: 20,                // Espaçamento interno em volta da tela
  },
  // Estilo do título
  title: {
    fontSize: 22,               // Tamanho da fonte
    fontWeight: 'bold',         // Deixa o texto em negrito
    marginBottom: 20,           // Espaço abaixo do título
  },
  // Estilo da caixa que contém a foto ou o placeholder
  imageContainer: {
    width: 250,                 // Largura fixa da caixa
    height: 250,                // Altura fixa da caixa
    backgroundColor: colors.gray[400], // Fundo cinza caso não haja imagem
    justifyContent: 'center',   // Centraliza o texto do placeholder na vertical
    alignItems: 'center',       // Centraliza o texto do placeholder na horizontal
    borderRadius: 12,           // Arredonda as bordas da caixa
    overflow: 'hidden',         // Corta o que passar dos limites das bordas arredondadas
    marginBottom: 20,           // Espaço abaixo do container da foto
  },
  // Estilo do componente de imagem dentro da caixa
  image: {
    width: '100%',              // Preenche toda a largura da caixa pai
    height: '100%',             // Preenche toda a altura da caixa pai
  },
  // Estilo do texto quando não há foto selecionada
  placeholderText: {
    color: '#888',              // Cor cinza médio
  },
  // Container dos botões
  buttonGroup: {
    width: '100%',              // Ocupa toda a largura disponível
    gap: 10,                    // Adiciona um espaço fixo entre cada botão
  },
  // Estilo base dos botões
  button: {
    backgroundColor: '#007AFF', // Cor azul padrão (estilo iOS)
    paddingVertical: 12,        // Espaçamento interno acima e abaixo do texto
    borderRadius: 8,            // Arredonda os cantos do botão
    alignItems: 'center',       // Centraliza o texto dentro do botão
  },
  // Estilo específico que sobrescreve a cor do botão de salvar
  saveButton: {
    backgroundColor: '#34C759', // Cor verde para destacar a ação de salvar
  },
  // Estilo do texto dentro dos botões
  buttonText: {
    color: '#fff',              // Cor da fonte branca
    fontWeight: '600',         // Deixa o texto semi-negrito
    fontSize: 16,               // Tamanho da fonte
  },
});

export default styles