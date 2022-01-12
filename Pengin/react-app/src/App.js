import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Queue from "./pages/Queue";
import Settings from "./pages/Settings";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (

    <Router>
      <div className="App">

        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Queue" exact element={<Queue />} />
          <Route path="/Settings" exact element={<Settings />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
