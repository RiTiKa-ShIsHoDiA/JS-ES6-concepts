class Courses extends React.Component {
  render() {
    let {name,titles} = this.props;
    return (
      <div>
        <h1>Course Name  {name}</h1>
        <p>titles:-</p>
        <ul>{titles.map(value => <li>{value}</li>)}</ul>
      </div>
    );
  }
}
