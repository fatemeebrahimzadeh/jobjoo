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
    const [isfavorite, setIsfavorite] = useState(false)

    const getData = async () => {
        try {
            const token = localStorage.getItem('token')
            console.log(token)

            if (token === null) {
                const { data } = await Axios.get<any, AxiosResponse<{ similar: IRecruiment[] }>>(`api/similar/ads/recruiment/${jobDetails.token}/`)
                console.log(data)
                setSimilarRecruitment(data.similar)

            } else {
                const { data } = await Axios.get<any, AxiosResponse<{ favourite: boolean, similar: IRecruiment[] }>>(`api/similar/ads/recruiment/${jobDetails.token}/`,
                    {
                        headers: {
                            Authorization: `Token ${token}`
                        }
                    })
                console.log(data)
                setIsfavorite(data.favourite)
                setSimilarRecruitment(data.similar)
            }

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Grid container spacing={3} justifyContent='center'>
            <Grid item xs={3}>
                <RecruitmentBrief {...jobDetails} favourite={isfavorite} />
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