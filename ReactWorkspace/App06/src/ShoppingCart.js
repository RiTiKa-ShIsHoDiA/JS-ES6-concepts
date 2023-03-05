import {Component} from "react"
class ShoppingCart extends Component{
    constructor(props){
        super(props);
        this.state = {
            items :this.props.items,
            total :this.props.items.length
        }
        setTimeout(this.updatedCart, 5000);
    }
    updatedCart = ()=>{
        let newItems = [...this.state.items,"Asus Laptop"]
        let totalItems = newItems.length;
        this.setState({
            items : newItems,
            total:totalItems
        },()=>{console.log("setState chala")})
    }
    render(){
        return (
            <div className = "ShoppingCart text-blue-900 text-lg font-semibold ">
                <p>Product List : {this.state.items.join(", ")}</p>
                <p>Total no. of items : {this.state.total}</p>
            </div>
        )
    }
}
export default ShoppingCart;