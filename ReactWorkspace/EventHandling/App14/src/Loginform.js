import {Component} from  "react"
class Loginform extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : "",
        }
    }
    handleClick(SynBaseEventObj){
        this.setState({
            username : SynBaseEventObj.target.value
        });
        console.log(SynBaseEventObj.target.value);
    }
    handle(SynBaseEventObj){
        SynBaseEventObj.preventDefault();
        alert(this.state.username);
        this.setState({username:""});   
    }
    render(){
        return (
            <form className = "Loginform" onSubmit = {this.handle.bind(this)}>
              <h1>Login Form</h1>
              <label >Username</label><br/>
              <input type = "text" value = {this.state.username} name = "ussername" onChange = {this.handleClick.bind(this)}/>
              <button>Submit</button>
            </form>
        );
    }
} 
export default Loginform;