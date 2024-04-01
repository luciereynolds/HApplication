import React, { useState } from 'react';
import useTotalPoints from '../useTotalPoints';

// Knowledge Test is used in the Data Types Lesson and asks the user 3 questions:
// Q1. When you store data in a program, it is stored in a what?" A1. Variable
// Q2. Whole numbers are stored using what data type?" A2. Integer
// Q3. Text is stored using what data type?" A3. String
// The user completes this via a form and submits the answers. If correct the question will turn green 
// and 25 points will be added to their score, if incorrect the question will turn amber.
// The user also has the ability to retry the test if they wish.

const KnowledgeTest = () => {

  // initialising variables to be used
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { addTestPoints } = useTotalPoints(); 

  // sets the answers the user selected
  const handleChange = (question, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: answer
    }));
  };

  // handles the user submitting answers, sets the setSubmitted state to true.
  const handleSubmit = () => {
    setSubmitted(true);
    // checks the answers submitted are correct.
    const allCorrect = Object.keys(answers).every(question => isCorrect(question));
    if (allCorrect) {
      // Only add 25 points if all answers are correct
      addTestPoints(25);
    }
  };

  // handles the user deciding to retry the test.
  const handleRetry = () => {
    // clears any answers they've given and sets the submitted state back to false.
    setAnswers({});
    setSubmitted(false);
  };

  // provides the correct answers to the questions.
  const isCorrect = (question) => {
    const correctAnswers = {
      "1. When you store data in a program, it is stored in a what?": "Variable",
      "2. Whole numbers are stored using what data type?": "Integer",
      "3. Text is stored using what data type?": "String"
    };
    return answers[question] === correctAnswers[question];
  };

  // renders how the questions appear on the page and the options for answers
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

  // what is actually returned to the page. if the state of submission is true, the questions appear with the
  // user's answers and either a green or amber background.
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
          {/* Shows the questions normally with the submit button before the user submits */}
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
