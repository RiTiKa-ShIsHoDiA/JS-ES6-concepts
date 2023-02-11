class Wish extends React.Component{
  render(){
    console.log(this);
    return (
      <h1>
        Good morning {this.props.name} {this.props.surName}
      </h1>
    );
  }
  
}
