import React, { Component } from 'react'
import Anime from './Anime'

export default class YourName extends Component {
    render() {
        return (
            <Anime
                episodes="Full/Full"
                comment="1235 "
                view="12 triệu"
                bg="img/trending/your-name.jpg"
                category={
                    <div>
                        <li>Anime</li>
                        <li>Tình cảm</li>
                        <li>Học đường</li>
                        <li>Siêu nhiên</li>
                        <li>Drama</li>
                    </div>
                }
                name="Kimi no Na wa"
                href="/"
            />
        )
    }
}
