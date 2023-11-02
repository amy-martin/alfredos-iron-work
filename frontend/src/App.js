import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import { NavBar } from './components/navBarComponents/NavBar';
import { HomePage } from './components/homePageComponents/HomePage';
import ContactUs from './components/contactUsComponents/ContactUs';
import { AboutUs } from './components/aboutUsComponents/AboutUs';
import { Services } from './components/servicesComponents/Services';


import dotenv from 'dotenv';
dotenv.config();


export const serverAddress = process.env.REACT_APP_SERVER_ADDRESS


const App = () => {
  return (
    <Router>
      <NavBar />
      <main className='main-section'>

        {/* <NavBarSideBar /> */}
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/contact-us' element={<ContactUs />}/>
        </Routes>
      </main>
    </Router>
  )
}
export default App;
