import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar  from "./components/navbar/Navbar";
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Courses from './components/courses/Courses';
import Teachers from './components/teachers/Teachers';
import Contacts from './components/contacts/Contacts';
import Registration from './components/registration/Registration';
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
        
        <Route path={'/Teachers'} element = {
          <>
            <Navbar />
            <Teachers />
            <Footer />
          </>
        } />

        <Route path={'/Contacts'} element = {
          <>
            <Navbar />
            <Contacts />
            <Footer />
          </>
        } />

        <Route path={'/Registration'} element = {
          <>
            <Navbar />
            <Registration />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;