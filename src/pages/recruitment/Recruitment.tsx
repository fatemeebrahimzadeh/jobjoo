import React, { Component } from "react";
import RecruitmentBreif from "../../components/recruitmentBreif/RecruitmentBreif";
import "./Recruitment.scss"
// RecruitmentSpecifications

export default class Recruitment extends Component {
    render() {
        return (
            <main className="Recruitment">
                <section>
                    <RecruitmentBreif />
                    {/* <div className="RecruitmentSpecifications"></div> */}
                </section>
                {/* <div className="similarRecruitment"></div> */}
            </main >
        )
    }
}