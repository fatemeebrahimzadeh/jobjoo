import { Card } from "@mui/material";
import JobCard from "../jobCard/JobCard";
import corporationLogo from "../../assets/img/corporation-logo.jpg";
import { IRecruiment } from "../../@types/entities/recruiment";




interface IProps {
    recruitments: IRecruiment[]
}

const SimilarRecruitment = (props: IProps) => {

    return (<>
        {props.recruitments.map((recruitment, i) => <JobCard  key={i} jobDetails={recruitment} />)}
    </>)
}
export default SimilarRecruitment