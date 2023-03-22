import logo from "./logo.svg";
import "./App.css";
import CarValue from "./components/CarValue";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarForm from "./components/CarForm";

function App() {
  return (
    <div className="App">
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
  );
}

export default App;
