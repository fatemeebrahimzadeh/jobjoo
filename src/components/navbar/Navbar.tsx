import React, {Component, useState} from "react";
import "./Navbar.scss"
import logo from "../../assets/img/logo.png"
import {Button, ButtonGroup, ThemeProvider} from "@mui/material";
import {createTheme} from '@mui/material/styles';
import LoginModal from "../loginModal/LoginModal";
// typescript
// declare module '@mui/material/styles' {
//     interface Theme {
//         status: {
//             danger: React.CSSProperties['color'];
//         };
//     }

//     interface Palette {
//         neutral: Palette['primary'];
//     }
//     interface PaletteOptions {
//         neutral: PaletteOptions['primary'];
//     }

//     interface PaletteColor {
//         darker?: string;
//     }
//     interface SimplePaletteColorOptions {
//         darker?: string;
//     }
//     interface ThemeOptions {
//         status: {
//             danger: React.CSSProperties['color'];
//         };
//     }
// }


const Navbar = () => {
    const [openModal, setOpenModal] = useState(false)
    const openLoginModalHandler = () => {
        console.log('open')
        setOpenModal(true)
    }
    return (
        <nav className="Navbar">
            <ButtonGroup className="loginBtn" variant="text" aria-label="text button group">
                <Button
                    size="medium"
                    color="primary"
                    disabled
                    onClick={() => {
                    }}>ثبت نام</Button>
                <Button
                    className="Button--left-H-line"
                    size="medium"
                    color="primary"
                    onClick={openLoginModalHandler}>ورود</Button>
            </ButtonGroup>
            <div className="Navbar__logo">
                <img src={logo} alt=""/>
            </div>
            <LoginModal open={openModal} setOpen={setOpenModal} hideClose={true}/>
        </nav>
    )
}
export default Navbar