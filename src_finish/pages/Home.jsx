import Question from "../components/Question";
import { useEffect, useState } from "react";
import style from "./Home.module.css"

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
