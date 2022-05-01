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
import { AxiosResponse } from "axios";

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

}

interface IState {
    ranges: IRanges
    data: IHomeDate
}

interface IProps { }

class Home extends Component<IProps & ILinkStateToProps, IState> {

    boxElements: IBoxOption[] = []

    // state={
    //     data:{}
    // }

    componentDidMount() {
        let { ranges } = this.props

        let insurnaceSelectOptopns = ranges.homes.insurnace.map((option, index) => { return { name: option, id: index } })
        let categoriesSelectOptopns = ranges.homes.categories.map((option, index) => { return { name: option, id: index } })
        let cooperationSelectOptopns = ranges.homes.cooperation.map((option, index) => { return { name: option, id: index } })
        let educationSelectOptopns = ranges.homes.education.map((option, index) => { return { name: option, id: index } })
        let genderSelectOptopns = ranges.homes.gender.map((option, index) => { return { name: option, id: index } })

        this.setState({ ranges })
        this.boxElements = [
            {
                type: "Select",
                label: "استان",
                options: ranges.provinces,
                width: "190px"
            },
            // {
            //     type: "experienceComponent",
            //     label: "سابقه کار",
            //     payload: { min: ranges.homes.min_experience, max: ranges.homes.max_experience },
            //     width: "110px"
            // },
            // {
            //     type: "salaryComponent",
            //     label: "حقوق",
            //     payload: { min: ranges.homes.min_salary, max: ranges.homes.max_salary },
            //     width: "110px"
            // },
            // {
            //     type: "Select",
            //     label: "بیمه",
            //     options: insurnaceSelectOptopns,
            //     width: "110px"
            // },
            // {
            //     type: "Select",
            //     label: "جنسیت",
            //     options: genderSelectOptopns,
            //     width: "120px"
            // },
            // {
            //     type: "Select",
            //     label: "وضعیت تحصیل",
            //     options: educationSelectOptopns,
            //     width: "120px"
            // },
            // {
            //     type: "Select",
            //     label: "نوع قرارداد",
            //     options: cooperationSelectOptopns,
            //     width: "120px"
            // },
            {
                type: "Select",
                label: "دسته بندی شغلی",
                options: categoriesSelectOptopns,
                width: "190px"
            },
            {
                type: "TextField",
                label: "عنوان شغلی",
                width: "190px"
            }
        ]
    }

    //#region Box

    searchOnClickHandler = async () => {
<<<<<<< HEAD
        // let ranges = await Axios.get<any, AxiosResponse<IRanges>>('/api/data/ranges')
        // let ranges = await Axios.post('/api/data/ranges')
        // return ranges.data
=======
        // let renges = await Axios.get<any, AxiosResponse<IRanges>>('/api/data/ranges')
        let respone = await Axios.post('/api/search/recruiment/Home/', {
            // data
        })
        // return renges.data
>>>>>>> fateme-ebrahimzade
        // should to go to second page
        // spinner
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
                    <Box boxElements={this.boxElements} searchOnClickHandler={this.searchOnClickHandler} />
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

export default connect(mapStateToProps)(Home)