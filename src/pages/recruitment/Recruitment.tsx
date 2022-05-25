import { Card, Grid, Stack, Typography } from "@mui/material";
import RecruitmentSpecification from "../../components/recruitmentSpecification/RecruitmentSpecification";
import SimilarRecruitment from "../../components/similarRecruitment/SimilarRecruitment";
import RecruitmentBrief from "../../components/recruitmentBrief/RecruitmentBrief";
import { IRecruiment } from "../../@types/entities/recruiment";
import { useEffect, useState } from "react";
import { Axios } from "../../utils/axios";
import { AxiosResponse } from "axios";

const titleStyle = {
    marginBottom: '15px',
    marginRight: '20px',
    fontFamily: 'BYekan+',
    fontSize: '30px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.43,
    letterSpacing: 'normal',
    textAlign: 'right',
    color: '#4166b7',
}

const Recruitment = ({ jobDetails }: { jobDetails: IRecruiment }) => {

    const [similarRecruitment, setSimilarRecruitment] = useState<IRecruiment[]>([])

    const getData = async () => {
        const response = await Axios.get<any, AxiosResponse<{ similar: IRecruiment[] }>>(`api/similar/ads/recruiment/${jobDetails.token}/`);
        console.log(response.data.similar)
        setSimilarRecruitment(response.data.similar)
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Grid container spacing={3} justifyContent='center'>
            <Grid item xs={3}>
                <RecruitmentBrief title={jobDetails.title} cooperation={jobDetails.cooperation} province={jobDetails.province} time={jobDetails.time} url={jobDetails.url} />
            </Grid>
            <Grid item xs={7}>
                <Stack>
                    <RecruitmentSpecification jobDetails={jobDetails} />
                    <Typography sx={titleStyle}>آگهی‌های مشابه</Typography>
                    <SimilarRecruitment recruitments={similarRecruitment} />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Recruitment;