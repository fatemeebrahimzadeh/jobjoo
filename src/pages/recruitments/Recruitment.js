import {Card, Grid, Stack, Typography} from "@mui/material";
import RecruitmentSpecification from "../../components/recruitmentSpecification/RecruitmentSpecification";

const titleStyle = {
    marginBottom: '15px',
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
const Recruitment = () => {
    return (
        <Grid container spacing={3} justifyContent='center'>
            <Grid item xs={3}>
                <Card>a</Card>
            </Grid>
            <Grid item xs={7}>
                <Stack>
                    <RecruitmentSpecification/>
                    <Typography sx={titleStyle}>آگهی‌های مشابه</Typography>
                    <Card>f</Card>
                </Stack>
            </Grid>
        </Grid>
    )
}
export default Recruitment;