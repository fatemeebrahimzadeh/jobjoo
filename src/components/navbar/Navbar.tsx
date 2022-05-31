import React, { Component, useState } from "react";
import "./Navbar.scss"
import logo from "../../assets/img/logo.png"
import { Button, ButtonGroup, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import LoginModal from "../loginModal/LoginModal";
import { AxiosResponse } from "axios";
import { Axios } from "../../utils/axios";
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

export interface IData {
    PhoneNumber: string
    Code: string
}


const Navbar = () => {
    const [openModal, setOpenModal] = useState(false)
    const [modalInputLabel, setModalInputLabel] = useState("Phone Number")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Code, setCode] = useState("")

    const openLoginModalHandler = () => {
        setModalInputLabel("Phone Number")
        setOpenModal(true)
    }

    const submitLoginHandler = () => {
        if (modalInputLabel === "Phone Number") {
            setModalInputLabel("Code")
            sendUsername()
        } else {
            sendCode()
            setOpenModal(false)
        }
    }

    const modalOnChange = (value: string, fieldName: keyof IData) => {
        switch (fieldName) {
            case "PhoneNumber":
                setPhoneNumber(value)
                break;
            case "Code":
                setCode(value)
                break;
            default:
                break;
        }
    }

    const sendCode = async () => {
        console.log(typeof PhoneNumber, PhoneNumber, typeof Code, Code)
        try {
            let { data } = await Axios.post<any, AxiosResponse<{
                token: string
            }>>("/auth/login/", {
                username: PhoneNumber,
                password: Code
            })
            // console.log("data.token", data.token)
            localStorage.setItem('token', data.token)
        } catch (error) {
            console.log(error)
        }
    }

    const sendUsername = async () => {
        try {
            let { data } = await Axios.post("/auth/login-request/", {
                username: PhoneNumber,
            })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    // console.log(localStorage.getItem("token"))

    return (
        <>
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
                    <img src={logo} alt="" />
                </div>
            </nav>
            {modalInputLabel === "Phone Number" && <LoginModal
                open={openModal}
                setOpen={setOpenModal}
                submitLoginHandler={submitLoginHandler}
                inputLabel={modalInputLabel}
                onChange={modalOnChange} />}
            {modalInputLabel === "Code" && <LoginModal
                open={openModal}
                setOpen={setOpenModal}
                submitLoginHandler={submitLoginHandler}
                inputLabel={modalInputLabel}
                onChange={modalOnChange} />}
        </>
    )
}
export default Navbar