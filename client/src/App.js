import TopBar from "./components/topbar/TopBar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Write from "./pages/write/Write"
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/contact/Contact";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

function App() {
  const user = false;
  
  return (
    <Router>    
     <TopBar/>
     <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/register">{user ? <Home/>:<Register/>}</Route>
      <Route path="/login">{user ? <Home/>:<Login/>}</Route>
      <Route path="/write">{user ? <Write/>:<Register/>}</Route>  
      <Route path ="/about">  
        <About/>
      </Route>   
      <Route path ="/contact">  
        <Contact/>
      </Route>   
      <Route path="/settings">{user ? <Settings/>:<Register/>}</Route>        
      <Route path="/post/:postId">
        <Single/>
      </Route>

     </Switch>     
    </Router>
  );
}

export default App;
