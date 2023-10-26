import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      {/* <NavBar /> */}
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
