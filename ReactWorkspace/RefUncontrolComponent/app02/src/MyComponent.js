import React, {Component} from "react"
import MyInput from "./MyInput";
class MyComponent extends Component{
    constructor(props){
        super(props);
        this.comporef = React.createRef();
    }
    handleSubmit(SynbaseEventObj){
        this.comporef.current.giveFocus();
    }
    render(){
        return <div>
            <MyInput ref ={this.comporef}/>
            <button onClick={this.handleSubmit.bind(this)}>submit</button>
        </div>
    }
}
export default MyComponent;
  