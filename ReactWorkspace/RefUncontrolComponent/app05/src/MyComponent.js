import {Component} from "react"
class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectValue : "g"
        }
    }
    handleChange(synBaseObj){
        this.setState({selectValue:synBaseObj.target.value})
    }
    handleSubmit(synBaseObj){
       synBaseObj.preventDefault();
       console.log(this.state.selectValue);
    }
    render(){
       return <form onSubmit={this.handleSubmit.bind(this)}>
           <label htmlFor="">favourite colors</label>
           <select value = {this.state.selectValue} onChange = {this.handleChange.bind(this)}>
              <option value= "r">red</option>
              <option value = "b" >blue</option>
              <option value = "g">green</option>
              <option value = "b">black</option>
           </select>
           <button>send</button>
       </form> 
    }
}
export default MyComponent;