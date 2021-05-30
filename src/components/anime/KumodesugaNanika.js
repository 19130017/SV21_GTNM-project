import React, { Component } from 'react'
import Anime from './Anime'

export default class KumodesugaNanika extends Component {
    render() {
        return (
            <Anime
                episodes="19/???"
                comment="1908"
                view="14 triệu"
                bg="img/trending/kumo-desu-ga-nani-ka.jpg"
                category={
                    <div>
                        <li>Anime</li>
                        <li>Hành động</li>
                        <li>Hài hước</li>
                        <li>Phiêu lưu</li>
                    </div>
                }
                name="Kumo desu ga, Nani ka"
                href="/"
            />
        )
    }
}
