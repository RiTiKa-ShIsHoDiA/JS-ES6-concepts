import {Component} from "react"
class ProductList extends Component{
   handleClick(SynBaseEventObj){
      console.log(SynBaseEventObj);
      this.props.addr(this.props.itemName,SynBaseEventObj);
   }
    render(){
       // console.log(this.props.addr);
        return (
                <li>
                    <span>{this.props.itemName}</span>
                    <button onClick = {this.handleClick.bind(this)}>Delete</button>
                </li>
        )
    }
}
export default ProductList;