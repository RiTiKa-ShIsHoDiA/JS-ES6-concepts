import {Component} from "react"
class KeyDetector extends Component{
    handleClick(SynBaseEventObj){
        console.log(SynBaseEventObj);
        if(SynBaseEventObj.key === "Enter"){
            alert(SynBaseEventObj.target.value);
        }
        else if(SynBaseEventObj.key === "Escape"){
            SynBaseEventObj.target.value = "";
        }
    }
    render(){
        return (
            <div className="KeyDetector">
                <h1>Key Detector</h1>
                <input type = "text" onKeyDown={this.handleClick.bind(this)}/>
            </div>
        )
    }
}
export default KeyDetector;