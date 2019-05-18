import React from 'react';
import './App.css';
import Login from './views/Login';
import Home from './views/Home';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import StoriesList from './views/containers/StoriesList';
import SingleStory from './views/SingleStory';
import AddStory from './views/AddStory';
import AdminStoriesList from './views/containers/AdminStoriesList';
import AdminSingleStory from './views/AdminSingleStory'


function App() {
  return (
  <Router>
    <div className="App">
      <header>
        <nav>
          <Link to={"/login"}>login</Link>
          <Link to={"/"}>Home</Link>
          <Link to={"/stories_list"}>(secure stories list)</Link>
          <Link to={"/admin_stories_list"}>(secure Admin stories list)</Link>

        </nav>
      </header>
   
    </div>
  {/* unprotected routes */}
  <Route exact path={"/"} component={Home}></Route>
  <Route  exact path={"/login"} component={Login}></Route>
  {/* protected user routes */}
  <PrivateRoute exact path={"/stories_list"} component={StoriesList}></PrivateRoute>
  <PrivateRoute exact path={"/stories_list/:id"} component={SingleStory}></PrivateRoute>
  <PrivateRoute exact path={"/stories_list/add_story"} component={AddStory}></PrivateRoute>


  {/* protected admin routes */}
  <PrivateRoute exact path={"/admin_stories_list/"} component={AdminStoriesList}></PrivateRoute>
  <PrivateRoute exact path={"/admin_stories_list/:id"} component={AdminSingleStory}></PrivateRoute>
  </Router>
  
  );
}

export default App;
