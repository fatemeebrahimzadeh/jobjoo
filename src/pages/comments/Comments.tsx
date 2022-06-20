import React from "react";
import { FormControl, Grid, Stack } from "@mui/material";
import styled from "@emotion/styled";
import ReCaptchaComponent from "./ReCaptchaComponent"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Intersection from "../../assets/img/Intersection 8.png"
import { Axios } from "../../utils/axios";

const StyledInputElement = styled('input')`
  width: 224px;
  height: 45px;
  margin: 17px 140px 17px 395px;
  padding: 11px 22px 15px 140px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
`;
const StyledTextareaElement = styled('textarea')`
  width: 444px;
  height: 159px;
  margin: 17px 140px 17px 175px;
  padding: 14px 22px 126px 373px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
`;
const StyledButtonElement = styled('button')`
  width: 221px;
  height: 62px;
  margin: 41.4px 69px 45px 175px;
  border: none;
  border-radius: 15px;
  background-color: #4166b7;
  font-family: BYekan;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`;
const StyledCaptchaElement = styled('input')`
  width: 225px;
  height: 46px;
  margin: 17px 68px 41.4px 172px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
`;
const captchaStyle = {
    width: '90px',
    height: '30px',
    marginTop: '29px',
    marginBottom: '45.4px',
    fontFamily: 'SegoeUI',
    fontSize: '22px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.36,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: ' #33334c',
}
const Comments = () => {

    const [token, setToken] = React.useState<string>("");
    const [name, setName] = React.useState<string>("");
    const [phone, setPhone] = React.useState<string>("");
    const [content, setContent] = React.useState<string>("");

    const callBackReCaptcha = (token: string) => {
        setToken(token)
    }

    const commentOnClickHandler = async () => {
        let response = await Axios.post('/contact/', {
            name: name,
            phone: phone,
            content: content,
            recaptcha: token
        })
        console.log(response)
    }

    return (
        <Grid container sx={{ backgroundColor: '#f8f8f8' }}>
            <Grid item xs={7} spacing={2}>
                <Stack>
                    <FormControl>
                        <StyledInputElement onChange={(event) => { setName(event.target.value.toString()) }} placeholder="نام" dir='rtl' />
                        <StyledInputElement onChange={(event) => { setPhone(event.target.value.toString()) }} placeholder="تلفن همراه" dir='rtl' />
                        <StyledTextareaElement onChange={(event) => { setContent(event.target.value.toString()) }} placeholder="نظر شما" dir='rtl' />
                        <GoogleReCaptchaProvider reCaptchaKey="6Lda4HcgAAAAAP3jIMOqhM-3753uFza8FsK0NXAg">
                            <ReCaptchaComponent callBackReCaptcha={callBackReCaptcha} />
                        </GoogleReCaptchaProvider>
                        <StyledButtonElement onClick={commentOnClickHandler}>ارسال نظر</StyledButtonElement>
                    </FormControl>
                </Stack>
            </Grid>
            <Grid item xs={5} sx={{
                width: '384px',
                height: '530px'
            }}>
                <img src={Intersection} alt="comment vector" />
            </Grid>
        </Grid>
    )
}
export default Comments