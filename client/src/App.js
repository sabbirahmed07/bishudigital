import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import PrivateRoute from "./components/common/PrivateRoute";

import Navbar from "./containers/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./containers/layout/Landing";
import Register from "./containers/auth/Register";
import Login from "./containers/auth/Login";
import Dashboard from "./containers/dashboard/Dashboard";
import CreateProfile from "./containers/create-profile/CreateProfile";
import EditProfile from "./containers/edit-profile/EditProfile";
import AddExperience from "./containers/add-credentials/AddExperience";
import AddEducation from "./containers/add-credentials/AddEducation";
import Profiles from "./containers/profiles/Profiles";
import Profile from "./containers/profile/Profile";
import NotFound from "./components/not-found/NotFound";
import Posts from "./containers/posts/Posts";
import Post from "./containers/post/Post";

import store from "./redux/store/store";
import setAuthToken from "./redux/utils/setAuthToken";
import { setCurrentUser, logoutuser } from "./redux/actions/authActions";

import "./App.css";
import { clearCurrentProfile } from "./redux/actions/profileActions";

//check for token

if (localStorage.jwtToken) {
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode the token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //check for expire token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //logout user
    store.dispatch(logoutuser());
    //clear current profile
    store.dispatch(clearCurrentProfile());
    //redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profiles" component={Profiles} />
                <Route exact path="/profile/:handle" component={Profile} />

                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />

                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />

                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />

                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />

                <PrivateRoute exact path="/feed" component={Posts} />
                <PrivateRoute exact path="/post/:id" component={Post} />

                <Route component={NotFound} />
              </Switch>
            
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
