import logo from "./logo.svg";
import "./App.css";
import CarValue from "./components/CarValue";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarForm from "./components/CarForm";
import CounterPage from "./components/CustomHook";
function App() {
  return (
    <div className="App">
      <CounterPage initialCount={10} />
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
  );
}

export default App;
