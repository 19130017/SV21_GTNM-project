import React, { Component } from 'react'
import Anime from './Anime'

export default class JujutsuKaisen extends Component {
    render() {
        return (
            <Anime
                episodes="24/24"
                comment="3269"
                view="17 triệu"
                bg="img/trending/jujutsu-kaisen.jpg"
                category={
                    <div>
                        <li>Anime</li>
                        <li>Hành động</li>
                        <li>Kinh dị</li>
                        <li>Siêu nhiên</li>
                        <li>Shonen</li>
                        <li>Ác quỷ</li>
                    </div>
                }
                name="Jujutsu Kaisen"
                href="/JujutsuKaisen_details"
            />
        )
    }
}
