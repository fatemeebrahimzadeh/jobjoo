import { Button, Card, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import nonSaveIc from "../../assets/icons/ic-save.png";
import saveIc from "../../assets/icons/ic-save-black.png";
import corporationLogo from "../../assets/img/corporation-logo.jpg";
import corporationIc from "../../assets/icons/ic-corpo.png";
import cityIc from "../../assets/icons/ic-pin.png";
import Time from "../UI/Time/Time";

const cardStyle = {
    width: '100%',
    height: '361px',
    marginTop: ' 68px',
    marginBottom: '56px',
    padding: '34px 40px 43px 34px',
    borderRadius: '15px',
    borderColor: 'rgba(112, 112, 112, 0.25)',
    backgroundColor: '#fff'
}
const requestDateStyle = {
    marginTop: '10px',
    marginRight: '13px',
    fontFamily: 'BYekan+',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.43,
    letterSpacing: 'normal',
    textAlign: 'right',
    color: '#33334c'
};
const titleStyle = {
    fontFamily: 'BYekan+',
    fontSize: '24px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.38,
    letterSpacing: 'normal',
    textAlign: 'end',
    color: '#4166b7'
};
const corporationStyle = {
    marginTop: '11px',
    marginRight: '5px',
    fontFamily: 'BYekan+',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.67,
    letterSpacing: 'normal',
    textAlign: 'end',
    color: '#33334c'
};
const cityStyle = {
    marginTop: '11px',
    marginRight: '5px',
    paddingBottom: '10px',
    fontFamily: 'BYekan+',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.67,
    letterSpacing: 'normal',
    textAlign: 'right',
    color: '#33334c'
}
const buttonStyle = {
    width: '261px',
    height: '51px',
    color: 'white',
    margin: '42px 0 0 15px',
    padding: '14px 57px 13px 58px',
    borderRadius: '10px',
    backgroundColor: '#4166b7',
}

interface IProps {
    title: string
    cooperation: string
    province: string
    time: Date
    url: string
}

const RecruitmentBrief = (props: IProps) => {

    const [saveRecruitment, setSaveRecruitment] = useState(false);
    const saveHandler = () => {
        setSaveRecruitment(!saveRecruitment);
    }

    return (
        <Card sx={cardStyle}>
            {!saveRecruitment && <img src={nonSaveIc} alt='save-icon' onClick={saveHandler} />}
            {saveRecruitment && <img src={saveIc} alt='save-icon' onClick={saveHandler} />}
            <Typography sx={titleStyle}>{props.title}</Typography>
            <Grid container justifyContent='end'>
                <Grid item sx={corporationStyle}>{props.cooperation}</Grid>
                <Grid item sx={{ marginTop: '15px' }}><img src={corporationIc} /></Grid>
            </Grid>
            <Grid container justifyContent='end'>
                <Grid item sx={cityStyle}>{props.province}</Grid>
                <Grid item sx={{ marginTop: '15px' }}><img src={cityIc} /></Grid>
            </Grid>
            <Typography sx={requestDateStyle}><Time time={props.time} /></Typography>
            <Button sx={buttonStyle}><a href={props.url} target="_blank" > مشاهده آگهی در جابینجا </a> </Button>
        </Card>
    )
}
export default RecruitmentBrief