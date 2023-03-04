import { Component } from "react";
class Product2 extends Component{ 
   /*constructor(props){  state intialise must 
        this.state = {
              productName :this.props.productName,
              price :this.props.price
        }
    }*/
     constructor(props){  
        super(props); //must pass props into super
        this.state = {
              productName :this.props.productName,
              price :this.props.price
        }
    }

    render(){
        return (
            <div>
                <p>Product name : {this.state.productName}</p> 
                <p>Product price : {this.state.price}</p>
            </div>
        );
    }
}

export default Product2;