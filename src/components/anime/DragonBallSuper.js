import React, { Component } from 'react'
import Anime from './Anime'

export default class DragonBallSuper extends Component {
    render() {
        return (
            <Anime
                episodes="131/131"
                comment="6882"
                view="11 triệu"
                bg="img/trending/dragonballsuper.jpg"
                category={
                    <div>
                        <li>Anime</li>
                        <li>Hành động</li>
                        <li>Hài hước</li>
                        <li>Siêu năng lực</li>
                    </div>
                }
                name="Dragon ball super"
                href="/DragonBallSuper_details"
            />
        )
    }
}
