import {Component} from "react"
class EventHandling extends Component {
    handleClick(SynBaseEventObj){
       console.log(SynBaseEventObj);
    }
    render()
    {
         return (
            <div>
               <input type = "text" onKeyDown = {this.handleClick.bind(this)}/>
            </div>
        );
    }
}
export default EventHandling;