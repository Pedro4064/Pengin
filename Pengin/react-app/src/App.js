import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
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
          <Route path="/Search" exact element={<Search />} />
          <Route path="/Settings" exact element={<Settings />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
