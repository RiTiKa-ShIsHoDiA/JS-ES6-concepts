class App extends React.Component{ //react = object component = class // obj.class kaise ho skta h class internally === function m hoti h
    render(){
        return(
          <div>
            <Header/>
            <Comp/>
          </div>
        );
         
    }
}
//1 file must only contain 1 component (recommended)
let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);
root.render(<App/>);