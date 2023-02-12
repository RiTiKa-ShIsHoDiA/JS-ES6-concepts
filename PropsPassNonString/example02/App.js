class App extends React.Component {
  render() {
    return (
      <div>
        <Emoji emoji1="😃" emoji2="😃" emoji3="😃" />
        <Emoji emoji1="😃" emoji2="😉" emoji3="🤣" />
        <Emoji emoji1="😃" emoji2="😍" emoji3="😍" />
      </div>
    );
  }
}
let divContainer = document.querySelector("div");
let root = ReactDOM.createRoot(divContainer);
root.render(<App />);
