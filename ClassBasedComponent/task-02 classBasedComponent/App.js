class App extends React.Component{
    render(){
      return ( <div>
           <Lottery/>
       </div>
      );
    }
}
let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);
root.render(<App/>);


