class Emoji extends React.Component{
    render(){
        let result = (this.props.emoji1 === this.props.emoji2) && (this.props.emoji2 === this.props.emoji3);
        return (
            <div>
                <h1>{this.props.emoji1} {this.props.emoji2} {this.props.emoji3}</h1>
                {result ? "मैं खिलाड़ी तू अनाड़ी": "ये दुख कहे खतम नहीं होता" }
                 <hr/>
            </div>
           
        )
    }
}