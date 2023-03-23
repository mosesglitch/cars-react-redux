import "./App.css";
import CarValue from "./components/CarValue";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarForm from "./components/CarForm";
import CounterPage from "./components/CustomHook";
function App() {
  return (
    <div className="container is-fluid">
      <CounterPage initialCount={10} />
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
