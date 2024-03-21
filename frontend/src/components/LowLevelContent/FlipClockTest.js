import React from 'react';

class FlipCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newNum: new Date().getSeconds() === 0 ? 60 : new Date().getSeconds(),
      oldNum: new Date().getSeconds() - 1 === -1 ? 59 : new Date().getSeconds() - 1,
      change: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const newNum = new Date().getSeconds() % 2;
    if (this.state.newNum !== newNum) {
      const oldNum = newNum === 0 ? 1 : 0;
      const change = !this.state.change;
      this.setState({
        newNum,
        oldNum,
        change
      });
    }
}



  render() {
    const { newNum, oldNum, change } = this.state;
    const animation1 = change ? "fold" : "unfold";
    const animation2 = !change ? "fold" : "unfold";
    const number1 = change ? oldNum : newNum;
    const number2 = !change ? oldNum : newNum;

    return (
      <div className="col p-3 mx-2" style={{textAlign: "center"}}>
        <h3>Binary Counter!</h3>
        <p>Watch as the binary digits change to see how integers are represented!</p>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="flipCounter">
                <div className="upperCard">
                  <span>{newNum}</span>
                </div>
                <div className="lowerCard">
                  <span>{oldNum}</span>
                </div>
                <div className={`flipCard first ${animation1}`}>
                  <span>{number1}</span>
                </div>
                <div className={`flipCard second ${animation2}`}>
                  <span>{number2}</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="flipCounter">
                <div className="upperCard">
                  <span>{newNum}</span>
                </div>
                <div className="lowerCard">
                  <span>{oldNum}</span>
                </div>
                <div className={`flipCard first ${animation1}`}>
                  <span>{number1}</span>
                </div>
                <div className={`flipCard second ${animation2}`}>
                  <span>{number2}</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="flipCounter">
                <div className="upperCard">
                  <span>{newNum}</span>
                </div>
                <div className="lowerCard">
                  <span>{oldNum}</span>
                </div>
                <div className={`flipCard first ${animation1}`}>
                  <span>{number1}</span>
                </div>
                <div className={`flipCard second ${animation2}`}>
                  <span>{number2}</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="flipCounter">
                <div className="upperCard">
                  <span>{newNum}</span>
                </div>
                <div className="lowerCard">
                  <span>{oldNum}</span>
                </div>
                <div className={`flipCard first ${animation1}`}>
                  <span>{number1}</span>
                </div>
                <div className={`flipCard second ${animation2}`}>
                  <span>{number2}</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="flipCounter">
                <div className="upperCard">
                  <span>{newNum}</span>
                </div>
                <div className="lowerCard">
                  <span>{oldNum}</span>
                </div>
                <div className={`flipCard first ${animation1}`}>
                  <span>{number1}</span>
                </div>
                <div className={`flipCard second ${animation2}`}>
                  <span>{number2}</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="flipCounter">
                <div className="upperCard">
                  <span>{newNum}</span>
                </div>
                <div className="lowerCard">
                  <span>{oldNum}</span>
                </div>
                <div className={`flipCard first ${animation1}`}>
                  <span>{number1}</span>
                </div>
                <div className={`flipCard second ${animation2}`}>
                  <span>{number2}</span>
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
