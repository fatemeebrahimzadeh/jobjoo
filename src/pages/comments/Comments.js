import React from "react";
import {FormControl, Grid, Stack} from "@mui/material";
import styled from "@emotion/styled";

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
    marginBottom:'45.4px',
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
    return (
        <Grid container sx={{backgroundColor: '#f8f8f8'}}>
            <Grid item xs={7} spacing={2}>
                <Stack>
                    <FormControl>
                        <StyledInputElement placeholder="نام" dir='rtl'/>
                        <StyledInputElement placeholder="تلفن همراه" dir='rtl'/>
                        <StyledTextareaElement placeholder="نظر شما"  dir='rtl'/>
                        <Grid container>
                            <Grid item xs={6} >
                                <StyledCaptchaElement/>
                            </Grid>
                            <Grid item xs={6} sx={captchaStyle}>captcha</Grid>
                        </Grid>
                        <StyledButtonElement>ارسال نظر</StyledButtonElement>
                    </FormControl>
                </Stack>
            </Grid>
            <Grid item xs={5} sx={{
                width: '384px',
                height: '530px'
            }}>hh</Grid>
        </Grid>
    )
}
export default Comments