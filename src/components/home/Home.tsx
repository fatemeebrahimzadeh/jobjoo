import React, { Component } from "react";
import "./Home.scss"

export default class Home extends Component {
    render() {
        return (
            <main className="HomePage">
                <div className="homeImg">
                    <img src="./Image 2.png" alt="vector" />
                </div>
                <section className="searchSection">
                    <h1>جابجو بزرگترین سامانه کاریابی آنلاین</h1>
                    <h3>موتور جستجو هوشمند آگهی</h3>
                    <div className="selectBox"></div>
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