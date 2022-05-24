import { Card, Typography } from "@mui/material";
import { IRecruiment } from "../../@types/entities/recruiment";

const cardStyle = {
    width: '100%',
    height: '100%',
    marginTop: ' 68px',
    marginBottom: '56px',
    padding: '34px 20px 43px 130px',
    borderRadius: '15px',
    borderColor: 'rgba(112, 112, 112, 0.25)',
    backgroundColor: '#fff'
}
const textStyle = {
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

const RecruitmentSpecification = ({ jobDetails }: { jobDetails: IRecruiment }) => {

    return (
        <Card sx={cardStyle}>
            <Typography sx={textStyle}>مشخصات آگهی</Typography>
            <Typography sx={{ ...textStyle, fontSize: '21px', color: '#33334c' }}>شرح موقعیت شغلی</Typography>
            <Typography sx={{ ...textStyle, fontSize: '18px', color: '#33334c', marginBottom: '40px' }}>{jobDetails.description}</Typography>
            <Typography sx={{ ...textStyle, fontSize: '21px', color: '#33334c' }}>جزئیات</Typography>
            {jobDetails.city ? <Typography sx={{ ...textStyle, fontSize: '18px', color: '#33334c', marginBottom: '40px' }}>شهر: {jobDetails.city}</Typography> : <></>}
            {jobDetails.cooperation ? <Typography sx={{ ...textStyle, fontSize: '18px', color: '#33334c', marginBottom: '40px' }}>نوع همکاری: {jobDetails.cooperation}</Typography> : <></>}
            {jobDetails.education ? <Typography sx={{ ...textStyle, fontSize: '18px', color: '#33334c', marginBottom: '40px' }}>میزان تحصیلات: {jobDetails.education}</Typography> : <></>}
            {jobDetails.experience ? <Typography sx={{ ...textStyle, fontSize: '18px', color: '#33334c', marginBottom: '40px' }}> تجربه کاری: {jobDetails.experience.toString()} سال</Typography> : <></>}
            {jobDetails.gender ? <Typography sx={{ ...textStyle, fontSize: '18px', color: '#33334c', marginBottom: '40px' }}> جنسیت: {jobDetails.gender}</Typography> : <></>}
            {jobDetails.insurnace ? <Typography sx={{ ...textStyle, fontSize: '18px', color: '#33334c', marginBottom: '40px' }}> بیمه: {jobDetails.insurnace}</Typography> : <></>}
            {jobDetails.neighbourhood ? <Typography sx={{ ...textStyle, fontSize: '18px', color: '#33334c', marginBottom: '40px' }}> شهر: {jobDetails.neighbourhood}</Typography> : <></>}
        </Card>
    )
}
export default RecruitmentSpecification