class App extends React.Component{
  render(){
    return <Wish name = "ritika" surName  />
  }
}

let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);
root.render(<App/>)