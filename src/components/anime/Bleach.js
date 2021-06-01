import React, { Component } from "react";
import Anime from "./Anime";

export default class Bleach extends Component {
    render() {
        return (
            <Anime
                episodes="366/366"
                comment="1438"
                view="15 triệu"
                bg="img/trending/bleach.jpg"
                category={
                    <div>
                        <li>Anime</li>
                        <li>Hành động</li>
                        <li>Hài hước</li>
                        <li>Giả tưởng</li>
                        <li>Siêu nhiên</li>
                        <li>Shonen</li>
                    </div>
                }
                name="Bleach"
                href="/bleach_detail"
            />
        )
    }
}
