import React,{Component} from "react";
import MyInput from "./MyInput";
class MyComponent extends Component{
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
    }
    handleClick(SynbaseEventObj){
        this.componentRef.current.selectInput();
    }
    render(){
     return <div>
        <MyInput ref = {this.componentRef}/>
        <button onClick={this.handleClick.bind(this)}>submit</button>
     </div>
    }
}
export default MyComponent;