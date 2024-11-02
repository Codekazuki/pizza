import pizzaData from "./data";

console.log(pizzaData);
function App() {
  let names = "Daniel and David";
  const message1 = "We are currently open ";
  const message2 = "We are currently closed";
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 17;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <div>
      <h1>{new Date().toLocaleTimeString()}</h1>
      <h3>{names}</h3>
      {isOpen ? <h1>{message1}</h1> : <h1>{message2}</h1>}
      {pizzaData.map((item) => {
        return (
          <Card
            key={item.name}
            name={item.name}
            image={item.photoName}
            ingredients={item.ingredients}
          />
        );
      })}
    </div>
  );
}

export default App;

const Card = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <h3> {props.name} </h3>
      <h1>{props.price}</h1>
      <h1>{props.ingredients}</h1>
    </div>
  );
};
