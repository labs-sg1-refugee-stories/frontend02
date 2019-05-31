import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "views/pages/Login";
import Home from "views/pages/Home";
import PrivateRoute from "components/PrivateRoute";
import StoriesList from "views/containers/StoriesList";
import SingleStory from "views/pages/SingleStory";
import AddStory from "views/pages/AddStory";
import AdminStoriesList from "views/containers/AdminStoriesList";
import AdminSingleStory from "views/pages/AdminSingleStory";
import { GlobalStyle } from "styles/Global";
import AboutUs from "views/pages/AboutUs";
import Connect from "views/pages/Connect";
import NotLogged from "views/pages/NotLogged";

function App() {
  return (
    <Router>
      <GlobalStyle />

      {/* unprotected routes */}
      <Route exact path={"/"} component={Home} />
      <Route path={"/login"} component={Login} />
      <Route path={"/about_us"} component={AboutUs} />
      <Route exact path={"/connect"} component={Connect} />

      <Route exact path={"/stories_list"} component={StoriesList} />
      <Route exact path={"/stories_list/user/:id"} component={SingleStory} />
      <Route exact path={"/stories_list/add_story"} component={AddStory} />
      <Route exact path={"/not_logged"} component={NotLogged} />

      {/* protected admin routes */}
      <PrivateRoute
        exact
        path={"/admin_stories_list"}
        component={AdminStoriesList}
      />
      <PrivateRoute
        exact
        path={"/admin_stories_list/:id"}
        component={AdminSingleStory}
      />
    </Router>
  );
}

export default App;
