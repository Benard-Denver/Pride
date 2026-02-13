import "./App.css";
<<<<<<< HEAD

=======
>>>>>>> 1689b1a413a932dd6bb60db0c29725de61db270b
import Great from "./components/Great";
import About from "./components/ThankYou";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Great />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
