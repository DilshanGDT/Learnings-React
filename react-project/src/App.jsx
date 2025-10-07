import './App.css'

function Header( {name, year} ) {
  return (
    <header>
      <h1>This is a new function with {name}</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Minestrone Soup"
];
                                    //we use () to return an object directly
const dishObejcts = items.map((dish, idx) => ({
  id: idx,
  title: dish
}));

function Main({ dishes }) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{ listStyleType: 'none'}}>{dish.title}</li>
      ))}
    </ul>
  );
}

function App() {

  return (
    <>
    <Header name={"Alex"} year={new Date().getFullYear()}/>
    <Main dishes={dishObejcts}/>
    </>
  );
}

export default App
