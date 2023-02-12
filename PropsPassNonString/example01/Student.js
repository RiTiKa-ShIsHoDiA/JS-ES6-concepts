 class Student extends React.Component{
    render(){
        let {city,state} = this.props.Address;
       return (
           <div>
               <h1>Name : {this.props.name}</h1>
               <h1>Age : {this.props.Age}</h1>
               <h1>Subjects : {this.props.Subjects}</h1>
               <h1>Address : {city} , {state}</h1>
           </div>
       );
    }
}
