import { Component } from "react";
class Student extends Component {
  
  handleClick(Sname, Sroll, synBaseEventObj) {
    console.log("student name:" + Sname);
    console.log("roll number:" + Sroll);
  }

  render() {
    return (
      <div>
        <button
          onClick={(synBaseEventObj) => {
            this.handleClick(this.props.name, this.props.roll, synBaseEventObj); //passsing arrow fucntion
          }}
        >
          click me
        </button>
      </div>
    );
  }
}
export default Student;
