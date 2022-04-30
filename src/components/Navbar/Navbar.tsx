import React, { Component } from "react";
import "./Navbar.scss"
import logo from "../../assets/img/logo.png"
import { Button, ButtonGroup, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
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

const theme = createTheme({
    palette: {
        primary: {
            main: "#fff",
        }
    },
});

export default class Navbar extends Component {
    render() {
        return (
            <nav className="Navbar">
                <ButtonGroup className="loginBtn">
                    <ThemeProvider theme={theme}>
                        <Button
                            size="medium"
                            color="primary"
                            disabled
                            onClick={() => { }}
                            variant="text">ثبت نام</Button>
                        <Button
                            className="Button--left-H-line"
                            size="medium"
                            color="primary"
                            disabled
                            onClick={() => { }}
                            variant="text">ورود</Button>
                    </ThemeProvider>
                </ButtonGroup>
                <div className="Navbar__logo">
                    <img src={logo} alt="" />
                </div>
            </nav>
        )
    }
}