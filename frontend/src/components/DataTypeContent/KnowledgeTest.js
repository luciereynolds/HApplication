import React, { useState } from 'react';

const TestComponent = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (question, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: answer
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const isCorrect = (question, selectedAnswer) => {
    const correctAnswers = {
      "1. When you store data in a program, it is stored in a what?": "Variable",
      "2. Whole numbers are stored using what data type?": "Integer",
      "3. Text is stored using what data type?": "String"
    };
    return answers[question] === correctAnswers[question];
  };

  const renderQuestion = (question, options) => {
    return (
      <div key={question} className="question-container">
        <h5>{question}</h5>
        <div className="options">
          {options.map(option => (
            <label key={option} className="radio-label">
              <input
                type="radio"
                name={question}
                value={option}
                checked={answers[question] === option}
                onChange={() => handleChange(question, option)}
                disabled={submitted}
                className="radio-input"
              />
              <span className="custom-radio"></span>
              {option}
            </label>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {submitted ? (
        <div>
          {Object.keys(answers).map(question => (
            <div key={question} className={isCorrect(question) ? 'correct' : 'incorrect'}>
              <p>{question}</p>
              <p><strong>You said:</strong> {answers[question]}</p>
              <p>{isCorrect(question) ? 'Correct' : 'Incorrect'}</p>
              {isCorrect(question) ? (
                <p>
                  {answers[question] === "Variable"}
                  {answers[question] === "Integer"}
                  {answers[question] === "String"}
                </p>
              ) : null}
            </div>
          ))}
          <button className="retry-button" onClick={handleRetry}>Retry</button>
        </div>
      ) : (
        <div>
          {renderQuestion("1. When you store data in a program, it is stored in a what?", ["Loop","If statement","Variable"])}
          {renderQuestion("2. Whole numbers are stored using what data type?", ["String", "Integer", "Boolean"])}
          {renderQuestion("3. Text is stored using what data type?", ["String", "Integer", "Boolean"])}
          <button className="homepage-button" onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default TestComponent;
