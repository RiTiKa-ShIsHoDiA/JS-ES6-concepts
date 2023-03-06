import {Component} from "react"
class MyClicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            number:1
        }
    }
    inc(currentState){ // is fucntion m argument recieve krna h jo react bhejegi or object return karana h
        return {number: currentState.number + 1 };
    }
    increamentBy1(syntheticObj){
       /* this.setState({  //sirf last vala chlta h kuki set state immediate update nahi hota or vo request h na ki command 
            number : this.state.number + 1
        })
        this.setState({    
            number : this.state.number + 1
        })*/
      
       /* this.setState({
            number : this.state.number + 1 // yaha previous state use horri h setState(callback) ye tarika use krenge 
        })*/
        this.setState(this.inc);
    }
    increamentBy3(syntheticObj){
        this.setState({
            number : this.state.number + 3
        })
    }
    render(){
        return (
            <div>
                <p>Generated value is {this.state.number}</p>
                <button onClick = {this.increamentBy1.bind(this)}>+1</button>
                <button onClick = {this.increamentBy3.bind(this)}>+3</button>
            </div>
        )
    }
}
export default MyClicker;