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
8. criar os estilos com styled components
9. configurar status bar

<h1 align="center">
   APP MOBILE WALLET
    <br />
   Versão: 1.0
</h1>

<h2 align="center">
   PROTÓTIPO DO CURSO
</h2>

<h3 align="center">

    🚧  APLICAÇÃO MOBILE PARA ANDROID E IOS WALLET FINANCEIRA...  🚧

</h3>

<h1 align="center">
    <a href="https://imgur.com/007uH7C"><img src="https://i.imgur.com/007uH7C.png" title="source: imgur.com" /></a>
    <br />
</h1>

🚀 Você ira encontrar uma lista de funcionalidade do projeto que foi implementado. Vamos utilizar banco de dados na nuvem para gerenciar todas as informações geradas pelo sistema.📄

### Features

-   [x] Tela de Login;
-   [ ] Tela de Cadastro;
-   [ ] Tela de Recuperação de Senha;
-   [ ] Tela de Alteração de Senha;
-   [ ] Tela Home;
-   [ ] Tela Notificações;
-   [ ] Tela de Perfil de usuário;
-   [ ] Tela Cartões;
-   [ ] Tela de Detalhes do Cartão;
-   [ ] Tela de Status da Renda;
-   [ ] Tela de Transferência;

## ✅ Instrução para rodar o projeto na maquina local;

Para realizar o clone o projeto em sua máquina, e necessário que tenha as seguintes ferramentas instalado em sua máquina `yarn` ou `npm`, `node js`, `expo`. para instalar as depenicas você tem que rodar o comando `yarn` e em seguida `yarn android` caso seja ANDROID para executar a aplicação ou `yarn ios` caso seja emulador IOS.

Atualmente o projeto não necessita de nenhuma variável ambiente, então, é simples para você deixar o projeto em execução.

```bash
# Clonar o repositório
$ git clonehttps://github.com/SilvaneiMartins/wallet-app

# Acessar a pasta do projeto
$ cd wallet-app

# Instalar as dependências
$ yarn
$ npm install

# Executar a aplicação android
$ npx react-native run-android
$ yarn android
$ expo start

# Executar a aplicação no ios
$ npx react-native ios-android
$ yarn ios
$ expo start
```

## :memo: License

Este projeto está sob a licença MIT. Caso gostaria de ler, por favor acessar a licença aqui neste link [LICENSE](https://github.com/SilvaneiMartins/wallet-app/blob/master/LICENSE) para maiores informações.

---

## 🛠 Tecnologias usada no projeto;

Aqui tem link de algumas das tecnologias utilizada no projeto.

-   [REACT](https://pt-br.reactjs.org)
-   [YUP](https://github.com/jquense/yup)
-   [REACT-NATIVE](https://reactnative.dev/)
-   [REDUX](https://github.com/reduxjs/redux)
-   [MOMENT](https://github.com/moment/moment)
-   [UNFORM](https://github.com/unform/unform)
-   [STYLED-COMPONENTS](https://styled-components.com/)
-   [REACT-NATIVE-VECTOR-ICONS](https://phosphoricons.com/)

### Observação Importante sobre o Projeto;

-   O projeto foi desenvolvido para Android e IOS, para que possa ser executado em qualquer plataforma, mas no momento vamos dar continuidade para Android é utilizar o sistema operacional windows.

-   Quando for adicionado ferramento ao projeto sera adicionado logo acima na sessão de Tecnologias usada no projeto.

-   Este README será utilizado como documentação para o projeto Wallet.

### Developer

---

<a href="https://github.com/SilvaneiMartins">
    <img
        style="border-radius:50%"
        src="https://github.com/SilvaneiMartins.png"
        width="100px;"
        alt="Silvanei Martins"
    />
    <br />
    <sub>
        <b>Silvanei de Almeida Martins</b>
    </sub>
</a>
     <a href="https://github.com/SilvaneiMartins" title="Silvanei martins" >
    🚀
 </a>
