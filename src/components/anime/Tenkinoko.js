import React, { Component } from 'react'
import Anime from './Anime'

export default class Tenkinoko extends Component {
    render() {
        return (
            <Anime
                episodes="Full/Full"
                comment="779 "
                view="11 triệu"
                bg="img/trending/tenki-no-ko.jpg"
                category={
                    <div>
                        <li>Anime</li>
                        <li>Tình cảm</li>
                        <li>Siêu nhiên</li>
                        <li>Drama</li>
                    </div>
                }
                name="Tenkinoko"
                href="/Tenkinoko_details"
            />
        )
    }
}
