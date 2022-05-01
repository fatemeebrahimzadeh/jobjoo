<<<<<<< HEAD
import { Box, Card, Grid } from "@mui/material";
import CustomBox from "../components/box/Box";
import './jobs.css'
=======
import {Card, Grid} from "@mui/material";
import Test2 from "../components/test/Test2";
>>>>>>> fateme-karimi
import NavbarVertical from '../components/navbar/NavbarVertical'
import JobCard from "../components/jobCard/JobCard";
import corporationLogo from '../assets/img/corporation-logo.jpg'
import { connect } from "react-redux";

const Jobs = (props) => {
    // get the jobs from api and drop jobsList
    // set api for selectBox (test2)

    const jobsList = [
        {
            jobTitle: 'Senior UI/UX Designer',
            requestDate: 'سه روز پیش',
            enCorporation: 'Fanavaran',
            faCorporation: 'فناوران اطلاعات خبره',
            city: 'تهران',
            logoSrc: corporationLogo
        },
        {
            jobTitle: 'Senior UI/UX Designer',
            requestDate: 'سه روز پیش',
            enCorporation: 'Fanavaran',
            faCorporation: 'فناوران اطلاعات خبره',
            city: 'تهران',
            logoSrc: corporationLogo
        },
        {
            jobTitle: 'Senior UI/UX Designer',
            requestDate: 'سه روز پیش',
            enCorporation: 'Fanavaran',
            faCorporation: 'فناوران اطلاعات خبره',
            city: 'تهران',
            logoSrc: corporationLogo
        },
        {
            jobTitle: 'Senior UI/UX Designer',
            requestDate: 'سه روز پیش',
            enCorporation: 'Fanavaran',
            faCorporation: 'فناوران اطلاعات خبره',
            city: 'تهران',
            logoSrc: corporationLogo
        },
        {
            jobTitle: 'Senior UI/UX Designer',
            requestDate: 'سه روز پیش',
            enCorporation: 'Fanavaran',
            faCorporation: 'فناوران اطلاعات خبره',
            city: 'تهران',
            logoSrc: corporationLogo
        },
    ];

    let insurnaceSelectOptopns = props.ranges.homes.insurnace.map((option, index) => { return { name: option, id: index } })
    let categoriesSelectOptopns = props.ranges.homes.categories.map((option, index) => { return { name: option, id: index } })
    let cooperationSelectOptopns = props.ranges.homes.cooperation.map((option, index) => { return { name: option, id: index } })
    let educationSelectOptopns = props.ranges.homes.education.map((option, index) => { return { name: option, id: index } })
    let genderSelectOptopns = props.ranges.homes.gender.map((option, index) => { return { name: option, id: index } })

    const boxElements = [
        {
            type: "Select",
            label: "استان",
            options: props.ranges.provinces,
            width: "190px",
            fieldName: "provinces"
        },
        {
            type: "experienceComponent",
            label: "سابقه کار",
            payload: { min: props.ranges.homes.min_experience, max: props.ranges.homes.max_experience },
            width: "110px"
        },
        {
            type: "salaryComponent",
            label: "حقوق",
            payload: { min: props.ranges.homes.min_salary, max: props.ranges.homes.max_salary },
            width: "110px"
        },
        {
            type: "Select",
            label: "بیمه",
            options: insurnaceSelectOptopns,
            width: "110px"
        },
        {
            type: "Select",
            label: "جنسیت",
            options: genderSelectOptopns,
            width: "120px"
        },
        {
            type: "Select",
            label: "وضعیت تحصیل",
            options: educationSelectOptopns,
            width: "120px"
        },
        {
            type: "Select",
            label: "نوع قرارداد",
            options: cooperationSelectOptopns,
            width: "120px"
        },
        {
            type: "Select",
            label: "دسته بندی شغلی",
            options: categoriesSelectOptopns,
            width: "190px",
            fieldName: "categories"
        },
        {
            type: "TextField",
            label: "عنوان شغلی",
            width: "190px",
            fieldName: "jobTitle"
        }
    ]

    const searchOnClickHandler = async () => {

        // axios
        // console.log("response", response)
        // this.props.history.push('/jobs');
        // spinner
    }

    const onChangeHandler = (value, fieldName, event) => {
        // this.setState((prevState: IState) => ({
        //     ...prevState,
        //     data: {
        //         ...prevState.data,
        //         [fieldName]: value
        //     }
        // }))
    }

    return (
        <Grid container spacing={10} justifyContent='center'>
            <Grid item xs={6}>
                <Card sx={{
                    width: '100%',
                    height: '62px',
                    marginTop: '44px',
                    marginBottom: '25px',
                    borderRadius: '15px',
                    border: '1px',
                    borderColor: 'rgba(112, 112, 112, 0.39)',
                    backgroundColor: '#fff',
                }}>
                    <CustomBox boxElements={boxElements} searchOnClickHandler={searchOnClickHandler} onChangeHandler={onChangeHandler} />
                </Card>
                {jobsList.map((job, i) => <Card key={i} sx={{
                    width: '100%',
                    height: '180px',
                    padding: '33px 20px 22px 39px',
                    marginTop: '15px',
                    borderRadius: '15px',
                    borderColor: 'rgba(112, 112, 112, 0.25)',
                    backgroundColor: '#fff'
                }}>
                    <JobCard jobDetails={job} />
                </Card>)}
            </Grid>
            <Grid item xs={3}>
                <Card sx={{
                    marginTop: '44px', height: '100%' - 20,
                    padding: '31px 16.4px 40px 21.5px',
                    borderRadius: '15px',
                    borderColor: 'rgba(112, 112, 112, 0.25)',
                    backgroundColor: '#fff'
                }}>
                    <NavbarVertical />
                </Card>
            </Grid>
        </Grid>
    )
}

function mapStateToProps(state) {
    return { ranges: state.ranges }
}

export default connect(mapStateToProps)(Jobs);