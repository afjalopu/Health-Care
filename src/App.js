import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Culture from "./components/Culture/Culture";
import Layout from "./components/Layout/Layout";
import Banner from "./components/Banner/Banner";
import LayoutBanner from "./components/LayoutBanner/LayoutBanner";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./components/Context/AuthProvider";
import Shipping from "./components/Shipping/Shipping";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/friends">
            <Layout>
              <Friends />
            </Layout>
          </Route>
          <PrivateRoute path="/friend/:friendId">
            <Layout>
              <FriendDetails />
            </Layout>
          </PrivateRoute>
          <Route exact path="/about">
            <About />
          </Route>
          <PrivateRoute exact path="/shipping">
            <Layout>
               <Shipping />
            </Layout>
          </PrivateRoute>
          <Route exact path="/login">
            <Layout>
              <Login />
            </Layout>
          </Route>
          <Route exact path="/register">
            <Layout>
              <Register />
            </Layout>
          </Route>
          <Route exact path="/culture">
            <Layout>
              <Culture />
            </Layout>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
