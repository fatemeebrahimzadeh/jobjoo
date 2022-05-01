import { render } from "@testing-library/react";
import React, { Component } from "react";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import "./RecruitmentBreif.scss"
import { Button } from "@mui/material";

export default class RecruitmentBreif extends Component {
    render() {
        return (
            <div className="RecruitmentBreif">

                <div className="RecruitmentBreif--bookmark-icon">
                    <BookmarkBorderIcon className="bookmark-icon" />
                </div>
                <h3 className="RecruitmentBreif--header">Senior UI/UX Designer</h3>
                <div className="RecruitmentBreif--text">
                    <h4>
                        فناوران اطلاعات خبره | Fanavaran
                        <CorporateFareIcon className="corporate-icon" />
                    </h4>
                    <h4>
                        تهران
                        <PersonPinCircleIcon className="location-icon" />
                    </h4>
                    <h6 className="time-span">سه روز پیش</h6>
                </div>
                <Button onClick={() => { }} variant="contained" size="large">مشاهده آگهی در جاباینجا</Button>
            </div>
        )
    }
}