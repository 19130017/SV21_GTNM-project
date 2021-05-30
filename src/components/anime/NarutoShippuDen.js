import React, { Component } from 'react'
import Anime from './Anime'

export default class NarutoShippuDen extends Component {
    render() {
        return (
            <Anime
                episodes="500/500"
                comment="2061"
                view="20 triệu"
                bg="img/trending/naruto-shippuden.jpg"
                category={
                    <div>
                        <li>Anime</li>
                        <li>Hành động</li>
                        <li>Hài hước</li>
                        <li>Siêu nhiên</li>
                        <li>Shonen</li>
                    </div>
                }
                name="Naruto shippuden"
            />
        )
    }
}
