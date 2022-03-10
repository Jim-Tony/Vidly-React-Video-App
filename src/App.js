import React, { Component } from 'react';
import {Route,Switch,Redirect} from "react-router-dom";
import MoviesTable from './components/moviesTable';
import NavBar from './components/navBar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import './App.css';
class App extends Component {
  render() {
    return (
        <React.Fragment>
          <NavBar/>
          <div className='content'>
            <Switch>
              <Route path="/movies" component={MoviesTable}/>
              <Route path="/customers" component={Customers}/>
              <Route path="/rentals" component={Rentals}/>
              <Route path="/not-found" component={NotFound}/>
              <Route path="/" exact component={MoviesTable}/>
              <Redirect to="/not-found"/>
            </Switch>
          </div>
        </React.Fragment>
    );
  }
}
export default App;