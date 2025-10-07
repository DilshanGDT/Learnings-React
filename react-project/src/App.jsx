import './App.css'

function Header( {name, year} ) {
  return (
    <header>
      <h1>This is a new function with {name}</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

function App() {

  return (
    <Header name={"Alex"} year={new Date().getFullYear()}/>
  );
}

export default App
