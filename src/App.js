import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom";
import About from './components/about';
import Portfolio from './components/portfolio';
import Home from './components/home';
import NavigationBar from './components/navigationBar';


class App extends React.Component {
  render(){
    return (
      <div>
        <div>
          <NavigationBar/>
        </div>
      <Router>
        <div className='main'>
          <Switch>
            <Route exact path='/'><Redirect to="/home" /></Route>
            <Route path='/home' component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route component={NotFound} />
          </Switch>
          </div>
      </Router>
      </div>
    );
  }
}
const NotFound = () => <div className='error'>Error 404! Page notFound</div>
export default App;
