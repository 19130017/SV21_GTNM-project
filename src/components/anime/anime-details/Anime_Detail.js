import React, { Component } from "react";
import BreadCrumbs from "../../category/BreadCrumbs";

class Anime_Detail extends Component {
  render() {
    return (
      <div>
        <BreadCrumbs />
        {/* Anime Section Begin */}
        <section className="anime-details spad">
          <div className="container">
            <div className="anime_details_content">
              <div className="row">
                <div className="col-lg-3">
                  <div
                    className="anime_details_pic set-bg"
                    data-setbg={this.props.bg}
                  >
                    <div className="comment">
                      <i className="fa fa-comments" /> {this.props.comment}
                    </div>
                    <div className="view">
                      <i className="fa fa-eye" /> {this.props.views}
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="anime_details_text">
                    <div className="anime_details_title">
                      <h3>{this.props.name}</h3>
                      <span>{this.props.author}</span>
                    </div>
                    <div className="anime_details_rating">
                      <div className="rating">
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                        <a href="#">
                          <i className="fa fa-star-half-o" />
                        </a>
                      </div>
                      <span>{this.props.votes}</span>
                    </div>
                    <p>{this.props.intro}</p>
                    <div className="anime_details_widget">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <ul>
                            <li>
                              <span>Type:</span>
                              {this.props.type}
                            </li>
                            <li>
                              <span>Studios:</span> {this.props.studio}
                            </li>
                            <li>
                              <span>Date aired:</span>
                              {this.props.date}
                            </li>
                            <li>
                              <span>Status:</span> {this.props.status}
                            </li>
                            <li>
                              <span>Genre:</span> {this.props.genre}
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <ul>
                            <li>
                              <span>Scores:</span> {this.props.scores}
                            </li>
                            <li>
                              <span>Rating:</span> {this.props.rating}
                            </li>
                            <li>
                              <span>Duration:</span> {this.props.duration}
                            </li>
                            <li>
                              <span>Quality:</span> {this.props.quality}
                            </li>
                            <li>
                              <span>Views:</span>
                              {this.props.views}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="anime_details_btn">
                      <a href="#" className="follow-btn">
                        <i className="fa fa-heart-o" /> Follow
                      </a>
                      <a href="/anime_watches" className="watch-btn">
                        <span>Watch Now</span>{" "}
                        <i className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <div className="anime_details_review">
                  <div className="section-title">
                    <h5>Reviews</h5>
                  </div>
                  <div className="anime_review_item">
                    <div className="anime_review_item_pic">
                      <img src="img/anime/review-1.jpg" alt="" />
                    </div>
                    <div className="anime_review_item_text">
                      <h6>
                        Chris Curry - <span>1 Hour ago</span>
                      </h6>
                      <p>
                        whachikan Just noticed that someone categorized this as
                        belonging to the genre "demons" LOL
                      </p>
                    </div>
                  </div>
                  <div className="anime_review_item">
                    <div className="anime_review_item_pic">
                      <img src="img/anime/review-2.jpg" alt="" />
                    </div>
                    <div className="anime_review_item_text">
                      <h6>
                        Lewis Mann - <span>5 Hour ago</span>
                      </h6>
                      <p>Finally it came out ages ago</p>
                    </div>
                  </div>
                  <div className="anime_review_item">
                    <div className="anime_review_item_pic">
                      <img src="img/anime/review-3.jpg" alt="" />
                    </div>
                    <div className="anime_review_item_text">
                      <h6>
                        Louis Tyler - <span>20 Hour ago</span>
                      </h6>
                      <p>Where is the episode 15 ? Slow update! Tch</p>
                    </div>
                  </div>
                  <div className="anime_review_item">
                    <div className="anime_review_item_pic">
                      <img src="img/anime/review-4.jpg" alt="" />
                    </div>
                    <div className="anime_review_item_text">
                      <h6>
                        Chris Curry - <span>1 Hour ago</span>
                      </h6>
                      <p>
                        whachikan Just noticed that someone categorized this as
                        belonging to the genre "demons" LOL
                      </p>
                    </div>
                  </div>
                  <div className="anime_review_item">
                    <div className="anime_review_item_pic">
                      <img src="img/anime/review-5.jpg" alt="" />
                    </div>
                    <div className="anime_review_item_text">
                      <h6>
                        Lewis Mann - <span>5 Hour ago</span>
                      </h6>
                      <p>Finally it came out ages ago</p>
                    </div>
                  </div>
                  <div className="anime_review_item">
                    <div className="anime_review_item_pic">
                      <img src="img/anime/review-6.jpg" alt="" />
                    </div>
                    <div className="anime_review_item_text">
                      <h6>
                        Louis Tyler - <span>20 Hour ago</span>
                      </h6>
                      <p>Where is the episode 15 ? Slow update! Tch</p>
                    </div>
                  </div>
                </div>
                <div className="anime_details_form">
                  <div className="section-title">
                    <h5>Your Comment</h5>
                  </div>
                  <form action="#">
                    <textarea placeholder="Your Comment" defaultValue={""} />
                    <button type="submit">
                      <i className="fa fa-location-arrow" /> Review
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="anime_details_sidebar">
                  <div className="section-title">
                    <h5>you might like...</h5>
                  </div>
                  <div
                    className="product_sidebar_view_item set-bg"
                    data-setbg="img/sidebar/tv-1.jpg"
                  >
                    <div className="ep">18 / ?</div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                    <h5>
                      <a href="#">Boruto: Naruto next generations</a>
                    </h5>
                  </div>
                  <div
                    className="product_sidebar_view_item set-bg"
                    data-setbg="img/sidebar/tv-2.jpg"
                  >
                    <div className="ep">18 / ?</div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                    <h5>
                      <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
                    </h5>
                  </div>
                  <div
                    className="product_sidebar_view_item set-bg"
                    data-setbg="img/sidebar/tv-3.jpg"
                  >
                    <div className="ep">18 / ?</div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                    <h5>
                      <a href="#">
                        Sword art online alicization war of underworld
                      </a>
                    </h5>
                  </div>
                  <div
                    className="product_sidebar_view_item set-bg"
                    data-setbg="img/sidebar/tv-4.jpg"
                  >
                    <div className="ep">18 / ?</div>
                    <div className="view">
                      <i className="fa fa-eye" /> 9141
                    </div>
                    <h5>
                      <a href="#">
                        Fate/stay night: Heaven's Feel I. presage flower
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Anime Section End */}
      </div>
    );
  }
}

export default Anime_Detail;
