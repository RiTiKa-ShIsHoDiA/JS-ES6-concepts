import MyClicker from "./MyClicker";
import { Component } from "react";


class App extends Component {
  render() {
    return (
      <div className="w-100 border-4 rounded-lg  w-64 m-8 p-4 h-64 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <MyClicker/>
      </div>
    );
  }
}
export default App;