function Wish(props){
    let {name = "Everone", from = "team Rkg"  } = props; // destruct of props  === default props in function 
    return (
        <h1>Good morning {name} from {from}</h1>
    )
}