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
    this.timerID = setInterval(() => this.tick(), 1000); // Update every second
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const { binaryValues } = this.state;
    const newBinaryValues = [...binaryValues];

    // Increment the binary representation
    for (let i = newBinaryValues.length - 1; i >= 0; i--) {
      if (newBinaryValues[i] === 0) {
        newBinaryValues[i] = 1;
        break;
      } else {
        newBinaryValues[i] = 0;
      }
    }

    // Calculate the decimal number
    const decimalNumber = parseInt(newBinaryValues.join(''), 2);

    this.setState({
      binaryValues: newBinaryValues,
      decimalNumber
    });
  }

  render() {
    const { binaryValues, decimalNumber } = this.state;

    // Convert the decimal number to an array of digits
    const decimalDigits = decimalNumber.toString().split('').map(Number);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col p-3 mx-2">
            <h3>Binary Counter!</h3>
            <p>Watch as the binary digits change to see how integers are represented!</p>
            <div className="row">
              <div className="col p-3 mx-2" style={{ fontSize: "16pt" }}>
                <div style={{ display: 'flex' }}>
                  {/* Render binary digits */}
                  {binaryValues.map((value, index) => (
                    <motion.span key={index} className="numberFlip" animate={{ rotateX: value === 0 ? 180 : 0 }}>
                      {value === 0 ? '0' : '1'}
                    </motion.span>
                  ))}
                  <span className="numberFlip">=</span>
                  {/* Render decimal digits */}
                  {decimalDigits.map((digit, index) => (
                    <motion.span key={`decimal-${index}`} className="numberFlip" animate={{ rotateX: digit % 2 === 0 ? 180 : 0 }}>
                      {digit}
                    </motion.span>
                  ))}
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
