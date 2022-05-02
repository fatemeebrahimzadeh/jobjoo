import React, { Component, Dispatch } from "react";
import "./Home.scss"
import vector from "../../assets/img/vector.png"
import Box, { IBoxOption } from "../../components/box/Box";
import iranEstekhdamLogo from "../../assets/img/iranEstekhdamLogo.png"
import jobinjaLogo from "../../assets/img/jobinjaLogo.png"
import jobvisionLogo from "../../assets/img/jobvisionLogo.png"
import sheypourLogo from "../../assets/img/sheypourLogo.png"
import { connect } from "react-redux";
import { IAppState } from "../../store/configureStore";
import { IRanges } from "../../@types/entities/ranges";
import { AppAction } from "../../@types/store";
import { Axios } from "../../utils/axios";
import { IRecruiments } from "../../@types/entities/recruiment";
import { setRecruimentsAction } from "../../store/actions/recruiment";

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
}

interface IProps { }

class Home extends Component<IProps & ILinkStateToProps & ILinkDispatchToProps, IState> {

    boxElements: IBoxOption[] = []
    defaultData: IHomeDate = {
        provinces: null,
        jobTitle: "",
        categories: null
    }

    state = {
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
        data: this.defaultData
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
        let response = this.state.data.jobTitle ? await Axios.post<any, IRecruiments>('/api/search/recruiment/1/', {
            search: this.state.data.jobTitle,
            province: this.state.data.provinces?.name,
            category: this.state.data.categories?.name
        }) : await Axios.post<any, IRecruiments>('/api/search/recruiment/1/', {
            province: this.state.data.provinces?.name,
            category: this.state.data.categories?.name
        })

        console.log("response", response)
        this.props.SET_RECRUIMENTS(response)
        // spinner
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
            <main className="HomePage">
                <div className="homeImg">
                    <img src={vector} alt="vector" />
                </div>
                <section className="searchSection">
                    <h1>جابجو بزرگترین سامانه جست‌و‌جوی آگهی استخدام </h1>
                    <h3>با بیش از 1000 آگهی بروز از سایت‌های معتبر کاریابی</h3>
                    <Box
                        boxElements={this.boxElements}
                        searchOnClickHandler={this.searchOnClickHandler}
                        onChangeHandler={this.onChangeHandler} />
                    <div className="companyLogos">
                        {companyLogosImage}
                    </div>
                </section>
            </main>
        )
    }
}

interface ILinkStateToProps {
    ranges: IRanges
}

function mapStateToProps(state: IAppState): ILinkStateToProps {
    return { ranges: state.ranges }
}

interface ILinkDispatchToProps {
    SET_RECRUIMENTS: (recruiment: IRecruiments) => void
}

function mapDispatchtoProps(dispatch: Dispatch<AppAction>) {
    return {
        SET_RECRUIMENTS: (recruiment: IRecruiments) => { dispatch(setRecruimentsAction(recruiment)) }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Home)