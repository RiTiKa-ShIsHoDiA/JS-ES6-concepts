class Courses extends React.Component {
  render() {
    let {name,titles} = this.props;
    let titleList = [];
    titles.forEach((value)=>{
      titleList.push(<li>{value}</li>);
    });
    return (
      <div>
        <h1>Course Name  {name}</h1>
        <p>titles:-</p>
        <ul>{titleList}</ul>
      </div>
    );
  }
}
