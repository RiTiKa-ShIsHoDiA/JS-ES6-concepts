
//task :- 01 realted from component
function MyTask(){
    let heading =  React.createElement("h1",null,"Our Teams");
    let list = React.createElement("ul",null,[React.createElement("li",null,"Ritika Shishodia"),React.createElement("li",null,"Gunjan Goel"),React.createElement("li",null,"Narendra modi")]);
    let div = React.createElement("div",null,[heading,list]);
    return div;
}
ReactDOM.render(React.createElement(MyTask),document.querySelector("div"));