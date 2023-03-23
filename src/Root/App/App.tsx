import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";
import Home from "../Home/Home";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
