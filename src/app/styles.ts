import colors from '@/utils/tailwindColors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Estilo do container principal da tela
  container: {
    flex: 1,
    backgroundColor: colors.gray[800],
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 24
  },
  // Estilo do título
  title: {
    fontSize: 36,
    fontWeight: '300',
    // marginBottom: 20,
    color: colors.gray[50]
  },
  // Estilo da caixa que contém a foto ou o placeholder
  imageContainer: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: colors.gray[400],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    overflow: 'hidden',
    // marginBottom: 20,
  },
  imageIcon: {
    color: colors.gray[700]
  },
  // Estilo do componente de imagem dentro da caixa
  image: {
    width: '100%',
    height: '100%',
  },
  // Estilo do texto quando não há foto selecionada
  placeholderText: {
    color: '#888',
  },
  // Container dos botões
  buttonGroup: {
    width: '100%',
    gap: 10,
  },
  // Estilo base dos botões
  button: {
    backgroundColor: colors.blue[600],
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  // Estilo específico que sobrescreve a cor do botão de salvar
  saveButton: {
    backgroundColor: colors.green[600],
  },
  // Estilo do texto dentro dos botões
  buttonText: {
    color: colors.gray[50],
    // fontWeight: '600',
    fontSize: 24,
  },
});

export default styles