import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
}

export default App;