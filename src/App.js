function App() {
  let names = "Daniel and David";
  return (
    <div>
      <h1>{new Date().toLocaleTimeString()}</h1>

      <h3>{names}</h3>
    </div>
  );
}

export default App;
