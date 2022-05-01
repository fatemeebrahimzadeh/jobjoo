import {Card} from "@mui/material";
import JobCard from "../jobCard/JobCard";
import corporationLogo from "../../assets/img/corporation-logo.jpg";


const cardStyle = {
    width: '100%',
    height: '180px',
    padding: '33px 20px 22px 39px',
    marginTop :'15px',
    borderRadius: '15px',
    borderColor: 'rgba(112, 112, 112, 0.25)',
    backgroundColor: '#fff'
}

const SimilarRecruitment = () =>{
    const recruitmentList=[
        {
            jobTitle : 'Senior UI/UX Designer',
            requestDate :'سه روز پیش',
            enCorporation : 'Fanavaran',
            faCorporation : 'فناوران اطلاعات خبره',
            city : 'تهران',
            logoSrc : corporationLogo
        },
        {
            jobTitle : 'Senior UI/UX Designer',
            requestDate :'سه روز پیش',
            enCorporation : 'Fanavaran',
            faCorporation : 'فناوران اطلاعات خبره',
            city : 'تهران',
            logoSrc : corporationLogo
        },
        {
            jobTitle : 'Senior UI/UX Designer',
            requestDate :'سه روز پیش',
            enCorporation : 'Fanavaran',
            faCorporation : 'فناوران اطلاعات خبره',
            city : 'تهران',
            logoSrc : corporationLogo
        },
        {
            jobTitle : 'Senior UI/UX Designer',
            requestDate :'سه روز پیش',
            enCorporation : 'Fanavaran',
            faCorporation : 'فناوران اطلاعات خبره',
            city : 'تهران',
            logoSrc : corporationLogo
        },
        {
            jobTitle : 'Senior UI/UX Designer',
            requestDate :'سه روز پیش',
            enCorporation : 'Fanavaran',
            faCorporation : 'فناوران اطلاعات خبره',
            city : 'تهران',
            logoSrc : corporationLogo
        },
    ];
    return recruitmentList.map((recruitment,i) => <Card key={i} sx={cardStyle}><JobCard jobDetails={recruitment}/></Card>
    )
}
export default SimilarRecruitment