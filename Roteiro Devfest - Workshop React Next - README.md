
## Apresentação: o que é o React.js e o que Next.js

React.js e Next.js são respectivamente uma biblioteca (*não* estabelece regras estabelecidas) e frameworks (*estabelece* regras que devem ser seguidas) de Javascript que promoveram uma evolução significativa em abordagens tradicionais de desenvolvimento front-end.


## História do Desenvolvimento Front-End

- **O início:** durante a década de 90s foi estabelecido o início do desenvolvimento com o lançamento dos três pilares do desenvolvimento: HTML(91), JS(95) e CSS(96).
- **A Era do Frameworks:** com o desenvolvimento web sendo amplamente utilizado surgiram ferramentas facilitadoras para o desenvolvimento, como a exemplo o jQuery e frameworks MVC como Angular.js
- **Evolução das SPAs:** com a contínua evolução da TI, surgiu a tecnologia SPA (Single Page Applications) e com junto dela o React.js, criado pelo Facebook em 2013
- **React Escálavel:** pretendendo evoluir ainda mais no desenvolvimento, nasceu o Next.js, com o conceito de renderização híbrida e roteamento facilitado.


## Vantagens

Tanto o React quanto o Next oferecem vantagens significativas, tanto para o desenvolvedor quanto para o usuário. Sendo algumas delas:
- Componentização ou "partes de tela"
- Manipulação facilitada do DOM
- Roteamento sem recarga
- Controle dos tipos de renderização de tela



## Setup

Diferentemente de uma aplicação básica feita nos três tripés do desenvolvimento web, para criar um projeto em React é necessário ir além da criação dos arquivos e sim instalar um série de pacotes e ferramentas que irão auxiliar nesse desenvolvimento.
Assim, para realizar essa instalação é necessário ter duas ferramentas que são p `node` e `npm`. O primeiro permite rodar seu código Javascript fora no navegamento padrão, realizando funções famosas como "run dev", "start" ou "build", já o segundo gerencia os pacotes que vem junto ao `node`, ele instala e gerencia pacotes.
Por padrão é utilizado o comando `npx create-react-app my-app`, entretanto com as atualizações constantes do desenvolvimento outras alternativas surgiram e proporcionaram um melhora, sendo uma delas o `Vite`, na qual iremos utilizar hoje.
O `Vite`permite uma criação mais rápida e moderna sendo a que permite o tempo de início dentre todas as outras ferramentas similares no mercado. Ela necessita também do `node` e `npm` instalados.
No caso, iremos utilizar um projeto "setado" previamente, então siga esses passos por favor para acessarmos o projeto.

## SPA - Single Page Applications

As SPA é uma ferramenta que surgiu em 2013, por meio do Facebook, e seu intuito é gerar o carregamento de somente uma tela HTML, sendo todo resto alterações decorrentes da interação com o usuário, evitando portanto o carregamento da página a cada momento.

## Foto - Arquivos do React

Para aprender sobre React ou Next, é essencial entender a organização de suas pastas e arquivos, para isso:
- pasta -> node_modules: apresenta todos os pacotes, bibliotecas e setups padrão da nossa aplicação. É uma pasta com muitos dados e arquivos, portando, muito grande e pesada, recomenda-se excluí-la e instalar via `npm -i` toda vez que for enviada para outra pessoa.
- pasta -> public: armazena todas as imagens, facilita o acesso e direcionamento para os arquivos que buscamos
- pasta -> public: armazena todos os códigos da nossa aplicação
- arquivo -> main.js/index.js: é a nossa página na qual chama a nossa SPA ou página mãe. A nossa página mãe na prática é "index.html", e nela é chamada o nosso main.js/index.js, que permite darmos início no nosso projeto.
- arquivo -> App.js: página que dá início a nossa aplicação, sendo responsável por estabelecer padrões ou layouts, rotas e controlar demais situações que podem ser criadas em nosso projeto.
- arquivo -> package.json: armazena todas as nossa instalações, versões e bibliotecas. Seria uma assinatura da nossa aplicação para que ela possa ser utilizada por outras pessoas.

## Componentização

A componentização se trata de um conceito do React que seria nada mais do que pequenas partes de código, com o intuito de criar um grande aplicação. Ou seja, `dividir para conquistar`. Mas o que são os componentes?
Como falado anteriormente, pequenas partes de código que retornam uma interface de usuário (UI).

## Fotos 10 11 e 12

Para melhor compreensão, iremos criar o nosso primeiro componente que o Navbar, mas antes é necessário que entendam a compreensão de como funciona um componente.
Em um código HTML, temos tags e valores que compõem algo, nesse caso uma Navbar. O React, não se difere em nenhum modo, é somente uma nova forma de demonstrar esse mesmo HTML. 
Em React, não temos o uso de HTML e sim do JSX que é uma extensão de sintaxe do Javascript, permitindo a escrever códigos semelhantes/identicos a HTML. Por exemplo, se analisarmos bem nesse caso temos uma função que retorna algo, que nesse caso é o nosso HTML.

## Porque devemos componentizar?

Algumas das vantagens apresentadas na componentização são:
- Reutilização: crie uma vez, use em qualquer lugar
- Manutenção: altere informações somente em um local, evitando trabalhos repetitivos
- Desempenho Aprimorado: recarregue somente "partes de código"/componentes necessários

## Parte prática 01: criando Navbar

## **Rotas**

Uma das maiores vantagens apresentadas pelo React é a criação de suas rotas, na qual permite uma navegação facilitada, transferindo informações e padronizando facilmente as rotas.
A biblioteca utilizada para essas rotas é a `react-router-dom` que não vem instalada por padrão no React e deve ser instalada por meio do `npm install react-router-dom`, essa instalação ficará verificada tanto no `package.json` quanto no `node_modules`.

## Componentes do `react-router-dom`

- **BrowserRouter**: componente principal que controla a rota com a aplicação. Ela verifica qual valor está na URL e valida qual componente deve ser apresentado.
- **Route**: define uma rota com o seu componente em específico, seu valor `path` determina como sua rota se chamará e `Component` qual componente será apresentado quando a rota obter esse valor.
- **Switch**: usado para controle de rotas como rotas de erro (Switch Case), desse modo realiza uma validação de qual rota está válida, existente ou não e renderiza a correta. Muito útil para aplicações maiores.
- **Link**: substituto do ancor ele possibilita a troca de páginas de sem carregamento de página, não utiliza o `href` nesse caso, o uso será o do `to`.

## Parte prática 02: criando as rotas

## Recapitulando: 

- **O que é React:** biblioteca Javascript que permite a componentização
- **Componentes:** simplificação de partes de uma tela eles são reutilizáveis
- **Rotas:** facilitam o controle de URL's e páginas

## Entendendo Next.js:

O setup do Next se asemelha muito ao de React, já que, justamente, se trata de um framework para React. Desse modo, é necessário que tenha instalado o `node` e `npm`em sua máquina para que a assim posteriormente, possa ser realizado o comando `npx create-next-app@latest name_project`.
Sobre Next.js, não iremos construir nossa aplicação, no entanto, iremos ressaltar a organização das pastas para vocês. 
- pastas -> app: nesse caso, a pasta app seria a nossa pasta src, nela estarão presentes todos os códigos, e componentes que iremos criar.
- arquivo -> layout.js: seria similar a nossa página `App.js` no React, contendo informações padronizadas como Navbar, Footer, cores ou textos. Diferentemente de React, nesse arquivo não terão as rotas da nossa aplicação, mas isso iremos explicar logo.
- arquivo -> page.js: é a nossa primeira página da aplicação, como uma página Home. Seu nome não pode ser alterado devido a padrões exigidos pela arquitetura do framework.
- pasta -> public: como em React, contém todas imagens, ícones e fontes. Permite que o desenvolvedor tenha fácil acesso a esses dados no momento da inserção.
- pasta -> node_modules: armazena todos os pacotes, bibliotecas e possíveis instalações no nosso projeto. 
- arquivo -> next.config.js: principal arquivo de personalização, permite personalizar e estender o comportamento da aplicação. Questões como, APIs ou fontes devem ser referenciadas nesse local.
- arquivo -> jsconfig.json/tsconfig.js: configuram questões como Typescript ou Javascript permitindo recursos como paths e aliases.
- arquivo -> eslint.config.js: permite encontrar o erro no código Javascript e corrigir problemas.

## Principais diferenças entre React.js e Next.js

Podemos dizer que Next.js é basicamente React.js entretanto com melhorias muito positivas para o desenvolvimento e experiência do usuário. Sendo de todas, três muito importantes, que serão detalhadas com o decorrer do curso.
- Renderizações: são formas de gerar a página.
- Otimizações: são melhorias em questões existentes aperfeiçoando seu desempenho.
- Roteamento: é realizado de uma maneira bem diferente do usual, por meio de arquivos.

## Rotas em Next.js:

Diferente do React, em Next não é necessário realizar uma configuração em código de como essas rotas irão funcionar, sendo isso realizado pela própria aplicação por meio de arquivos e pastas. A questão das rotas é o que mais destacam na arquitetura obrigatória do Next, sendo essencial obedecer tais padrões para obter um bom resultado. Para isso temos algumas caracterizações de rotas, sendo elas:
- Simples (/about/page.js): a pasta será o nome que a rota tera, ou seja, nesse caso a URL terá o nome de domínio.com/about e a página que será mostrada será a que está dentro dessa pasta. Vale lembrar que não é todo arquivo presente nessa pasta que virá o código da nossa pasta, somente aquele que possui o nome de "page.js", sendo o padrão exigido para as rotas.
- Aninhada (/about/info/page.js): nesse caso estamos estendendo o tamanho e acesso da nossa rota, aninhando mas pastas e arquivos.
- Aninhada dinâmica: todo valor entre colchetes representa um valor que é variável de acordo com a mostragem de informações. Por exemplo, digamos que temos uma API que puxa os valores de um banco sobre categorias, e essas categorias apresentam muitos nome e variações, sendo necessário alterar a todo momento que for recuperado um valor.
	- (/[category]/page.js): [category] pode adotar diversos nomes e será o nome da nossa URL, já page.js é a página que será mostrada.
	- (/category/[id].js): isso pode acontecer tanto com pastas quanto com arquivos sendo variável de acordo a necessidade de recuperação de dados.

## O que são as props: 

As props são basicamente argumentos passados para as nossas funções em React, possibilitando uma alteração mais dinâmica e personalização desse componente.
Segue a lógica de uma função padrão, como em linguagens comuns como C, Java ou C++. Como o exemplo abaixo:

```java
float soma(int a, int b){
	return a + b;
}
```

```jsx
function Saudacao({name}){
	return <p>{name}</p>
}
```

## O que são os estados:

São um forma de armazenação de informações em componentes, nesse caso *estados* que sejam mudados quando for necessários. Permitindo que os componentes sejam:
- Interativos: ou seja, mudam de acordo com a iteração do usuário
- Reativos: possam alterar automaticamente ou de forma assíncrona

## Qual a diferença entre Estados e Hooks

Estados ou State é o objeto que será alterado, por exemplo de true para false, enquanto os Hooks são funções que facilitam a gestão de estados e controlam, por exemplo efeitos colaterais, melhorando a experiência do usuário da utilização da aplicação.

## Alguns tipos de Hooks

- useState: o padrão mais básico e utilizado em componentes. Armazena estados locais no componente, realizando alterações ao longo do ciclo de vida do componente.
- useEffect: controla efeitos colaterais, como chamadas redundantes ou sobrecargas. Muito utilizado em API ou interações severas no DOM.
- useContext: compartilha dados em componentes que não possuem interação direta, sendo importantes para questões como autenicação.

## Parte prática 03: criando o componente de questões
## Renderização no Next

Em Next temos o conceito de renderização híbrida, que é a possibilidade de escolha sobre qual método de gerar a página queremos. Suas vantagens são: 
- Rapidez: com a escolha do método de renderização correto teremos uma abertura mais rápida.
- Otimização de SEO: com conteúdos gerados previamente a aplicação estará no navegador com seus conteúdos disponíveis, possibilitando uma melhoria positiva no SEO.
- Experiência de Usuário: com a escolha correta da renderização o usuário tem uma melhor experiência, com sites que abrem mais rapidamente.

## Tipos de Renderização: 

Temos quatro tipos de renderização muito utilizadas em Next, sendo elas:
- **Client Side:** usado por padrão no React, as informações são construídas em tempo de build, ou seja, o site fica totalmente dependente do Javascript (Dashboard)
- **Server Side:** o HTML é gerado no servidor processando informações e fornecendo os conteúdos já renderizados, a cada nova requisição do usuário o servidor processa e gera o HTML dinamicamente (E-commerce)
- **Static Stite:** páginas geradas em tempo de build não sendo recarregadas até a próxima build (Landing Page)
- **Incremental Static Regeneration:** página a princípio gerada de forma estática mas com revalidações em tempo periódicos (Blog com notícias)


## Otimizações: 
- **Links:** funcionando de modo muito similar ao Link do React permite que troca de páginas ocorram sem a renderização completa da página, alterando somente o necessário.
- **Images:** carregam imagens de modo adequado para aplicação, evitando um site pesado e lento
- **Fontes:** uso de fontes facilitado, sem necessidade de instalações ou uso de CDN. 

## Parte prática 04: criando rotas e pagina Home
## Boas práticas
- **Organizações de pastas:** dar prioridade por separar suas pastas e componentes sempre por pastas pequenas e nomes intuitivos
- **Estados e Props**: para estados escolha sempre o Hook mais adequado para a situação, e dê prioridade em Props por utilizar o prop-types que seta tipos obrigatórios para essa propriedades (Inteiro, String, Boolean)
- **Estilização:** ao utilizar o CSS puro, adote uso de "module" que são formas de gerar um CSS específico para cada página ou componente, evitando questões como conflitos de classes.
- **Renderização**: sempre escolha a melhor prática de renderização de acordo com a sua realidade, isso facilitará e possibilitará uma melhor experiência para o seu usuário.
- **SEO:** preocupe com o seu SEO, adote sempre boas pŕaticas de renderização, tags intuitivas no seu HTML/JSX, meta tags, imagens renderizadas corretamente e entre outros.

## Novas tendências: 
- Renderização híbrida: a cada dia a escolha da renderização tem sido pautada em mais aplicações, sendo importante estar atualizado sobre isso.
- **Ferramentas de build:** escolha uma boa ferramenta de build que possibilite a criação do seu código minificado e rápido para o navegador.
- **Typescript:** sendo seu uso cada vez mais utilizado em aplicações, o Type permite um controle sobre como os dados estão sendo recebidos e controlados para serem enviados para o navegador.
- **Design System:** a utilização de uma padronização de componentes permite uma design mais aprimorado e uma experiência de usuário mais significativa, explore questões como bibliotecas de componentes como o Style Components.
- **Internacionalização:** pelo Next, temos a opção de realizar de forma mais prática aplicações que se adaptam a diversos idiomas, permitindo uma expansão da sua aplicação.
