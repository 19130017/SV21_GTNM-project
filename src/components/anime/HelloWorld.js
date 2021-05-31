import React, { Component } from "react";
import Anime from "./Anime";

export default class HelloWorld extends Component {
  render() {
    return (
      <Anime
        episodes="Full/Full"
        comment="528"
        view="10 triệu"
        bg="img/trending/hello-world.jpg"
        category={
          <div>
            <li>Anime</li>
            <li>Viễn tưởng</li>
          </div>
        }
        name="Hello World"
        href="/HelloWorld_details"
      />
    );
  }
}
