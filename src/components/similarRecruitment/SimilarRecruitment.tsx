import { Card } from "@mui/material";
import JobCard from "../jobCard/JobCard";
import corporationLogo from "../../assets/img/corporation-logo.jpg";
import { IRecruiment } from "../../@types/entities/recruiment";


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
    recruitments: IRecruiment[]
}

const SimilarRecruitment = (props: IProps) => {

    return (<>
        {props.recruitments.map((recruitment, i) => <Card key={i} sx={cardStyle}><JobCard jobDetails={recruitment} /></Card>)}
    </>)
}
export default SimilarRecruitment