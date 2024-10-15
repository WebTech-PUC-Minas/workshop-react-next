import style from './About.module.css';

function About() {
  return (
    <>
      <div className={`container ${style.section}`}>
        <h1>Sobre:</h1>
        <p>
          A WebTech é um projeto de extensão da PUC Minas que tem como objetivo gerar espaço de
          trabalho para que alunos e professores criem juntos aplicações, ferramentas e conteúdo
          para interessados em criar soluções e produtos digitais.
        </p>
      </div>

      <div className={`container ${style.section}`}>
        <h1>Propósito:</h1>
        <p>
          O propósito da WebTech é promover a troca de conhecimento e experiência entre alunos e
          professores, para que juntos possam criar soluções inovadoras e tecnológicas para a
          sociedade.
        </p>
      </div>
    </>
  );
}

export default About;
