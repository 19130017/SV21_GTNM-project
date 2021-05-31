import React, { Component } from "react";

export default class Anime_watches extends Component {
  render() {
    return (
      <div>
        {/* bread crumb */}
        {/* Anime Section Begin */}
        <section className="anime-details spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="anime_video_player">
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      paddingBottom: "56.25%",
                    }}
                  >
                    <iframe
                      src="https://phephim.xyz/embed/video?id=57965"
                      width="100%"
                      height="100%"
                      frameBorder={0}
                      scrolling="auto"
                      title={1}
                      style={{ position: "absolute" }}
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="anime_details_episodes">
                  <div className="section-title">
                    <h5>Name Anime</h5>
                  </div>
                  <a href="#">Ep 01</a>
                  <a href="#">Ep 02</a>
                  <a href="#">Ep 03</a>
                  <a href="#">Ep 04</a>
                  <a href="#">Ep 05</a>
                  <a href="#">Ep 06</a>
                  <a href="#">Ep 07</a>
                  <a href="#">Ep 08</a>
                  <a href="#">Ep 09</a>
                  <a href="#">Ep 10</a>
                  <a href="#">Ep 11</a>
                  <a href="#">Ep 12</a>
                  <a href="#">Ep 13</a>
                  <a href="#">Ep 14</a>
                  <a href="#">Ep 15</a>
                  <a href="#">Ep 16</a>
                  <a href="#">Ep 17</a>
                  <a href="#">Ep 18</a>
                  <a href="#">Ep 19</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
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
            </div>
          </div>
        </section>
        {/* Anime Section End */}
      </div>
    );
  }
}
