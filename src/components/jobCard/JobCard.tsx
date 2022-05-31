import { Grid } from "@mui/material";
import nonSaveIc from '../../assets/icons/ic-save.png'
import saveIc from '../../assets/icons/ic-save-black.png'
import corporationIc from '../../assets/icons/ic-corpo.png'
import cityIc from '../../assets/icons/ic-pin.png'
import { useState } from "react";
import './jobCard.scss'
import { IRecruiment } from "../../@types/entities/recruiment";
import Time from "../UI/Time/Time";

const requestDateStyle = {
    marginTop: '3px',
    marginRight: '13px',
    fontFamily: 'BYekan',
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
    fontFamily: 'BYekan',
    fontSize: '21px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.38,
    letterSpacing: 'normal',
    textAlign: 'right',
    color: '#4166b7'
};

const corporationStyle = {
    marginTop: '11px',
    marginRight: '5px',
    fontFamily: 'BYekan',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.67,
    letterSpacing: 'normal',
    textAlign: 'right',
    color: '#33334c'
};

const cityStyle = {
    marginTop: '11px',
    marginRight: '5px',
    paddingBottom: '10px',
    fontFamily: 'BYekan',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.67,
    letterSpacing: 'normal',
    textAlign: 'right',
    color: '#33334c'
}

interface IProps {
    jobDetails: IRecruiment
}

const JobCard = (props: IProps) => {

    const jobDetail = {
        jobTitle: props.jobDetails.title,
        date: <Time time={props.jobDetails.time} />,
        city: props.jobDetails.city,
        logoSrc: props.jobDetails.source?.logo
    }

    return (<Grid container>
        <Grid item xs={8}>
            <Grid container justifyContent='end'>
                <Grid item sx={requestDateStyle}>{jobDetail.date}</Grid>
                <Grid item sx={titleStyle}>{jobDetail.jobTitle}</Grid>
            </Grid>
            <Grid container justifyContent='end'>
                <Grid item sx={cityStyle}>{jobDetail.city}</Grid>
                <Grid item sx={{ marginTop: '15px' }}><img src={cityIc} /></Grid>
            </Grid>
        </Grid>
        <Grid item xs={2}>
            <div className='company-logo'>
                <img src={jobDetail.logoSrc} className='company-logo__image' />
            </div>
        </Grid>

    </Grid>);
}

export default JobCard;