import { Component } from "react";
class MyClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 1,
    };
    this.generateRandomNumber = this.generateRandomNumber.bind(this);
  }
  generateRandomNumber(syntheticObj) {
    //due to bind ab is function ka this refer krega this
    this.setState({
      randomNumber: Math.floor(Math.random() * 10 + 1),
    });
  }
  render() {
    return (
      <div>
        <h1>Generate Number is {this.state.randomNumber}</h1>
        {this.state.randomNumber === 5 ? 
          <p>You Win!</p>
         : 
          <button onClick={this.generateRandomNumber}>
            Generate random Number
          </button>
        }
      </div>
    );
  }
}
export default MyClicker;
