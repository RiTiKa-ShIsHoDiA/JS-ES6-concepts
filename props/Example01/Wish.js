/*function Wish(props) {
  let {name:n ,surname:s} = props; // destructing of object 
  return <h1>Good morning {n} {s}</h1>;
}*/
function Wish({ name: n, surName: s }) {
  //more small
  let value = String(s);
  return (
    <h1>
      Good morning {n} {value}
    </h1>
  );
}
