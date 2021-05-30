import React, { Component } from 'react'
import Anime from './Anime'

export default class KimetsunoYaibaMugenRessha extends Component {
    render() {
        return (
            <Anime
                episodes="Full/Full"
                comment="409"
                view="5 triệu"
                bg="img/trending/kimetsu-no-yaiba-mugen-ressha.jpg"
                category={
                    <div>
                        <li>Anime</li>
                        <li>Hành động</li>
                        <li>Lịch sử</li>
                        <li>Phiêu lưu</li>
                        <li>Shonen</li>
                    </div>
                }
                name="One piece"
                href="/"
            />
        )
    }
}
