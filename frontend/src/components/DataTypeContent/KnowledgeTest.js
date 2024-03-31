import React, { useState } from 'react';
import useTotalPoints from '../useTotalPoints'; // Import the useTotalPoints hook

const KnowledgeTest = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { addTestPoints } = useTotalPoints(); // Use object destructuring to get addTestPoints

  const handleChange = (question, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: answer
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const allCorrect = Object.keys(answers).every(question => isCorrect(question));
    if (allCorrect) {
      // Only add 25 points if all answers are correct
      addTestPoints(25);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const isCorrect = (question) => {
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
              <h5>{question}</h5>
              <p><strong>You said:</strong> {answers[question]}</p>
              <p>{isCorrect(question) ? 'Correct' : 'Incorrect'}</p>
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

export default KnowledgeTest;
