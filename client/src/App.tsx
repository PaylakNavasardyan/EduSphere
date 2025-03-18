import './App.css';
import Navbar  from "./components/navbar/Navbar";
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;