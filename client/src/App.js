
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import {Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Errorpage from './components/Errorpage';
import './App.css'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
     <>
     <Navbar />
     <Switch>
     
     <Route exact path="/">
        <Home />
     </Route>
     <Route path="/about">
        <About />
     </Route>
     <Route path="/contact">
        <Contact />
     </Route>
     <Route path="/login">
        <Login />
     </Route>
     <Route path="/signup">
        <SignUp />
     </Route>
     <Route>
        <Errorpage />
     </Route>
     </Switch>
     </>
  );
}

export default App;
