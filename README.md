# Workshop de React.js e Next.js

## Introdução

Bem-vindo ao workshop de **React.js** e **Next.js**, ministrado pela equipe **WebTech PUC Minas** durante o **DevFest** da **GDG Belo Horizonte**!

Este repositório serve como material de apoio para acompanhar o conteúdo apresentado ao longo do curso. Ele contém exemplos práticos e todos os passos necessários para criar uma aplicação do zero.

Sinta-se à vontade para seguir este guia, copiar o código e realizar suas próprias implementações. Em caso de dúvidas, os instrutores estarão disponíveis para ajudar.

## O que será abordado no workshop?

Durante o workshop, exploraremos os seguintes assuntos:

-   Apresentação: o que é o **React.js** e o que é **Next.js**
-   História do Desenvolvimento Front-End
-   Vantagens
-   Setup
-   **SPA** - Single Page Applications
-   Estrutura de projetos com **React.js**
-   Componentização
-   Por que devemos componentizar?
-   Rotas
-   Entendendo **Next.js**
    -   Principais diferenças entre **React.js** e **Next.js**
    -   Rotas em **Next.js**
-   O que são as **props**
-   O que são os **estados**
-   Qual a diferença entre **Estados** e **Hooks**
-   Alguns tipos de **Hooks**
-   Renderização no **Next.js**
    -   Tipos de Renderização
-   Otimizações
-   Boas práticas
-   Novas tendências

## Setup

Antes de começarmos a codificar, precisamos configurar o ambiente de desenvolvimento. Siga os passos abaixo com atenção:

1. **Clone o repositório do projeto:**

O primeiro passo é copiar o repositório que usaremos durante o workshop. Para isso, abra o terminal (ou o Git Bash, caso esteja no Windows) e digite o seguinte comando:

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

O próximo passo é instalar todas as bibliotecas e dependências que o projeto precisa para funcionar. Para isso, execute o comando:

```bash
npm install
```

Esse comando vai baixar todos os pacotes necessários que estão listados no arquivo package.json do projeto.

4. **Inicie o servidor de desenvolvimento:**

Agora que todas as dependências estão instaladas, podemos rodar o projeto em modo de desenvolvimento. Isso permite que você veja as alterações ao vivo enquanto edita o código. Para iniciar o servidor, digite:

```bash
npm run dev
```

Após executar esse comando, você verá uma mensagem informando que o servidor está rodando e o endereço local. Abra esse endereço no seu navegador para visualizar o projeto.

Agora você está pronto para começar a explorar o React.js e o Next.js!

## Criando o primeiro componente - Navbar

Os **componentes** são a base da construção de interfaces no **React.js**. Eles permitem dividir a interface em partes reutilizáveis. Vamos começar criando um componente simples chamado **Navbar**, que exibirá o nome do site e alguns links de navegação.

### Passo a passo

1. **Crie o arquivo `Navbar.jsx`:**

No seu editor de código, como o **VS Code**, crie um novo arquivo chamado `Navbar.jsx` dentro da pasta `components`. Caso a pasta `components` ainda não exista, crie uma nova pasta com esse nome.

Para criar o arquivo, clique com o botão direito na pasta `components`, selecione **Novo Arquivo** e nomeie-o como `Navbar.jsx`.

2. **Copie e cole o código abaixo:**

Dentro do arquivo `Navbar.jsx`, cole o seguinte código. Esse código define a estrutura básica da barra de navegação:

```jsx
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

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

## O que são componentes - Criando o nosso Question

No **React.js**, os componentes são blocos reutilizáveis de interface do usuário (UI) que podem ser combinados para construir interfaces maiores e mais complexas. A reutilização de componentes permite um código mais organizado, modular e fácil de manter.

Vamos criar um componente chamado **Question**, que exibirá uma pergunta, a categoria à qual ela pertence e as opções de resposta. O componente permitirá que o usuário selecione uma resposta e indicará visualmente se a resposta selecionada está correta ou errada.

### Passo a passo

1. **Crie o arquivo `Question.jsx`:**

No **VS Code**, dentro da pasta `components`, crie um novo arquivo chamado `Question.jsx`. Esse arquivo conterá a lógica e a estrutura do nosso componente **Question**.

2. **Copie e cole o código abaixo:**

No arquivo `Question.jsx`, cole o seguinte código:

```jsx
import style from './Question.module.css';

function Question() {
    const category = 'Entertainment: Cartoon & Animations';
    const questionText =
        'Benny, Brain, Fancy-Fancy, Spook and Choo-Choo were known associates of what Hanna Barbera cartoon character?';
    const options = ['Yogi Bear', 'Snagglepuss', 'Scooby-Doo'];

    return (
        <article className={style.card}>
            <h2>{questionText}</h2>
            <p>{category}</p>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </article>
    );
}

export default Question;
```

## O que são as rotas

No **React.js**, as **rotas** são usadas para navegar entre diferentes páginas ou componentes na aplicação. Usaremos a biblioteca `react-router-dom` para configurar um sistema de navegação entre nossas páginas **Home** e **About**.

### Criando as páginas

Vamos agora criar as páginas **Home.jsx** e **About.jsx** dentro da pasta `pages`.

### Passo a passo

1. **Crie o arquivo `Home.jsx`:**

No **VS Code**, dentro da pasta `pages`, crie o arquivo `Home.jsx`. Esse componente será responsável por exibir uma lista de perguntas trazidas de uma API externa.

```jsx
import Question from '../components/Question';
import style from './Home.module.css';

function Home() {
    return (
        <div className="container">
            <h1>Home</h1>
            <div className={style.container_cards}>
                <Question />
                <Question />
                <Question />
            </div>
        </div>
    );
}

export default Home;
```

2. **Crie o arquivo `About.jsx`:**

Dentro da pasta `pages`, crie o arquivo `About.jsx`. Esse componente será responsável por exibir informações sobre a WebTech e seu propósito.

```jsx
import style from './About.module.css';

function About() {
    return (
        <>
            <div className={`container ${style.section}`}>
                <h1>Sobre:</h1>
                <p>
                    A WebTech é um projeto de extensão da PUC Minas que tem como objetivo gerar
                    espaço de trabalho para que alunos e professores criem juntos aplicações,
                    ferramentas e conteúdo para interessados em criar soluções e produtos digitais.
                </p>
            </div>

            <div className={`container ${style.section}`}>
                <h1>Propósito:</h1>
                <p>
                    O propósito da WebTech é promover a troca de conhecimento e experiência entre
                    alunos e professores, para que juntos possam criar soluções inovadoras e
                    tecnológicas para a sociedade.
                </p>
            </div>
        </>
    );
}

export default About;
```

## Criando as rotas

Agora que criamos as páginas **Home** e **About**, vamos configurar as rotas no arquivo principal `App.jsx`.

### Passo a passo

1. **Instale o `react-router-dom`:**

Execute o comando abaixo no terminal para instalar a biblioteca react-router-dom:

```bash
npm install react-router-dom
```

2. **Configure o arquivo `App.jsx`:**

Abra o arquivo `App.jsx` e configure as rotas para as páginas **Home** e **About**.

```jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

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

3. **Testando o sistema de rotas:**

Após configurar as rotas, execute o comando abaixo para iniciar a aplicação e testar o sistema de navegação:

```bash
npm run dev
```

Aqui, criamos um sistema de rotas simples com duas páginas: uma para **Home** e outra para **About**.

## O que são props

**Props** são propriedades passadas para um componente, permitindo que ele seja dinâmico e reutilizável. Vamos aplicar isso ao componente `Question` para torná-lo mais flexível e dinâmico, permitindo que diferentes perguntas, categorias e opções sejam passadas para ele.

```jsx
import style from './Question.module.css';

function Question({ category, question, options }) {
    return (
        <article className={style.card}>
            <h2>{question}</h2>
            <p>{category}</p>

            <ul>
                {options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </article>
    );
}

export default Question;
```

Agora, o componente `Question` pode receber props para `category`, `question`, e `options`, o que o torna mais flexível para diferentes perguntas e categorias.

## O que são os estados

**Estados** permitem que o componente gerencie dados internos e atualize seu comportamento dinamicamente. Vamos adicionar um estado ao componente `Question` para permitir a seleção de uma opção, simulando um quiz interativo.

```jsx
import { useState } from 'react';
import style from './Question.module.css';

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
                                    : ''
                                : ''
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

Agora, os dados do componente `Question` são alterados dinamicamente com base nas interações do usuário e no estado do componente.

### Integrando a API

Uma API (Interface de Programação de Aplicações) é um conjunto de regras e protocolos que permite que diferentes sistemas se comuniquem. Neste caso, vamos integrar uma API que fornece perguntas dinâmicas para o nosso aplicativo. Essa integração permitirá que os dados das perguntas sejam carregados em tempo real, tornando nossa aplicação mais interativa e atualizada, em vez de depender de dados estáticos codificados manualmente.

1. **Abrir o arquivo `Home.jsx`**

2. **Apagar todo o conteúdo presente**

3. **Inserir o seguinte código:**

```jsx
import Question from '../components/Question';
import { useEffect, useState } from 'react';
import style from './Home.module.css';

function Home() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=12&type=multiple')
            .then((response) => response.json())
            .then((data) => {
                setQuestions(data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.log('Erro ao buscar dados', error);
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

Esperamos que este workshop tenha ajudado você a entender melhor o React.js e o Next.js. Não se esqueça de praticar o que aprendeu e, caso precise, sinta-se à vontade para perguntar aos instrutores para esclarecer suas dúvidas.
