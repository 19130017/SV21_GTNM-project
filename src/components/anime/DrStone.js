import React, { Component } from 'react'
import Anime from './Anime'

export default class DrStone extends Component {
    render() {
        return (
            <Anime
                episodes="24/24"
                comment="6199"
                view="18 triệu"
                bg="img/trending/dr-stone.jpg"
                category={
                    <div>
                        <li>Anime</li>
                        <li>Hành động</li>
                        <li>Viễn tưởng</li>
                        <li>Phiêu lưu</li>
                        <li>Shonen</li>
                    </div>
                }
                name="Dr.Stone"
                href="/"
            />
        )
    }
}
