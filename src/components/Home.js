import React, { Component } from 'react'
import Hero from "./Hero";
import Product from "./Product";
export default class Home extends Component {
    render() {
        return (
            <div>
                <Hero />
                <Product />
            </div>
        )
    }
}
