import "./index.css";
import { Person } from "./components/Person";
import { Counter } from "./components/Counter";
import { BeerCard } from "./components/BeerCard";

function App() {
  const ids = [1, 2, 3, 4, 5, 6, 10, 100, 200];

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center flex-wrap gap-6">
      <div className="flex flex-wrap gap-6 overflow-auto">
        {ids.map((id) => (
          <BeerCard key={id} id={id} />
        ))}
        <Person name="Test" age={18} />
      </div>
      <Counter />
    </div>
  );
}

export default App;
