import "./App.css";
import WelcomeContainer from "./components/WelcomeContainer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-blue-300">
        <WelcomeContainer />
      </div>

      <Switch></Switch>
    </Router>
  );
}

export default App;
