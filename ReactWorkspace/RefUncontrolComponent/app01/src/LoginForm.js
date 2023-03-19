import React,{Component} from "react"
class LoginForm extends Component{
    constructor(props){
        super(props);
        this.usernameref = React.createRef();
        this.emailref = React.createRef();
        this.passwordref = React.createRef();

    }
    handleSubmit(SynbaseEventObj){
        SynbaseEventObj.preventDefault();
      alert(`${this.usernameref.current.value} ${this.emailref.current.value} ${this.passwordref.current.value} `)
        this.usernameref.current.value = "";
        this.emailref.current.value = "";
        this.passwordref.current.value =  "";
    }
    render(){
      return  (<form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label htmlFor="username">username</label>
                <input type = "text" id = "username" ref = {this.usernameref}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type = "email" id = "email" ref = {this.emailref}/>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type = "password" id = "password" ref = {this.passwordref}/>
            </div>
            <button>Submit</button>
       </form>)
    }
}
export default LoginForm;