import {Component} from "react"
class MyButton extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this); //hogya this s bind
    }
    handleClick = function(){ //eventhandler
        console.log(this)
        let now = new Date().toLocaleString();
        alert(now);
    }
    render(){
        console.log(this); // this.handleclick address h kahi pass horra h ye vo us address pr siddha call laga raha h ,jb siddha object ko call lgegi to 
        return (
            <div>
              <button onClick = {this.handleClick}>click me </button>
            </div>
        );
    }
}
//console.log(this);
export default MyButton;