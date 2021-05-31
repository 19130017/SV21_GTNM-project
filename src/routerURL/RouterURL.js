import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Boruto_Detail from "../components/anime/anime-details/Boruto_Detail";
import DragonBall_Detail from "../components/anime/anime-details/DragonBall_Detail";
import BlackClover_Detail from "../components/anime/anime-details/BlackClover_Detail";
import anime_watches from "../components/anime/anime_watches";
import Blog from "../components/blog/Blog";
import Blogdetails from "../components/blog/Blogdetails";
import Category from "../components/category/Category";
import Contact from "../components/contact/Contact";
import Home from "../components/Home";
import ForgotPassword from "../components/login/ForgotPassword";
import Login from "../components/login/Login";
import Signup from "../components/login/Signup";
import Bleach_Detail from "../components/anime/anime-details/Bleach_Detail";
import CaptainTsubasa_Detail from "../components/anime/anime-details/CaptainTsubasa_Detail";
import DrStone_Detail from "../components/anime/anime-details/DrStone_Detail";
import EdenZero_Detail from "../components/anime/anime-details/EdenZero_Detail";
import FairyTail_Detail from "../components/anime/anime-details/FairyTail_Detail";
import FatestaynightMovieIII_Detail from "../components/anime/anime-details/FatestaynightMovieIII_Detail";
import HelloWorld_Detail from "../components/anime/anime-details/HelloWorld_Detail";
import JujutsuKaisen_Detail from "../components/anime/anime-details/JujutsuKaisen_Detail";
import KumodesugaNanika_Detail from "../components/anime/anime-details/KumodesugaNanika_Detail";
import NarutoShippuDen_Detail from "../components/anime/anime-details/NarutoShippuDen_Detail";
import OnePiece_Detail from "../components/anime/anime-details/OnePiece_Detail";
import Tenkinoko_Detail from "../components/anime/anime-details/Tenkinoko_Detail";
import TokyoGhoul_Detail from "../components/anime/anime-details/TokyoGhoul_Detail";
import KimetsuNoYaiba_Detail from "../components/anime/anime-details/KimetsuNoYaiba_Detail";
import TenseiShitaraSlimeDattaKen_Detail from "../components/anime/anime-details/TenseiShitaraSlimeDattaKen_Detail";
import YourName_Detail from "../components/anime/anime-details/YourName_Detail";

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
          <Route exact path="/boruto_detail" component={Boruto_Detail} />
          <Route exact path="/onepiece_detail" component={OnePiece_Detail} />
          <Route exact path="/naruto_detail" component={NarutoShippuDen_Detail} />
          <Route exact path="/kumo_detail" component={KumodesugaNanika_Detail} />
          <Route exact path="/dragonballsuper_detail" component={DragonBall_Detail} />
          <Route exact path="/blackclover_detail" component={BlackClover_Detail} />
          <Route exact path="/bleach_detail" component={Bleach_Detail} />
          <Route exact path="/drstone_detail" component={DrStone_Detail} />
          <Route exact path="/edenzero_detail" component={EdenZero_Detail} />
          <Route exact path="/fairytail_detail" component={FairyTail_Detail} />
          <Route exact path="/tenseira_detail" component={TenseiShitaraSlimeDattaKen_Detail} />
          <Route exact path="/captaintsubasa_detail" component={CaptainTsubasa_Detail} />
          <Route exact path="/helloworld_detail" component={HelloWorld_Detail} />
          <Route exact path="/yourname_detail" component={YourName_Detail} />
          <Route exact path="/fatestaynight3_detail" component={FatestaynightMovieIII_Detail} />
          <Route exact path="/jujutsu-kaisen_detail" component={JujutsuKaisen_Detail} />
          <Route exact path="/tenkinoko_detail" component={Tenkinoko_Detail} />
          <Route exact path="/tokyoghoul_detail" component={TokyoGhoul_Detail} />
          <Route exact path="/kimetsu_detail" component={KimetsuNoYaiba_Detail} />
          <Route exact path="/anime_watches" component={anime_watches} />
          <Route exact path="/forgotPass" component = {ForgotPassword} />
          <Route exact path="/contact" component = {Contact} />
        </div>
      </Router>
    );
  }
}
