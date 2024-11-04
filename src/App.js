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
      <SkillCard />
      <h1>{new Date().toLocaleTimeString()}</h1>
      <h3>{names}</h3>
      {isOpen ? <h1>{message1}</h1> : <h1>{message2}</h1>}
      {pizzaData.map((item) => {
        const { name, photoName, ingredients, price } = item;
        return (
          <li key={name} className='pizza'>
            <Card
              name={name}
              image={photoName}
              ingredients={ingredients}
              price={price}
            />
          </li>
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
      <h1>{props.ingredients}</h1>
      <h2>{props.price}</h2>
    </div>
  );
};
const SkillCard = () => {
  return (
    <section>
      <Avatar />
      <SkillList />
    </section>
  );
};
const SkillList = () => {
  return (
    <section style={{ width: "50%" }}>
      <h3>Ayodele Agbowuro</h3>
      <h6>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
        voluptatum quos sed numquam, nesciunt repellendus atque officiis commodi
        cumque, qui earum illum veritatis hic?
      </h6>
      <Skill name='html' emoji='✅' bgColor='yellow' />
      <Skill name='css' emoji='💪' bgColor='green' />
    </section>
  );
};
const Skill = (props) => {
  return (
    <span style={{ backgroundColor: props.bgColor }}>
      <span> {props.name}</span> <span>{props.emoji}</span>
    </span>
  );
};
const Avatar = () => {
  return <img src='pizzas/funghi.jpg' alt='hello' style={{ height: "72px" }} />;
};
