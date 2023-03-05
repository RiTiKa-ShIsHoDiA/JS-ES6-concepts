import {Component} from "react"
class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            dateAndTime : new Date().toLocaleTimeString()
        }
        setInterval(this.updateTime,1000);
    }
    updateTime=()=>{
        this.setState({
            dateAndTime : new Date().toLocaleTimeString()
        })
    }
    giveAlert(){
        alert("nahi chalungabol kya kr lega");
    }
    stop(eventObj){
        eventObj.preventDefault();
        console.log("chala");
    }
    render(){
       return (
              <div>
                  <h1>time is {this.state.dateAndTime}</h1>
                  <button onClick = {this.giveAlert}>click me</button>
                  <a href = "www.google.com">click me</a>
                  
              </div>  

       )
    }
}

export default Clock;