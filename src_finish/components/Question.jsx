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
