import image from "./motivation4.jpeg"
export default function Image(){
    console.log(typeof image);
    console.log(image);
    return (
        <div>

            <img src = {require("./motivation4.jpeg")} alt = "hello"/>
        </div>
    )
}
