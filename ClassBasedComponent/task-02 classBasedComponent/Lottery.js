function generatedNumber(){
    let arr = [10,20,51,29,90,40,27,10];
    let num = arr[parseInt(Math.random()*arr.length)];
    return num;
}
class Lottery extends React.Component{
    render(){
        let lotteryNumber = generatedNumber();
       
        let result = <h3>you got {lotteryNumber}</h3>
        if(lotteryNumber === 10){
            return (
            <div>
                {result}
                <h1>Congratulations !! you won</h1>
                <img src = "you-won.gif"/>
            </div>
            );
        }
        else{
            return (
                <div>
                 {result}
                <h1>sorry !! Better Luck next time</h1>
                </div> 
            );
        }
    }
}