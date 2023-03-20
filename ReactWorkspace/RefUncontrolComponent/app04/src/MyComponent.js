import {Component} from "react"
class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            textValue:"your views"
        }
    }
    handleChange(synObj){
        this.setState({textValue:synObj.target.value})
    }
    handleSubmit(synBaseObj){
        synBaseObj.preventDefault();
        console.log(this.state.textValue);
    }
    render(){
        return <form onSubmit={this.handleSubmit.bind(this)}>
             <span>Reviews</span>
             <textarea value ={this.state.textValue}  onChange={this.handleChange.bind(this)}></textarea>
             <button>send</button>
        </form>
    }
}
export default MyComponent;