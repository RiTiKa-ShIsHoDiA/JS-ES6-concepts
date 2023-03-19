import React,{ Component } from "react";
class MyInput extends Component{
    constructor(props){
        super(props);
        this.inputref = React.createRef();
    }
    isValue(){
       if(this.inputref.current.value === ""){
          alert("this textbox is empty");
           return false;
       }
       else 
           return true;    
    }
    selectInput(){
       this.isValue() && this.inputref.current.select();
    }
    render(){
        return <div>
            <input type = "text" ref = {this.inputref}/>
        </div>
    }
}
export default MyInput;