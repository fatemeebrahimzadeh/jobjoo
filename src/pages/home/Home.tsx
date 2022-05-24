import React, { Component, Dispatch } from "react";
import "./Home.scss"
import vector from "../../assets/img/vector.png"
import CustomBox, { IOption as IBoxOption, IData as IBoxData } from "../../components/box/Box";
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
import NavbarVertical, { IOption as IVerticalNavbarOption, IData as IVerticalNavbarData } from "../../components/navbarVertical/NavbarVertical";

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

interface IState {
    ranges: IRanges
    boxData: IBoxData
    mode: "Home" | "recruiments",
    collapsejobCategory: boolean,
    collapsecooperationType: boolean,
    collapseeducation: boolean,
    collapsegender: boolean,
    collapseinsurnace: boolean
}

interface IProps { }

// class Home extends Component<IProps & ILinkStateToProps & ILinkDispatchToProps, IState> {
class Home extends Component<IProps & ILinkStateToProps, IState> {

    boxElements: IBoxOption[] = []
    jobsList: IRecruiment[] = []
    navbarVerticalElements: IVerticalNavbarOption[] = []
    categoriesSelectOptopns: { name: string, id: number }[] = []
    CooperationSelectOptopns: { name: string, id: number }[] = []
    educationSelectOptopns: { name: string, id: number }[] = []
    genderSelectOptopns: { name: string, id: number }[] = []
    insurnaceSelectOptopns: { name: string, id: number }[] = []
    defaultBoxData: IBoxData = {
        provinces: undefined,
        jobTitle: "",
        categories: undefined
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
        boxData: this.defaultBoxData,
        mode: "Home",
        collapsejobCategory: false,
        collapsecooperationType: false,
        collapseeducation: false,
        collapsegender: false,
        collapseinsurnace: false
    }

    componentDidMount() {
        let { ranges } = this.props
        this.setState({ ranges })

        this.categoriesSelectOptopns = ranges.homes.categories.map((option, index) => { return { name: option, id: index } })
        this.CooperationSelectOptopns = ranges.homes.cooperation.map((option, index) => { return { name: option, id: index } })
        this.educationSelectOptopns = ranges.homes.education.map((option, index) => { return { name: option, id: index } })
        this.genderSelectOptopns = ranges.homes.gender.map((option, index) => { return { name: option, id: index } })
        this.insurnaceSelectOptopns = ranges.homes.insurnace.map((option, index) => { return { name: option, id: index } })
    }

    //#region Box

    searchOnClickHandler = async () => {
        let response = this.state.boxData.jobTitle ? await Axios.post<any, AxiosResponse<{ result: IRecruiment[] }>>('/api/search/recruiment/1/', {
            search: this.state.boxData.jobTitle,
            province: this.state.boxData.provinces?.name,
            category: this.state.boxData.categories?.name
        }) : await Axios.post<any, AxiosResponse<{ result: IRecruiment[] }>>('/api/search/recruiment/1/', {
            province: this.state.boxData.provinces?.name,
            category: this.state.boxData.categories?.name
        })

        console.log("response", response)
        // this.props.SET_RECRUIMENTS(response.boxData.result)
        this.jobsList = response.data.result
        this.setState({ mode: "recruiments" })
    }

    boxOnChangeHandler = (value: { name: string, id: number } | null, fieldName: keyof IBoxData, event?: React.SyntheticEvent<Element, Event>) => {
        this.setState((prevState: IState) => ({
            ...prevState,
            boxData: {
                ...prevState.boxData,
                [fieldName]: value
            }
        }))
    }

    //#endregion

    //#region NavbarVertical
    jobCategoryHandleClick = () => {
        this.setState({ collapsejobCategory: !this.state.collapsejobCategory })
    };
    cooperationTypeHandleClick = () => {
        this.setState({ collapsecooperationType: !this.state.collapsecooperationType })
    };
    educationHandleClick = () => {
        this.setState({ collapseeducation: !this.state.collapseeducation })
    };
    genderHandleClick = () => {
        this.setState({ collapsegender: !this.state.collapsegender })
    };
    insurnaceHandleClick = () => {
        this.setState({ collapseinsurnace: !this.state.collapseinsurnace })
    };

    verticalNavbarOnChangeHandler = (value: { name: string, id: number } | null, fieldName: keyof IVerticalNavbarData, event?: React.SyntheticEvent<Element, Event>) => {
        this.setState((prevState: IState) => ({
            ...prevState,
            boxData: {
                ...prevState.boxData,
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

        this.boxElements = [
            {
                type: "Select",
                label: "استان",
                options: this.state.ranges.provinces,
                width: "190px",
                fieldName: "provinces"
            },
            {
                type: "Select",
                label: "دسته بندی شغلی",
                options: this.categoriesSelectOptopns,
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

        this.navbarVerticalElements = [
            {
                label: "دسته بندی شغلی",
                options: this.categoriesSelectOptopns,
                fieldName: "navbarVerticalCategories",
                collapseHandler: this.jobCategoryHandleClick,
                collapse: this.state.collapsejobCategory
            },
            {
                label: "نوع همکاری",
                options: this.CooperationSelectOptopns,
                fieldName: "navbarVerticalCooperation",
                collapseHandler: this.cooperationTypeHandleClick,
                collapse: this.state.collapsecooperationType
            },
            {
                label: "میزان تحصیلات",
                options: this.educationSelectOptopns,
                fieldName: "navbarVerticalEducation",
                collapseHandler: this.educationHandleClick,
                collapse: this.state.collapseeducation
            },
            {
                label: "جنسیت",
                options: this.genderSelectOptopns,
                fieldName: "navbarVerticalGender",
                collapseHandler: this.genderHandleClick,
                collapse: this.state.collapsegender
            },
            {
                label: "بیمه",
                options: this.insurnaceSelectOptopns,
                fieldName: "navbarVerticalInsurnace",
                collapseHandler: this.insurnaceHandleClick,
                collapse: this.state.collapseinsurnace
            }
        ]

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
                                onChangeHandler={this.boxOnChangeHandler} />
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
                                    onChangeHandler={this.boxOnChangeHandler}
                                    searchOnClickHandler={this.searchOnClickHandler} />
                            </Card>
                            {this.jobsList.map((job, i) =>
                                <Link key={i} to="/recruitment" onClick={() => { }} >
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
                                <NavbarVertical
                                    navbarVerticalElements={this.navbarVerticalElements}
                                    onChangeHandler={this.verticalNavbarOnChangeHandler} />
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