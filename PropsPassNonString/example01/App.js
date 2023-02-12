
class App extends React.Component{
    render(){
        return  (<Student
             name = "Ritika Shishodia"
             Age = {21}
             Subjects = {["c++","c","java",".net"]}
             Address = {{
                 city :"Ghaziabad",
                 state : "Uttar pradesh"
             }
             }
             isPass = {true}
             />);    
   }   

}

let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);
root.render(<App/>);