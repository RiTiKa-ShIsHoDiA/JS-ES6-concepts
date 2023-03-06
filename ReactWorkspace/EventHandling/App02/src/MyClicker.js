import {Component} from "react" 
class  MyClicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter : 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
       this.setState({
           counter : this.state.counter + 1
       })
    }
    render(){
        return (
           <div className="text-center">
              <p>value is {this.state.counter}</p>
              <button type = "button" className = "h-10 w-20 rounded-lg .. bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..." onClick = {this.handleClick}>click me</button>
           </div>
        )
    }
}
export default MyClicker;