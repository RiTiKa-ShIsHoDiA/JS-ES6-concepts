class Wish extends React.Component { 
    static defaultProps = {   //default props on class level
        name : "Everyone",
        from : "team of developer"
    }
    render(){
        return (
            <h1>Good Morning {this.props.name} from {this.props.from}</h1>
        )
    }
}