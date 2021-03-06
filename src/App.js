import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/home-pages/homepage';
import Rentpage from './pages/rent-pages/rentpage';
import Housepage from './pages/house-page/housepage';
import Signuppage from './pages/signup-page/signuppage';
import Loginpage from './pages/login-page/loginpage';
import Addpropertypage from './pages/add-property-page/addpropertypage';




function App() {
  return (
    <div className="App">

      <Switch>
         <Route exact path='/' component={Homepage}/>
         <Route exact path='/rent' render={(routeProps)=> <Rentpage {...routeProps}/>}/>
         <Route exact path='/rent/:index' render={(routeProps)=> <Housepage {...routeProps}/>}/>
         <Route exact path='/signup' render={()=> <Signuppage/>}/>
         <Route exact path='/login' render={()=> <Loginpage/>} />
         <Route exact path='/add-a-property' render={()=> <Addpropertypage/>} />
      </Switch>
    
    </div>
  );
}

export default App;
