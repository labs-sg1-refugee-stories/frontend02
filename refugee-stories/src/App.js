import React from 'react';
import './App.css';
import Login from './views/pages/Login';
import Home from './views/pages/Home';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import StoriesList from './views/containers/StoriesList';
import SingleStory from './views/pages/SingleStory';
import AddStory from './views/pages/AddStory';
import AdminStoriesList from './views/containers/AdminStoriesList';
import AdminSingleStory from './views/pages/AdminSingleStory'
import { GlobalStyle } from './styles/Global';
import AboutUs from './views/pages/AboutUs'

function App() {
  return (

  <Router>
    <GlobalStyle />
    
  {/* unprotected routes */}
  <Route  exact path={"/"} component={Home}></Route>
  <Route  path={"/login"} component={Login}></Route>
  <Route  path={"/about_us"} component={AboutUs}></Route>
 
  <PrivateRoute  exact path={"/stories_list"} component={StoriesList}></PrivateRoute>
  <PrivateRoute  exact path={"/stories_list/user/:id"} component={SingleStory}></PrivateRoute>
  <PrivateRoute  exact path={"/stories_list/add_story"} component={AddStory}></PrivateRoute>


  {/* protected admin routes */}
  <PrivateRoute exact path={"/admin_stories_list"} component={AdminStoriesList}></PrivateRoute>
  <PrivateRoute exact path={"/admin_stories_list/:id"} component={AdminSingleStory}></PrivateRoute>
 
  </Router>

  );
}

export default App;
