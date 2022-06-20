import { Card, Grid } from "@mui/material";
import nonSaveIc from '../../assets/icons/ic-save.png'
import saveIc from '../../assets/icons/ic-save-black.png'
import cityIc from '../../assets/icons/ic-pin.png'
import { useEffect, useState } from "react";
import './jobCard.scss'
import { IRecruiment } from "../../@types/entities/recruiment";
import Time from "../UI/Time/Time";
import { Axios } from "../../utils/axios";

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

const cardStyle = {
    width: '100%',
    height: '180px',
    padding: '33px 20px 22px 39px',
    marginTop: '15px',
    borderRadius: '15px',
    borderColor: 'rgba(112, 112, 112, 0.25)',
    backgroundColor: '#fff'
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


    const [saveRecruitment, setSaveRecruitment] = useState(false);

    useEffect(() => {
        console.log(props.jobDetails.favourite)
        props.jobDetails.favourite ? setSaveRecruitment(true) : setSaveRecruitment(false)
    }, [props.jobDetails.favourite]);

    const toggleSaveHandler = () => {
        setSaveRecruitment(!saveRecruitment);
    }

    const saveHandler = async () => {
        toggleSaveHandler()
        try {
            const token = localStorage.getItem('token')

            const { data } = await Axios.post('/api/favourite/',
                {
                    type: "recruiment",
                    token: props.jobDetails.token
                },
                {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const unSaveHandler = async () => {
        toggleSaveHandler()
        try {
            const token = localStorage.getItem('token')

            const { data } = await Axios.delete(`/api/favourite/?type=recruiment&token=${props.jobDetails.token}`,
                {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Card sx={cardStyle}>
            <Grid container>
                <Grid item xs={2}>
                    {!saveRecruitment && <img src={nonSaveIc} alt='save-icon' onClick={() => { localStorage.getItem("token") !== null && saveHandler() }} />}
                    {saveRecruitment && <img src={saveIc} alt='save-icon' onClick={() => { localStorage.getItem("token") !== null && unSaveHandler() }} />}
                </Grid>
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
            </Grid>
        </Card>
    );
}

export default JobCard;