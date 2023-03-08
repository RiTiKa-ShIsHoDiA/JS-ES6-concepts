import Student from "./Student"
import { Component } from "react";


class App extends Component {
  render() {
    return (
      <div class = "App">
       <Student name = "ritika" roll = {40}/>
       <Student name = "sonia" roll = {41}/>
      </div>
    );
  }
}
export default App;