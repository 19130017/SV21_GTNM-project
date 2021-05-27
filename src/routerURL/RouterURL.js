import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import anime_details from "../components/anime/anime_details";
import anime_watches from "../components/anime/anime_watches";
import Blog from "../components/blog/Blog";
import Blogdetails from "../components/blog/Blogdetails";
import Category from "../components/category/Category";
import Contact from "../components/contact/Contact";
import Home from "../components/Home";
import ForgotPassword from "../components/login/ForgotPassword";
import Login from "../components/login/Login";
import Signup from "../components/login/Signup";

export default class RouterURL extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog_details" component={Blogdetails} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/anime_details" component={anime_details} />
          <Route exact path="/anime_watches" component={anime_watches} />
          <Route exact path="/forgotPass" component = {ForgotPassword} />
          <Route exact path="/contact" component = {Contact} />
        </div>
      </Router>
    );
  }
}
