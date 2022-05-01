import React, { Component } from "react";
import RecruitmentBreif from "../../components/recruitmentBreif/RecruitmentBreif";
import RecruitmentSpecifications from "../../components/recruitmentSpecifications/RecruitmentSpecifications";
import SimilarRecruitmentsList from "../../components/similarRecruitments/SimilarRecruitmentsList";
import "./Recruitment.scss"
// RecruitmentSpecifications

export default class Recruitment extends Component {
    render() {
        return (
            <main className="Recruitment">
                <section>
                    {/* <RecruitmentBreif /> */}
                    {/* <RecruitmentSpecifications /> */}
                </section>
                <SimilarRecruitmentsList />
            </main >
        )
    }
}