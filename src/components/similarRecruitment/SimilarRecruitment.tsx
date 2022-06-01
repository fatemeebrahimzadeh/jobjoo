import { Card } from "@mui/material";
import JobCard from "../jobCard/JobCard";
import corporationLogo from "../../assets/img/corporation-logo.jpg";
import { IRecruiment } from "../../@types/entities/recruiment";
import { Link } from "react-router-dom";




interface IProps {
    recruitments: IRecruiment[]
}

const SimilarRecruitment = (props: IProps) => {

    return (<>
        {props.recruitments.map((recruitment, i) =>
            <Link key={i} to="/recruitment" state={recruitment} >
                <JobCard key={i} jobDetails={recruitment} />
            </Link>)}
    </>)
}
export default SimilarRecruitment