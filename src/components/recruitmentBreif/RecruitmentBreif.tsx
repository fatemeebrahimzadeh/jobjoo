import { render } from "@testing-library/react";
import React, { Component } from "react";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import "./RecruitmentBreif.scss"

export default class RecruitmentBreif extends Component {
    render() {
        return (
            <div className="RecruitmentBreif">
                <BookmarkBorderIcon className="bookmark-icon" />
                <h3 className="RecruitmentBreif--header">Senior UI/UX Designer</h3>
                <h4>
                    فناوران اطلاعات خبره | Fanavaran
                    <CorporateFareIcon className="corporate-icon" />
                </h4>
            </div>
        )
    }
}