import React, { useState } from "react";
import AnswerView from "./AnswerView";
import "./quiz.css"
export default function Quiz() {
  const questions = [
    {
      question: "Thủ đô của Việt Nam là?",
      answers: [
        { content: "Thành phố Hồ Chí Minh", correct: false },
        { content: "Hải Phòng", correct: false },
        { content: "Hà Nội", correct: true },
        { content: "Đà Nẵng", correct: false }
      ]
    },
    {
      question: "Việt Nam có bao nhiêu tỉnh thành?",
      answers: [
        { content: "60", correct: false },
        { content: "61", correct: false },
        { content: "62", correct: false },
        { content: "63", correct: true }
      ]
    },
    {
      question: "Năm 2022 dân số Việt Nam khoảng bao nhiêu người?",
      answers: [
        { content: "Khoảng 99 triệu người", correct: true },
        { content: "Khoảng 102 triệu người", correct: false },
        { content: "Khoảng 105 triệu người", correct: false },
        { content: "Khoảng 108 triệu người", correct: false }
      ]
    }
  ];

  const [i, setI] = useState(0);
  const [countCorrect, setCountCorrect] = useState(0);

  const handlerClick = function (correct) {
    // neu dung thi set dap an len 1
    if (correct) setCountCorrect(countCorrect + 1);
    // chuyen cau tiep theo
    setI(i + 1);
  };

  return (
    <div className="app">
      {i >= questions.length && (
        <div className="score-section">
          You scored {countCorrect} out of {questions.length}
        </div>
      )}

      {i < questions.length && (
        <React.Fragment>
          <div className="question-section">
            <div className="question-count">
              <span>Question {i + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[i].question}</div>
          </div>
          <AnswerView
            answers={questions[i].answers}
            handlerClick={handlerClick}
          />
        </React.Fragment>
      )}
    </div>
  );
}
