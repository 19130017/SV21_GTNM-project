import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <div>
        {/* Header Section Begin */}
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="header_logo">
                  <a href="/">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="header_nav">
                  <nav className="header_menu mobile-menu">
                    <ul>
                      <li className="active">
                        <a href="/">Homepage</a>
                      </li>
                      <li>
                        <a href="/category">Categories</a>
                      </li>
                      {/* <li>
                        <a href="./categories.html">
                          Categories <span className="arrow_carrot-down" />
                        </a>
                        <ul className="dropdown">
                          <li>
                            <a href="/anime_details">Anime Details</a>
                          </li>
                          <li>
                            <a href="/anime_watches">Anime Watching</a>
                          </li>
                          <li>
                            <a href="/blog_details">Blog Details</a>
                          </li>
                          <li>
                            <a href="/signup">Sign Up</a>
                          </li>
                          <li>
                            <a href="/login">Login</a>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <a href="/blog">Our Blog</a>
                      </li>
                      <li>
                        <a href="/contact">Contacts</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="header_right">
                  <a href="#" className="search-switch">
                    <span className="icon_search" />
                  </a>
                  <a href="/login">
                    <span className="icon_profile" />
                  </a>
                </div>
              </div>
            </div>
            <div id="mobile-menu-wrap" />
          </div>
        </header>
        {/* Header End */}
      </div>
    );
  }
}
