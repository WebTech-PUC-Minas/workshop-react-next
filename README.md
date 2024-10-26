# Workshop de React.js e Next.js

## Introdução

Bem-vindo ao workshop de **React.js** e **Next.js**, ministrado pela equipe **WebTech PUC Minas** durante o **DevFest** da **GDG Belo Horizonte**!

Este repositório serve como material de apoio para acompanhar o conteúdo apresentado ao longo do curso. Ele contém exemplos práticos e todos os passos necessários para criar uma aplicação do zero.

Sinta-se à vontade para seguir este guia, copiar o código e realizar suas próprias implementações. Em caso de dúvidas, os instrutores estarão disponíveis para ajudar.

## O que será abordado no workshop?

Durante o workshop, exploraremos os seguintes assuntos:

- Apresentação: o que é o **React.js** e o que é **Next.js**
- História do Desenvolvimento Front-End
- Vantagens
- Setup
- **SPA** - Single Page Applications
- Estrutura de projetos com **React.js**
- Componentização
- Por que devemos componentizar?
- Rotas
- Entendendo **Next.js**
  - Principais diferenças entre **React.js** e **Next.js**
  - Rotas em **Next.js**
- O que são as **props**
- O que são os **estados**
- Qual a diferença entre **Estados** e **Hooks**
- Alguns tipos de **Hooks**
- Renderização no **Next.js**
  - Tipos de Renderização
- Otimizações
- Boas práticas
- Novas tendências

## Setup

1. **Clone o repositório do projeto:**

Abra o terminal (ou o Git Bash, caso esteja no Windows) e digite o seguinte comando:

```bash
git clone https://github.com/WebTech-PUC-Minas/workshop-react-next.git
```

Esse comando vai baixar uma cópia do projeto para o seu computador.

2. **Acesse o diretório do projeto:**

Agora, vamos entrar na pasta do projeto que acabamos de clonar. No terminal, digite:

```bash
cd workshop-react-next
```

Esse comando muda o diretório atual para a pasta do projeto.

3. **Instale as dependências do projeto:**

Instalar todas as bibliotecas e dependências que o projeto precisa para funcionar. Para isso, execute o comando:

```bash
npm install
```

Esse comando vai baixar todos os pacotes necessários que estão listados no arquivo package.json do projeto.

4. **Inicie o servidor de desenvolvimento:**

Esse comando roda o projeto em modo de desenvolvimento.

```bash
npm run dev
```

Após executar esse comando, você verá uma mensagem informando que o servidor está rodando e o endereço local. Abra esse endereço no seu navegador para visualizar o projeto.

Agora você está pronto para começar a explorar o React.js e o Next.js!

## Criação da `Navbar`

### Passo a passo

1. **Crie o arquivo `Navbar.jsx`:**

No seu editor de código, como o **VS Code**, crie um novo arquivo chamado `Navbar.jsx` dentro da pasta `components`. Caso a pasta `components` ainda não exista, crie uma nova pasta com esse nome dentro de `src`.

2. **Copie e cole o código abaixo:**

Dentro do arquivo `Navbar.jsx`, cole o seguinte código. Esse código define a estrutura básica da barra de navegação:

```jsx
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={style.navbar}>
      <h1>
        <Link to="/">WebTech PUC Minas</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Quem somos nós?</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
```

## Criando as Rotas

Agora que criamos as páginas **Home**, vamos configurar as rotas no arquivo principal `App.jsx`. Ele utilizará o página `About.jsx` pŕe configurada no sistema.

### Passo a passo

1. **Instale o `react-router-dom`:**

Execute o comando abaixo no terminal para instalar a biblioteca react-router-dom:

```bash
npm install react-router-dom
```

2. **Configure o arquivo `App.jsx`:**

Abra o arquivo `App.jsx` e insira o código abaixo.

```jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
      </Routes>
    </Router>
  );
}

export default App;
```

## Componente `Questões`

### Passo a passo

1. **Crie o arquivo `Question.jsx`:**

No **VS Code**, dentro da pasta `components`, crie um novo arquivo chamado `Question.jsx`. Esse arquivo conterá a lógica e a estrutura do nosso componente **Question**.

2. **Copie e cole o código abaixo:**

No arquivo `Question.jsx`, cole o seguinte código:

```jsx
import { useState } from "react";
import style from "./Question.module.css";

function Question({ category, question, correctAnswer, options }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <article className={style.card}>
      <h2>{question}</h2>
      <p>{category}</p>

      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option)}
            className={
              selectedOption
                ? option === correctAnswer
                  ? style.correct
                  : option === selectedOption
                  ? style.incorrect
                  : ""
                : ""
            }
          >
            {option}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Question;
```

## Consumindo API

### Passo a passo

1. **Crie o arquivo `Home.jsx`:**

No **VS Code**, dentro da pasta `pages`, crie o arquivo `Home.jsx`. Esse componente será responsável por exibir uma lista de perguntas trazidas de uma API externa.

2. **Copie e cole o código abaixo:**

```jsx
import Question from "../components/Question";
import { useEffect, useState } from "react";
import style from "./Home.module.css";

function Home() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=12&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Erro ao buscar dados", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <h1>Home</h1>
      <div className={style.container_cards}>
        {questions &&
          questions.map((question, index) => (
            <Question
              key={index}
              category={question.category}
              question={question.question}
              correctAnswer={question.correct_answer}
              options={[...question.incorrect_answers, question.correct_answer]}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
```

## Final

Parabéns por finalizar o workshop e chegar até aqui! Esperamos que tenha sido uma experiência de aprendizado enriquecedora. Se surgirem dúvidas ou precisar de ajuda, não hesite em recorrer aos nossos monitores: Mariana, Alice, Artur e Nilson. Estamos à disposição para apoiar você nesse processo. Continue explorando e bons estudos!
