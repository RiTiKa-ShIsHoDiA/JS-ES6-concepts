import { Component } from "react";
class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

 /*Bad code
  handleClickUsername(SynBaseEventObj) {
    this.setState({ username: SynBaseEventObj.target.value });
  }
  handleClickEmail(SynBaseEventObj) {
    this.setState({ email: SynBaseEventObj.target.value });
  }
  handleClickPassword(SynBaseEventObj) {
    this.setState({ password: SynBaseEventObj.target.value });
  }*/
  handleClick(SynBaseEventObj) {
    this.setState({ [SynBaseEventObj.target.name]: SynBaseEventObj.target.value });
  }

  handleSubmit(SynBaseEventObj) {
    SynBaseEventObj.preventDefault();
    alert(
      `Name :- ${this.state.username}
       Email :- ${this.state.email}
       Password :-${this.state.password}`
    );
    this.setState({username:"",email:"",password:""});
  }
  render() {
    return (
      <form className="Loginform" onSubmit={this.handleSubmit.bind(this)}>
        <h1>Login Form</h1>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            id="username"
            value={this.state.username}
            name="username"
            onChange={this.handleClick.bind(this)}
          />
          <p>{this.state.username}</p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            value={this.state.email}
            name="email"
            onChange={this.handleClick.bind(this)}
          />
          <p>{this.state.email}</p>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <br />
          <input
            type="password"
            id="password"
            value={this.state.password}
            name="password"
            onChange={this.handleClick.bind(this)}
          />
          <p>{this.state.password}</p>
        </div>

        <button>Submit</button>
        {/*{(this.state.isSubmited === true)?(<p>you typed : <span>{this.tempo}</span></p>):<p></p>}*/}
        {this.state.isSubmited === true && (
          <p>
            you typed : <span>{this.tempo}</span>
          </p>
        )}
      </form>
    );
  }
}
export default Loginform;
