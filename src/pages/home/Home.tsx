import React, { Component, Dispatch } from "react";
import "./Home.scss"
import vector from "../../assets/img/vector.png"
import SelectBox, { ISelectBoxOption } from "../../components/selectBox/SelectBox";
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

interface IState {
    ranges: IRanges
}

interface IProps { }

class Home extends Component<IProps & ILinkStateToProps, IState> {

    selectBoxElements: ISelectBoxOption[] = []

    componentDidMount() {
        let { ranges } = this.props
        this.setState({ ranges })
        this.selectBoxElements = [
            {
                type: "Select",
                label: "استان",
                options: ranges.provinces,
                width: "110px"
            },
            {
                type: "Select",
                label: "شهر",
                options: [{ name: "fateme", id: 1 }],
                width: "110px"
            },
            {
                type: "Select",
                label: "حقوق",
                options: [{ name: "fateme", id: 1 }],
                width: "110px"
            },
            {
                type: "Select",
                label: "بیمه",
                options: [{ name: "fateme", id: 1 }],
                width: "110px"
            },
            {
                type: "Select",
                label: "نوع همکاری",
                options: [{ name: "fateme", id: 1 }],
                width: "120px"
            },
            {
                type: "TextField",
                label: "دسته بندی شغلی"
            }
        ]
    }

    //#region SelectBox

    searchOnClickHandler = async () => {
        // let ranges = await Axios.get<any, AxiosResponse<IRanges>>('/api/data/ranges')
        // let ranges = await Axios.post('/api/data/ranges')
        // return ranges.data
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
                    <SelectBox selectBoxElements={this.selectBoxElements} searchOnClickHandler={this.searchOnClickHandler} />
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