import { Component } from "react";
import Ball from "./Ball";
class Lottery extends Component {
  static defaultProps = {
    title: "sab khelo, sab jeeto",
    numOfBalls: 6,
    maxRange: 50,
  };
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: Array.from({ length: this.props.numOfBalls }),
    };
  }
  handleClick() {
      let numarr = [];
    for(let itr = 0 ;  itr < this.state.randomNumber.length ; itr++){
        numarr.push(Math.floor(Math.random()*this.props.maxRange + 1));
    }
    this.setState({randomNumber : numarr});
  }
  render() {
    let ballsArr= this.state.randomNumber.map((val) => {
    return <Ball value = {val} />;
  });
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div>{ballsArr}</div>
        <button onClick={this.handleClick.bind(this)}>Generate Lottery</button>
      </div>
    );
  }
}
export default Lottery;
//ball vala example function s karna h 
