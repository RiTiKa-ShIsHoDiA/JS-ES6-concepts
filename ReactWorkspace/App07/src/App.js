import Clock from "./Clock";
import { Component } from "react";


class App extends Component {
  render() {
    return (
      <div className="w-100 border-4 rounded-lg bg-slate-200 w-64 m-8 p-4 h-64">
        <h1 className="font-sans font-bold font-extrabold text-3xl pb-2 text-center">Card Details </h1>
        <Clock/>
      </div>
    );
  }
}

export default App;
