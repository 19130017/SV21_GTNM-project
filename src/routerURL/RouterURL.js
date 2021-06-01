import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import Boruto_Detail from "../components/anime/anime-details/Boruto_Detail";
import DragonBall_Detail from "../components/anime/anime-details/DragonBall_Detail";
import BlackClover_Detail from "../components/anime/anime-details/BlackClover_Detail";
=======
<<<<<<< HEAD
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
=======
import Boruto_Detail from "../components/anime/anime-details/Boruto_Detail";
import DragonBall_Detail from "../components/anime/anime-details/DragonBall_Detail";
import BlackClover_Detail from "../components/anime/anime-details/BlackClover_Detail";
import anime_watches from "../components/anime/anime_watches";
>>>>>>> 748b21f665534dea609b6a33cfa32718e923795f
>>>>>>> 1dfd124c42bce079e0e56268d09d2dd16678e415
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
<<<<<<< HEAD
import Anime_watches from "../components/anime-watch/Anime_watches";
=======
>>>>>>> 1dfd124c42bce079e0e56268d09d2dd16678e415

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
          <Route
            exact
            path="/naruto_detail"
            component={NarutoShippuDen_Detail}
          />
          <Route
            exact
            path="/kumo_detail"
            component={KumodesugaNanika_Detail}
          />
          <Route
            exact
            path="/dragonballsuper_detail"
            component={DragonBall_Detail}
          />
          <Route
            exact
            path="/blackclover_detail"
            component={BlackClover_Detail}
          />
          <Route exact path="/bleach_detail" component={Bleach_Detail} />
          <Route exact path="/drstone_detail" component={DrStone_Detail} />
          <Route exact path="/edenzero_detail" component={EdenZero_Detail} />
          <Route exact path="/fairytail_detail" component={FairyTail_Detail} />
          <Route
            exact
            path="/tenseira_detail"
            component={TenseiShitaraSlimeDattaKen_Detail}
          />
          <Route
            exact
            path="/captaintsubasa_detail"
            component={CaptainTsubasa_Detail}
          />
          <Route
            exact
            path="/helloworld_detail"
            component={HelloWorld_Detail}
          />
          <Route exact path="/yourname_detail" component={YourName_Detail} />
          <Route
            exact
            path="/fatestaynight3_detail"
            component={FatestaynightMovieIII_Detail}
          />
          <Route
            exact
            path="/jujutsu-kaisen_detail"
            component={JujutsuKaisen_Detail}
          />
          <Route exact path="/tenkinoko_detail" component={Tenkinoko_Detail} />
          <Route
            exact
            path="/tokyoghoul_detail"
            component={TokyoGhoul_Detail}
          />
          <Route
            exact
            path="/kimetsu_detail"
            component={KimetsuNoYaiba_Detail}
          />
          <Route exact path="/anime_watches" component={Anime_watches} />
          <Route exact path="/forgotPass" component={ForgotPassword} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}
