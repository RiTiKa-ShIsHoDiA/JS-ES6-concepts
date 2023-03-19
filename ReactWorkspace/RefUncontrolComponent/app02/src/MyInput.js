import React, {Component} from "react"
class MyInput extends Component{
    constructor(props){
        super(props);
        this.inputref = React.createRef();
    }
    giveFocus(){
     this.inputref.current.focus();
    }
    render(){
        return <div>
             <input type = "text" ref = {this.inputref}/>
        </div>
    }
}
export default MyInput;