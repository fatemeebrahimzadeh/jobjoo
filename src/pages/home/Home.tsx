import React, { Component, Dispatch } from "react";
import "./Home.scss"
import vector from "../../assets/img/vector.png"
import CustomBox, { IBoxOption } from "../../components/box/Box";
import iranEstekhdamLogo from "../../assets/img/iranEstekhdamLogo.png"
import jobinjaLogo from "../../assets/img/jobinjaLogo.png"
import jobvisionLogo from "../../assets/img/jobvisionLogo.png"
import sheypourLogo from "../../assets/img/sheypourLogo.png"
import { connect } from "react-redux";
import { IAppState } from "../../store/configureStore";
import { IRanges } from "../../@types/entities/ranges";
import { AppAction } from "../../@types/store";
import { Axios } from "../../utils/axios";
import { IRecruiment } from "../../@types/entities/recruiment";
// import { setRecruimentsAction } from "../../store/actions/recruiment";
import { AxiosResponse } from "axios";
import { Card, Grid, Pagination } from "@mui/material";
import JobCard from "../../components/jobCard/JobCard";
import { Link } from "react-router-dom";
import NavbarVertical from "../../components/navbarVertical/NavbarVertical";

let companyLogos: {
    img: string
    linkAddress: string
}[] = [
        {
            img: sheypourLogo,
            linkAddress: "https://www.sheypoor.com/%D8%AA%D9%87%D8%B1%D8%A7%D9%86/%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85"
        },
        {
            img: jobinjaLogo,
            linkAddress: "https://jobinja.ir/"
        },
        {
            img: jobvisionLogo,
            linkAddress: "https://jobvision.ir/"
        },
        {
            img: iranEstekhdamLogo,
            linkAddress: "https://iranestekhdam.ir/"
        },
        {
            img: sheypourLogo,
            linkAddress: "https://www.sheypoor.com/%D8%AA%D9%87%D8%B1%D8%A7%D9%86/%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85"
        },
        {
            img: jobinjaLogo,
            linkAddress: "https://jobinja.ir/"
        }
    ]

export interface IHomeDate {
    provinces?: { name: string, id: number } | null
    jobTitle?: string
    categories?: { name: string, id: number } | null
}

interface IState {
    ranges: IRanges
    data: IHomeDate
    mode: "Home" | "recruiments"
}

interface IProps { }

// class Home extends Component<IProps & ILinkStateToProps & ILinkDispatchToProps, IState> {
class Home extends Component<IProps & ILinkStateToProps, IState> {

    boxElements: IBoxOption[] = []
    jobsList: IRecruiment[] = []
    defaultData: IHomeDate = {
        provinces: null,
        jobTitle: "",
        categories: null
    }

    state: IState = {
        ranges: {
            homes: {
                name: "",
                min_salary: 0,
                max_salary: 0,
                min_experience: 0,
                max_experience: 0,
                categories: [],
                education: [],
                cooperation: [],
                gender: [],
                insurnace: []
            },
            provinces: []
        },
        data: this.defaultData,
        mode: "Home"
    }

    componentDidMount() {
        let { ranges } = this.props
        this.setState({ ranges })

        let categoriesSelectOptopns = ranges.homes.categories.map((option, index) => { return { name: option, id: index } })

        this.boxElements = [
            {
                type: "Select",
                label: "استان",
                options: ranges.provinces,
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
    }

    //#region Box

    searchOnClickHandler = async () => {
        let response = this.state.data.jobTitle ? await Axios.post<any, AxiosResponse<{ result: IRecruiment[] }>>('/api/search/recruiment/1/', {
            search: this.state.data.jobTitle,
            province: this.state.data.provinces?.name,
            category: this.state.data.categories?.name
        }) : await Axios.post<any, AxiosResponse<{ result: IRecruiment[] }>>('/api/search/recruiment/1/', {
            province: this.state.data.provinces?.name,
            category: this.state.data.categories?.name
        })

        console.log("response", response)
        // this.props.SET_RECRUIMENTS(response.data.result)
        this.jobsList = response.data.result
        this.setState({ mode: "recruiments" })
    }

    onChangeHandler = (value: { name: string, id: number } | null, fieldName: keyof IHomeDate, event?: React.SyntheticEvent<Element, Event>) => {
        this.setState((prevState: IState) => ({
            ...prevState,
            data: {
                ...prevState.data,
                [fieldName]: value
            }
        }))
    }

    //#endregion

    render() {

        let companyLogosImage = companyLogos.map((companyLogo, index) => {
            return <a
                key={index} href={companyLogo.linkAddress}>
                <img src={companyLogo.img} alt="companyLogo" />
            </a>
        })

        return (
            <>
                {this.state.mode === "Home" ? (
                    <main className="HomePage">
                        <div className="homeImg">
                            <img src={vector} alt="vector" />
                        </div>
                        <section className="searchSection">
                            <h1>جابجو بزرگترین سامانه جست‌و‌جوی آگهی استخدام </h1>
                            <h3>با بیش از 1000 آگهی بروز از سایت‌های معتبر کاریابی</h3>
                            <CustomBox
                                boxElements={this.boxElements}
                                searchOnClickHandler={this.searchOnClickHandler}
                                onChangeHandler={this.onChangeHandler} />
                            <div className="companyLogos">
                                {companyLogosImage}
                            </div>
                        </section>
                    </main>
                ) : (
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
                                    boxElements={this.boxElements}
                                    searchOnClickHandler={this.searchOnClickHandler}
                                    onChangeHandler={this.onChangeHandler} />
                            </Card>
                            {this.jobsList.map((job, i) =>
                                <Link to="/recruitment" onClick={() => { }} >
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
                                marginTop: '44px',
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
            </>
        )
    }
}

interface ILinkStateToProps {
    ranges: IRanges
}

function mapStateToProps(state: IAppState): ILinkStateToProps {
    return { ranges: state.ranges }
}

// interface ILinkDispatchToProps {
//     SET_RECRUIMENTS: (recruiments: IRecruiment[]) => void
// }

// function mapDispatchtoProps(dispatch: Dispatch<AppAction>) {
//     return {
//         SET_RECRUIMENTS: (recruiments: IRecruiment[]) => { dispatch(setRecruimentsAction(recruiments)) }
//     }
// }

// export default connect(mapStateToProps, mapDispatchtoProps)(Home)
export default connect(mapStateToProps)(Home)