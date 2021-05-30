import React, { Component } from 'react'
import Anime from './Anime'

export default class TokyoGhoul extends Component {
    render() {
        return (
            <Anime
                episodes="12/12"
                comment="596"
                view="10 triệu"
                bg="img/trending/tokyo-ghoul.jpg"
                category={
                    <div>
                        <li>Anime</li>
                        <li>Hành động</li>
                        <li>Viễn tưởng</li>
                        <li>Kinh dị</li>
                    </div>
                }
                name="Tokyo Ghoul"
                href="/"
            />
        )
    }
}
