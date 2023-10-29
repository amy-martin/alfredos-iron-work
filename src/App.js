import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import { NavBar } from './components/navBarComponents/NavBar';
import { HomePage } from './components/homePageComponents/HomePage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <main className='main-section'>

        {/* <NavBarSideBar /> */}
        <Routes>
          <Route path='/' element={<HomePage />}/>
          {/* <Route path='/services' element={<Services />}/> */}
          {/* <Route path='/about' element={<AboutUs />}/> */}
          {/* <Route path='/contact' element={<ContactUs />}/> */}
        </Routes>
      </main>
    </Router>
  )
}
export default App;
