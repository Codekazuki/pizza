import pizzaData from "./data";

console.log(pizzaData);
function App() {
  const message1 = "We are currently open ";
  const message2 = "We are currently closed";
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 17;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <div>
      <SkillCard />

      <ul className='pizzas'>
        {pizzaData.map((pizzaObj) => (
          <li key={pizzaObj.name} className='pizza'>
            <Card pizzaObj={pizzaObj} />
          </li>
        ))}
      </ul>
      <Footer isOpen={isOpen} message1={message1} message2={message2} />
    </div>
  );
}

const Footer = ({ isOpen, message1, message2 }) => {
  return (
    <section>
      <h1>{new Date().toLocaleTimeString()}</h1>
      {isOpen ? <h1>{message1}</h1> : <h1>{message2}</h1>}
    </section>
  );
};
export default App;

const Card = ({ pizzaObj }) => {
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <h2> {pizzaObj.name} </h2>
      <h1>{pizzaObj.ingredients}</h1>
      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
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
