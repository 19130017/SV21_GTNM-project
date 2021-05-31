import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Anime_watches from "../components/anime-watch/Anime_watches";
import BlackClover_details from "../components/anime_details/BlackClover_details";
import Bleach_details from "../components/anime_details/Bleach_details";
import Boruto_details from "../components/anime_details/Boruto_details";
import CaptainTsubasa_details from "../components/anime_details/CaptainTsubasa_details";
import DragonBallSuper_details from "../components/anime_details/DragonBallSuper_details";
import DrStone_details from "../components/anime_details/DrStone_details";
import EdenZero_details from "../components/anime_details/EdenZero_details";
import FairyTail_details from "../components/anime_details/FairyTail_details";
import FatestaynightMovieIII_details from "../components/anime_details/FatestaynightMovieIII_details";
import HelloWorld_details from "../components/anime_details/HelloWorld_details";
import JujutsuKaisen_details from "../components/anime_details/JujutsuKaisen_details";
import KimetsunoYaibaMugenRessha_details from "../components/anime_details/KimetsunoYaibaMugenRessha_details";
import KumodesugaNanika_details from "../components/anime_details/KumodesugaNanika_details";
import NarutoShippuDen_details from "../components/anime_details/NarutoShippuDen_details";
import OnePiece_details from "../components/anime_details/OnePiece_details";
import Tenkinoko_details from "../components/anime_details/Tenkinoko_details";
import TenseiShitaraSlimeDattaKen_details from "../components/anime_details/TenseiShitaraSlimeDattaKen_details";
import TokyoGhoul_details from "../components/anime_details/TokyoGhoul_details";
import YourName_details from "../components/anime_details/YourName_details";
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
          <Route exact path="/anime_watches" component={Anime_watches} />
          <Route exact path="/forgotPass" component={ForgotPassword} />
          <Route exact path="/contact" component={Contact} />
          {/* details */}
          <Route
            exact
            path="/BlackClover_details"
            component={BlackClover_details}
          />
          <Route exact path="/Bleach_details" component={Bleach_details} />
          <Route exact path="/Boruto_details" component={Boruto_details} />
          <Route
            exact
            path="/CaptainTsubasa_details"
            component={CaptainTsubasa_details}
          />
          <Route
            exact
            path="/DragonBallSuper_details"
            component={DragonBallSuper_details}
          />
          <Route exact path="/DrStone_details" component={DrStone_details} />
          <Route exact path="/EdenZero_details" component={EdenZero_details} />
          <Route
            exact
            path="/FairyTail_details"
            component={FairyTail_details}
          />
          <Route
            exact
            path="/FatestaynightMovieIII_details"
            component={FatestaynightMovieIII_details}
          />
          <Route
            exact
            path="/HelloWorld_details"
            component={HelloWorld_details}
          />
          <Route
            exact
            path="/JujutsuKaisen_details"
            component={JujutsuKaisen_details}
          />
          <Route
            exact
            path="/KimetsunoYaibaMugenRessha_details"
            component={KimetsunoYaibaMugenRessha_details}
          />
          <Route
            exact
            path="/KumodesugaNanika_details"
            component={KumodesugaNanika_details}
          />
          <Route
            exact
            path="/NarutoShippuDen_details"
            component={NarutoShippuDen_details}
          />
          <Route exact path="/OnePiece_details" component={OnePiece_details} />
          <Route
            exact
            path="/Tenkinoko_details"
            component={Tenkinoko_details}
          />
          <Route
            exact
            path="/TenseiShitaraSlimeDattaKen_details"
            component={TenseiShitaraSlimeDattaKen_details}
          />
          <Route
            exact
            path="/TokyoGhoul_details"
            component={TokyoGhoul_details}
          />
          <Route exact path="/YourName_details" component={YourName_details} />
        </div>
      </Router>
    );
  }
}
