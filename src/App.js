function App() {
  let names = "Daniel and David";
  const message1 = "We are currently open ";
  const message2 = "We are currently closed";
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 17;
  return (
    <div>
      <h1>{new Date().toLocaleTimeString()}</h1>
      <h3>{names}</h3>
      {hour >= openHour && hour <= closeHour ? (
        <h1>{message1}</h1>
      ) : (
        <h1>{message2}</h1>
      )}
    </div>
  );
}

export default App;
