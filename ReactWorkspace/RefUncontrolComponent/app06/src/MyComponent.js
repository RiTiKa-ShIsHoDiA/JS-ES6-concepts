import {Component} from "react"
class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
           ischecked :0
        }

    }
    handleChange(synBaseObj){
        console.log(this.state.ischecked);
        this.setState({ischecked:!this.state.ischecked})
    }
    handleSubmit(synBaseObj){
       synBaseObj.preventDefault();
       console.log(this.state.ischecked);
    }
    render(){
        return <form onSubmit = {this.handleSubmit.bind(this)}> 
            <input type = "checkbox" value = "pizza" checked = {this.state.ischecked} onChange = {this.handleChange.bind(this)}/> pizza
        
        </form>
    }
}
export default MyComponent;