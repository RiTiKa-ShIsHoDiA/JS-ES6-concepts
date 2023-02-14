class Student extends React.Component {
  render() {
    let { name, rollNo, subjects, marks } = this.props;
    let totalMarks = 0;
    return (
      <div>
        <h1>Students Details</h1>
        <p>Name: {name}</p>
        <p>Roll No.: {rollNo}</p>
        <p>Subjects:</p>
        <ul>
          {subjects.map((value) => (
            <li>{value}</li>
          ))}
        </ul>
        <p>Marks:</p>
        <ul>
          {marks.map((value) => {
            totalMarks += value;
            return <li>{value}</li>;
          })}
        </ul>
        <p>Total marks Obtained: {totalMarks}</p>
        <p>Result: {totalMarks >= 100 ? "Pass":"fails"}</p>
      </div>
    );
  }
}
