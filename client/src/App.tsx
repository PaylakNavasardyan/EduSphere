import './App.css';
import Navbar  from "./components/navbar/Navbar";
import Home from './components/home/Home';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;