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

      <Navbar />
      <Routes>
        <Route path={'/'} element = {
          <Home />
        }/>
        
        <Route path={'/Courses'} element = {
          <Courses />
        }/>
        
        <Route path={'/Teachers'} element = {
          <Teachers />
        } />

        <Route path={'/Contacts'} element = {
          <Contacts />
        } />

        <Route path={'/Registration'} element = {
          <Registration />
        } />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;