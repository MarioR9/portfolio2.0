import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom";
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Home from './components/home';
import NavigationBar from './components/navigationBar';


class App extends React.Component {
  render(){
    return (
      <div>
        <div>
          <h1>NavigationBar</h1>
          <NavigationBar/>
        </div>
      <Router>
        <div className='main'>
          <Switch>
            <Route exact path='/'><Redirect to="/home" /></Route>
            <Route path='/home' component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
          </div>
      </Router>
      </div>
    );
  }
}

export default App;
