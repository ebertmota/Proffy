
<h1 align="center">
  <img alt="Proffy" src="./web/src/assets/images/purple-logo.png" />
  <br> Next Level Week #2 </br>
</h1>


<p align="center">
  <a href="#pushpin-sobre">Sobre</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#bulb-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#rocket-Como-rodar-em-minha-maquina">Como Executar</a>
</p>



## :pushpin: Sobre

O Proffy é um projeto Web e Mobile que oferece a professores a possibilidade de cadastrar aulas, adicionando informações como custo e disciplina, com o intuito de conectar alunos a estes professores.
Este projeto foi idealizado pensando no **6 de agosto**, onde se comemora o **Dia Nacional dos Profissionais da Educação**.
  
Essa aplicação foi contruida durante a Next **Level Week #2**, projeto ministrado pela [Rocketseat](https://rocketseat.com.br/).

## :bulb: Tecnologias Utilizadas

-  [Typescript](https://www.typescriptlang.org/)
-  [Node.js](https://nodejs.org/en/)
-  [ReactJS](https://reactjs.org/)
-  [React Native](http://facebook.github.io/react-native/)
-  [Expo](https://expo.io/)
-  [Express](https://expressjs.com/)
-  [Knex](http://knexjs.org/)

## :rocket: Como rodar em minha maquina ?

### **Pré-requisitos**

  - Você precisa ter o **[Node.js](https://nodejs.org/en/)** instalado em seu computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina

<br />

### Faça um clone do repositório:

```sh
  $ git clone https://github.com/ebertmota/Proffy.git
```

Caso você não tenha o git instalado em seu computador, pode fazer o download do **[Projeto compactado](https://github.com/ebertmota/Proffy/archive/master.zip)**
<br />
<br />

### Executando a Aplicação:
  Caso você esteja utilizando o **npm** ao invés de yarn basta substituir **yarn** por **npm run** para rodar os scripts, e para instalar as dependências use **npm install**.
  ### API
  ```sh
    # Instalando dependências.
    $ cd server
    $ yarn install
    
  ```
  ```sh
    # Configurando o banco de dados e criando as tabelas.
    $ yarn knex:migrate
  
    # Iniciando API
    $ yarn dev:server
  ```
  ### Web
  ```sh
  # Instalando dependências.
  $ yarn
  
  # Rodando aplicação web
  $ yarn start
  ```
  
  ### Mobile
  ```sh
    # Instalando dependências.
    $ yarn
    
    # Rodando app mobile
    $ yarn start
  ```
