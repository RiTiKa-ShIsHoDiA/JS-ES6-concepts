import {Component} from "react"
class Product1 extends Component{
    state={  //state made on class level
       prductName : "Apple smart watch",
       price : 12000,
    }
    render(){
        return (
            <div>
                <p>Product name : {this.state.prductName}</p>
                <p>Product price : {this.state.price}</p>
            </div>
        );
    }
}
export default Product1;