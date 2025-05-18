# Passos para criar o projeto com react native e expo

1. Certifique que a versão do node é a 18
2. Criar o projeto com o comando e escolher Blank (Typescript): npx create-expo-app@latest -t
3. Alterar para a versão prebuild para compilar diretamente no celular: npx expo prebuild --platform all
4. Instalar o expo-client-dev: npx expo install expo-dev-client
5. Compilar o projeto: npx expo run:android
6. Configurar o babel
7. instalar fontes
   a. instalar as fontes do google: npx expo install expo-font @expo-google-fonts/inter
   b. instalar o gerenciador de fontes:
