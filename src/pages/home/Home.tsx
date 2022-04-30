import React, { Component } from "react";
import "./Home.scss"
import vector from "../../assets/img/vector.png"
import SelectBox from "../../components/selectBox/SelectBox";
import iranEstekhdamLogo from "../../assets/img/iranEstekhdamLogo.png"
import jobinjaLogo from "../../assets/img/jobinjaLogo.png"
import jobvisionLogo from "../../assets/img/jobvisionLogo.png"
import sheypourLogo from "../../assets/img/sheypourLogo.png"

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

let selectBoxOptions: {
    type: "Select" | "TextField"
    label: string
    width?: string
    options?: { label: string, id: number }[]
}[] = [
        {
            type: "Select",
            label: "استان",
            options: [{ label: "fateme", id: 1 }],
            width: "110px"
        },
        {
            type: "Select",
            label: "شهر",
            options: [{ label: "fateme", id: 1 }],
            width: "110px"
        },
        {
            type: "Select",
            label: "حقوق",
            options: [{ label: "fateme", id: 1 }],
            width: "110px"
        },
        {
            type: "Select",
            label: "بیمه",
            options: [{ label: "fateme", id: 1 }],
            width: "110px"
        },
        {
            type: "Select",
            label: "نوع همکاری",
            options: [{ label: "fateme", id: 1 }],
            width: "120px"
        },
        {
            type: "TextField",
            label: "دسته بندی شغلی"
        }
    ]

export default class Home extends Component {
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
                    <SelectBox selectBoxOptions={selectBoxOptions} />
                    <div className="companyLogos">
                        {companyLogosImage}
                    </div>
                </section>
            </main>
        )
    }
}