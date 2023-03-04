import Product from "./Product";
import "./App.css"
import { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className = "App">
       <Product list = {["idli","Mask","Holi Color","Nokia 3310","Banana Chips","Wireless radio"]}/>
      </div>
    );
  }
}
export default App;