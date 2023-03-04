import {Component} from "react"
import arr from "./zoo"
import {choice,remove} from "./helper"
class Animal extends Component{
    render(){
        let randomAnimal = choice(arr);
        let updatedArray = remove(arr,randomAnimal);
        return (
            <div className="Animal">
                <p>Total number of animals: {arr.length}</p>
                <p>They are: {arr.join()}</p>
                <p>Choosen animal: {randomAnimal}</p>
                <p>Remaining Animal: {updatedArray.length}</p>
                <p>They are: {updatedArray.join()}</p>
            </div>
        )
    }
}
export default Animal