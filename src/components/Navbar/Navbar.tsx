import React, { Component } from "react";
import "./Navbar.scss"
import logo from "../../assets/img/logo.png"

export default class Navbar extends Component {
    render() {
        return (
            <nav className="Navbar">
                <div className="loginBtn"></div>
                <div className="Navbar__logo">
                    <img src={logo} alt="" />
                </div>
            </nav>
        )
    }
}