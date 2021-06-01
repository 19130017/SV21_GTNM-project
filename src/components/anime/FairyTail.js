import React, { Component } from "react";
import Anime from "./Anime";

export default class FairyTail extends Component {
    render() {
        return (
            <Anime
                episodes="277/277"
                comment="572"
                view="10 triệu"
                bg="img/trending/fairy-tail.jpg"
                category={
                    <div>
                        <li>Anime</li>
                        <li>Hài hước</li>
                        <li>Viễn tưởng</li>
                        <li>Phiêu lưu</li>
                        <li>Phép thuật</li>
                    </div>
                }
                name="Fairy tail"
                href="/fairytail_detail"
            />
        )
    }
}
