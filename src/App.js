import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import data from './Data';

function App() {

  const cards = data.map(destination => {
    return <Cards
              id={destination.id}
              {...destination} />
  })
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
