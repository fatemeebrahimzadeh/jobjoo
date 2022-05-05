
import React, { useState, useEffect } from "react";
import CustomBox from "../../components/box/Box";
import { Card, Grid, Pagination } from "@mui/material";
import NavbarVertical from '../../components/navbarVertical/NavbarVertical'
import JobCard from "../../components/jobCard/JobCard";
import corporationLogo from '../../assets/img/corporation-logo.jpg'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Axios } from "../../utils/axios";
import { setRecruimentsAction } from "../../store/actions/recruiment"
import { setSelectedRecruimentAction } from "../../store/actions/recruiment"

import "./Jobs.scss"

const Jobs = (props) => {

    // let insurnaceSelectOptopns = props.ranges.homes.insurnace.map((option, index) => { return { name: option, id: index } })
    // let cooperationSelectOptopns = props.ranges.homes.cooperation.map((option, index) => { return { name: option, id: index } })
    // let educationSelectOptopns = props.ranges.homes.education.map((option, index) => { return { name: option, id: index } })
    // let genderSelectOptopns = props.ranges.homes.gender.map((option, index) => { return { name: option, id: index } })
    let categoriesSelectOptopns = props.ranges.homes.categories.map((option, index) => { return { name: option, id: index } })
    const [provinces, setProvinces] = useState(null);
    const [jobTitle, setJobTitle] = useState("");
    const [categories, setCategories] = useState(null);

    const jobsList = props.recruiments.map((recruiment, index) => {
        return (
            {
                jobTitle: `${recruiment.title}`,
                requestDate: 'سه روز پیش',
                enCorporation: 'Fanavaran',
                faCorporation: 'فناوران اطلاعات خبره',
                city: `${recruiment.city}`,
                logoSrc: corporationLogo
            }
        )
    })

    const boxElements = [
        {
            type: "Select",
            label: "استان",
            options: props.ranges.provinces,
            width: "190px",
            fieldName: "provinces"
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

        let response = jobTitle ? await Axios.post('/api/search/recruiment/1/', {
            search: jobTitle,
            province: provinces?.name,
            category: categories?.name
        }) : await Axios.post('/api/search/recruiment/1/', {
            province: provinces?.name,
            category: categories?.name
        })

        console.log("response", response)
        props.SET_RECRUIMENTS(response.data.result)
    }

    const onChangeHandler = (value, fieldName, event) => {
        switch (fieldName) {
            case "provinces":
                setProvinces(value)
                break;
            case "categories":
                setCategories(value)
                break;
            case "jobTitle":
                setJobTitle(value)
                break;
            default:
                break;
        }
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
                    <CustomBox
                        boxElements={boxElements}
                        searchOnClickHandler={searchOnClickHandler}
                        onChangeHandler={onChangeHandler} />
                </Card>
                {jobsList.map((job, i) => <Link to="/recruitment" onClick={() => { props.SET_SELECTED_RECRUIMENT(job) }} >
                    <Card key={i} sx={{
                        width: '100%',
                        height: '180px',
                        padding: '33px 20px 22px 39px',
                        marginTop: '15px',
                        borderRadius: '15px',
                        borderColor: 'rgba(112, 112, 112, 0.25)',
                        backgroundColor: '#fff'
                    }}>
                        <JobCard jobDetails={job} />
                    </Card>
                </Link>)}
                <Pagination sx={{ display: "flex", justifyContent: "center", margin: "10px" }} count={10} />
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
    return { ranges: state.ranges, recruiments: state.recruiments }
}

function mapDispatchtoProps(dispatch) {
    return {
        SET_RECRUIMENTS: (recruiments) => { dispatch(setRecruimentsAction(recruiments)) },
        SET_SELECTED_RECRUIMENT: (recruiment) => { dispatch(setSelectedRecruimentAction(recruiment)) }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Jobs);