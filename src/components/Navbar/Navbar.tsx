import React, { Component } from "react";
import "./Navbar.scss"
import logo from "../../assets/img/logo.png"
import { Button, ButtonGroup } from "@mui/material";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="Navbar">
                <ButtonGroup className="loginBtn">
                    <Button
                        size="medium"
                        disabled
                        onClick={() => { }}
                        variant="text">ثبت نام</Button>
                    <Button
                        size="medium"
                        disabled
                        onClick={() => { }}
                        variant="text">ورود</Button>
                </ButtonGroup>
                <div className="Navbar__logo">
                    <img src={logo} alt="" />
                </div>
            </nav>
        )
    }
}