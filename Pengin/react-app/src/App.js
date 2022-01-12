import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Queue from "./pages/Queue";
import Settings from "./pages/Settings";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Queue" exact component={Queue}></Route>
          <Route path="Settings" exact component={Settings}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
