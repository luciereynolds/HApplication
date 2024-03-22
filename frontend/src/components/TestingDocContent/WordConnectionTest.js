import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [, setDraggedItem] = useState(null);

  const handleDragStart = (event, item) => {
    setDraggedItem(item);
    // Set the data being dragged
    event.dataTransfer.setData("text/plain", item);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, targetWord) => {
    event.preventDefault();
    // Retrieve the dragged data
    const droppedItem = event.dataTransfer.getData("text/plain");
    // Check if the dropped item matches the corresponding target word
    if (droppedItem === targetWord) {
      // Handle correct drop
      alert('Correct!');
    } else {
      // Handle incorrect drop
      alert('Incorrect!');
    }
    setDraggedItem(null);
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <h1>Match the definition to the correct Word</h1>
        <div className="row">
          <div className="col mx-2">
            <h2>Words</h2>
            <div className="words">
              <div className="word" draggable="true" onDragStart={(e) => handleDragStart(e, 'Definition 1')}>Normal</div>
              <div className="word" draggable="true" onDragStart={(e) => handleDragStart(e, 'Definition 2')}>Extreme</div>
              <div className="word" draggable="true" onDragStart={(e) => handleDragStart(e, 'Definition 3')}>Exceptional</div>
            </div>
          </div>
          <div className="col mx-2">
            <h2>Definitions</h2>
            <div className="definitions">
              <div className="definition" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'Definition 2')}>Data at the lower and upper limits of the range.</div>
              <div className="definition" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'Definition 3')}>Data that should not be accepted by the program.</div>
              <div className="definition" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'Definition 1')}>Data that you would expect to work or be accepted and that lies within the range.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
