import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useTotalPoints from '../useTotalPoints'; // Import the useTotalPoints hook

// returns the functionality of dragging and dropping the normal, extreme and exceptional data to 
// the correct definition
function App() {
  const [correctMatches, setCorrectMatches] = useState([]);
  const { addTestPoints } = useTotalPoints(); // Use object destructuring to get addTestPoints
  const handleDragStart = (event, item) => {
    // Set the data being dragged
    event.dataTransfer.setData("text/plain", item);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, targetWord, targetDefinition) => {
    event.preventDefault();
    // Retrieve the dragged data
    const droppedItem = event.dataTransfer.getData("text/plain");
    // Check if the dropped item matches the corresponding target word
    if (droppedItem === targetWord) {
      // Handle correct drop
      setCorrectMatches([...correctMatches, { word: targetWord, definition: targetDefinition }]);
      addTestPoints(5);
    }
  };

  const isMatched = (word, definition) => {
    return correctMatches.some(pair => pair.word === word && pair.definition === definition);
  };

  // returns the word connection exercise with instructions
  return (
    <div className="App">
      <div className="container mt-5">
        <h1>Match the definition to the correct Word</h1>
        <p>Click and drag the words to the correct definition, they'll go green when they're correct!</p>
        <div className="row">
          <div className="col mx-2">
            <h2>Words</h2>
            <div className="words">
              <div className={"word" + (isMatched('Definition 1', 'Data that you would expect to work or be accepted and that lies within the range.') ? ' correct-match' : '')} draggable="true" onDragStart={(e) => handleDragStart(e, 'Definition 1')}>Normal</div>
              <div className={"word" + (isMatched('Definition 2', 'Data at the lower and upper limits of the range.') ? ' correct-match' : '')} draggable="true" onDragStart={(e) => handleDragStart(e, 'Definition 2')}>Extreme</div>
              <div className={"word" + (isMatched('Definition 3', 'Data that should not be accepted by the program.') ? ' correct-match' : '')} draggable="true" onDragStart={(e) => handleDragStart(e, 'Definition 3')}>Exceptional</div>
            </div>
          </div>
          <div className="col mx-2">
            <h2>Definitions</h2>
            <div className="definitions">
            <div className={"definition" + (isMatched('Definition 3', 'Data that should not be accepted by the program.') ? ' correct-match' : '')} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'Definition 3', 'Data that should not be accepted by the program.')}>Data that should not be accepted by the program.</div>
              <div className={"definition" + (isMatched('Definition 1', 'Data that you would expect to work or be accepted and that lies within the range.') ? ' correct-match' : '')} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'Definition 1', 'Data that you would expect to work or be accepted and that lies within the range.')}>Data that you would expect to work or be accepted and that lies within the range.</div>
              <div className={"definition" + (isMatched('Definition 2', 'Data at the lower and upper limits of the range.') ? ' correct-match' : '')} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'Definition 2', 'Data at the lower and upper limits of the range.')}>Data at the lower and upper limits of the range.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
