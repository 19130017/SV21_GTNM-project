import React, { Component } from 'react'
import Anime from './Anime'

export default class BlackClover extends Component {
    render() {
        return (
            <Anime
                episodes="170/170"
                comment="5957"
                view="19 triệu"
                bg="img/trending/black-clover.jpg"
                category={
                    <div>
                        <li>Anime</li>
                        <li>Hành động</li>
                        <li>Hài hước</li>
                        <li>Phiêu lưu</li>
                        <li>Shonen</li>
                        <li>Phép thuật</li>
                    </div>
                }
                name="Black Clover"
                href="/blackclover_detail"
            />
        )
    }
}
