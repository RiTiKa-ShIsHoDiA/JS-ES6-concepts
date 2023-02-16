class App extends React.Component{
    render(){
        return (
            <div>
                <Wish name = "Deepika" from = "ritika"/>
                <Wish from = "ritika"/>
                <Wish name = "gunjan"/>
                <Wish/>
            </div>
        )
    }
}
 let divContainer = document.querySelector("div");
 let root = ReactDOM.createRoot(divContainer);
 root.render(<App/>);
