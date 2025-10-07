import './App.css'

function Header(props) {
  return (
    <header>
      <h1>This is a new function with {props.name}</h1>
      <p>Copyright {props.year}</p>
    </header>
  );
}

function App() {

  return (
    <Header name={"Alex"} year={new Date().getFullYear()}/>
  );
}

export default App
