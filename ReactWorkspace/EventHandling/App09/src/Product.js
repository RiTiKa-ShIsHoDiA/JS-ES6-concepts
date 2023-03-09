import {Component} from  "react"
import ProductList from "./ProductList";
class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : this.props.list
        }
    }
    Click(val,SynBaseEventObj){
         /*let index = this.state.items.indexOf(val);
         let updatedArr = [...this.state.items.slice(0,index),...this.state.items.slice(index+1,this.state.items.length)];*/
         
         let updatedArr = [];
        /* for (let itr of this.state.items) {
            if(itr !== val){
                updatedArr.push(itr)
            }
         }*/
         updatedArr = this.state.items.filter((value) =>value !== val);
         this.setState({items : updatedArr}); // kuki previous pr depend nahi h
    }
   
    render(){
        let itemArray = this.state.items.map((val)=>{
           return <ProductList  addr = {this.Click.bind(this)}  itemName = {val} key={val}/>
        })
        return (
            <div className ="Product">
                <h1>Product in Cart</h1>
                <hr/>
                <div className="listItem">{itemArray}</div>   
            </div>
        )
    }
}
export default Product;