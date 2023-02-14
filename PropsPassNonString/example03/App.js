class App extends React.Component {
  render() {
    return (
      <div>
        <Courses
          name="Java FullStack"
          titles={[
            "javaCore",
            "javaSE",
            "springboot",
            "jakarta",
            "JavaScript",
            "Oracle"
          ]}
        />
      </div>
    );
  }
}
let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);
root.render(<App/>);

