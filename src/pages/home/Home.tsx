import React, { Component } from "react";
import "./Home.scss"
import vector from "../../assets/img/vector.png"
import SelectBox from "../../components/selectBox/SelectBox";

export default class Home extends Component {
    render() {
        return (
            <main className="HomePage">
                <div className="homeImg">
                    <img src={vector} alt="vector" />
                </div>
                <section className="searchSection">
                    <h1>جابجو بزرگترین سامانه کاریابی آنلاین</h1>
                    <h3>موتور جستجو هوشمند آگهی</h3>
                    <div className="selectBox">
                        <SelectBox />
                    </div>
                    {/* should be dynamic */}
                    <div className="companyLogos">
                        <div className="companyLogo"></div>
                        <div className="companyLogo"></div>
                        <div className="companyLogo"></div>
                        <div className="companyLogo"></div>
                        <div className="companyLogo"></div>
                        <div className="companyLogo"></div>
                        <div className="companyLogo"></div>
                        <div className="companyLogo"></div>
                        <div className="companyLogo"></div>
                    </div>
                </section>
            </main>
        )
    }
}