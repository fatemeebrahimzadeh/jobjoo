import { Grid } from "@mui/material";
import nonSaveIc from '../../assets/icons/ic-save.png'
import saveIc from '../../assets/icons/ic-save-black.png'
import corporationIc from '../../assets/icons/ic-corpo.png'
import cityIc from '../../assets/icons/ic-pin.png'
import { useState } from "react";
import './jobCard.scss'

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
const JobCard = ({ jobDetails }) => {
    const [saveJob, setSaveJob] = useState(false);
    const jobDetail = {
        jobTitle: jobDetails.jobTitle,
        requestDate: jobDetails.requestDate,
        enCorporation: jobDetails.enCorporation,
        faCorporation: jobDetails.faCorporation,
        city: jobDetails.city,
        logoSrc: jobDetails.logoSrc
    }
    const saveHandler = () => {
        setSaveJob(!saveJob);
    }

    return (<Grid container>
        <Grid item xs={2}>
            {!saveJob && <img src={nonSaveIc} alt='save-icon' onClick={saveHandler} />}
            {saveJob && <img src={saveIc} alt='save-icon' onClick={saveHandler} />}
        </Grid>
        <Grid item xs={8}>
            <Grid container justifyContent='end'>
                <Grid item sx={requestDateStyle}>{jobDetail.requestDate}</Grid>
                <Grid item sx={titleStyle}>{jobDetail.jobTitle}</Grid>
            </Grid>
            <Grid container justifyContent='end'>
                <Grid item sx={corporationStyle}>{jobDetail.faCorporation} | {jobDetail.enCorporation}</Grid>
                <Grid item sx={{ marginTop: '15px' }}><img src={corporationIc} /></Grid>
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