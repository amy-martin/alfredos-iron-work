import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { NavBar } from './components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        {/* <NavBarSideBar /> */}
        <Routes>
          {/* <Route path='/' element={<HomePage />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/contact' element={<ContactUs />}/> */}
        </Routes>
      </main>
    </Router>
  )
}
export default App;
