import { TextField } from "@mui/material";
import React, { Component } from "react";
import "./Limitation.scss"
interface IProps {
    limitationShow: boolean
}

class Limitation extends Component<IProps>{
    render() {
        return (
            <>
                {this.props.limitationShow && <div className="dropdown">
                    <label>
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                        <span>:از</span>
                    </label>
                    <label>
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                        <span >:تا</span>
                    </label>
                </div>}
            </>
        )
    }
}

export default Limitation