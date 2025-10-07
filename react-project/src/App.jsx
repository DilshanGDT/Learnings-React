import './App.css'
import chef from './images/chef.jpg'
import { useState } from 'react'

function Header( {name, year} ) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
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

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
    <div>
      <h2>The restaurant is {openStatus ? "Open" : "Closed"}</h2>
      <button onClick={() => onStatus(true)}>I want to be open!</button>
    </div>
    <main>
      <img src={chef} alt="a photo of a Chef" style={{ width: '200px', borderRadius: '50%'}}/>
      <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{ listStyleType: 'none'}}>{dish.title}</li>
      ))}
    </ul>
    </main>
    </>
  );
}
    
function App() {
  const [status, setStatus] = useState(true);

  return (                //if the status true? return open if false return close
    <>                     
    <h4>The restaurant is {status ? "Open" : "Close"}</h4>
    <Header name={"Alex"} year={new Date().getFullYear()}/>
    <Main dishes={dishObejcts} openStatus={status} onStatus={setStatus}/>
    <button onClick={()=> setStatus(!status)}>
      {status ? "Close" : "Open"} restaurant
    </button>
    </>
  );
}

export default App
