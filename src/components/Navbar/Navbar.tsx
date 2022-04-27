import React, { Component } from "react";
import "./Navbar.scss"
export default class Navbar extends Component {
    render() {
        return (
            <nav className="Navbar">
                <div className="loginBtn"> </div>
                <div className="Navbar__logo"></div>
            </nav>
        )
    }
}