class App extends React.Component {
  render() {
    return (
      <div>
        <Student
          name="Ritika"
          rollNo={1821510049}
          subjects={["C++", "CSS3", "HTML5"]}
          marks={[50, 60, 90]}
        />
      </div>
    );
  }
}
let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);
root.render(<App />);
