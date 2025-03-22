import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar  from "./components/navbar/Navbar";
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Courses from './components/courses/Courses';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      
      <Routes>
        <Route path={'/'} element = {
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }/>
        
        <Route path={'/Courses'} element = {
          <>
            <Navbar />
            <Courses />
            <Footer />
          </>
        }/>
        
      </Routes>
    </div>
  );
}

export default App;