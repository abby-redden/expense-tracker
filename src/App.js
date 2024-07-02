import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Tracker from './Pages/Tracker/tracker';
import Home from './Pages/Landing/landing';
import LoginButton from './Pages/Landing/landing';
import LogoutButton from './Pages/Logout/logout';
import Profile from './Pages/UserProfile/userProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/' element = {<LoginButton/>}> </Route>
    
          <Route path = '/expense' element = {<Tracker/>}></Route>
          
          <Route path = '/profile' element = { <Profile/>}> </Route>

          <Route path = '/logout' element = { <LogoutButton/>}> </Route>

        </Routes>
      </Router>
      
     
      
    </div>
  );
}

export default App;
