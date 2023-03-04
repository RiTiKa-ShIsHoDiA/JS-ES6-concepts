import Product1 from "./Product1";
import Product2 from "./Product2";
import { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Product1 />
        <Product2 productName = "redmi-smart-watch" price = {20000}/>
      </div>
    );
  }
}

export default App;
