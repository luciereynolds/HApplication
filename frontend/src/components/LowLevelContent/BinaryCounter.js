import React from 'react';
import { motion } from 'framer-motion';

class FlipCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binaryValues: [0, 0, 0, 0, 0, 0, 0, 0],
      decimalNumber: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000); // Ensures the counter updates every second
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const { binaryValues } = this.state;
    const newBinaryValues = [...binaryValues];

    // Increments the binary representation
    for (let i = newBinaryValues.length - 1; i >= 0; i--) {
      if (newBinaryValues[i] === 0) {
        newBinaryValues[i] = 1;
        break;
      } else {
        newBinaryValues[i] = 0;
      }
    }

    // Calculates the decimal number corrolating to the binary number displayed.
    const decimalNumber = parseInt(newBinaryValues.join(''), 2);

    this.setState({
      binaryValues: newBinaryValues,
      decimalNumber
    });
  }

  render() {
    const { binaryValues, decimalNumber } = this.state;

    // returns the page with the title and the binary counter incrementing as soon as it loads.
    // motion is utilised from framer motion to flip the numbers and animate them.
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col p-3 mx-2">
            <h3>Binary Counter!</h3>
            <p>Watch as the binary digits change to see how integers are represented!</p>
            <div className="row">
            <div className="col d-flex justify-content-center">
            <div style={{ display: 'flex' }}>
              {binaryValues.map((value, index) => (
                <motion.span key={index} className="numberFlip" animate={{ rotateX: value === 0 ? 180 : 0}}>
                  {value === 0 ? '0' : '1'}
                </motion.span>
              ))}
              <span className="numberFlipEqual">=</span>
              <motion.span key="decimal" className="numberFlipDecimal">
                {decimalNumber}
              </motion.span>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlipCounter;
