import { Component } from "react";
class Student extends Component {
  constructor(props) {
    super(props);
    this.handleArgClick = this.handleArgClick.bind(this);
  }
  handleClick(Sname, Sroll, synBaseEventObj) {
    console.log("student name:" + Sname);
    console.log("roll number:" + Sroll);
  }
  handleArgClick(synBaseEventObj) {
    this.handleClick(this.props.name, this.props.roll, synBaseEventObj); //routing by a fucntion
  }
  render() {
    return (
      <div>
        <button onClick={this.handleArgClick}>click me </button>
      </div>
    );
  }
}
export default Student;
