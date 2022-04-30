import React, { Component } from "react";
import "./SelectBox.scss"
import { Autocomplete, IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface IProps {
    selectBoxOptions: {
        type: "Select" | "TextField"
        label: string
        width?: string
        options?: { label: string, id: number }[]
    }[]
}

export default class SelectBox extends Component<IProps> {
    render() {

        let selectBoxElements = this.props.selectBoxOptions.map((selectBoxOption, index) => {
            switch (selectBoxOption.type) {
                case "Select":
                    return <Autocomplete
                        key={index}
                        sx={{ width: `${selectBoxOption.width && selectBoxOption.width}` }}
                        disablePortal
                        id="combo-box-demo"
                        options={selectBoxOption.options!}
                        renderInput={(params) => <TextField {...params} label={selectBoxOption.label} />}
                    />
                case "TextField":
                    return <TextField key={index} id="outlined-basic" label={selectBoxOption.label} variant="outlined" />
            }
        })

        return (
            <div className="selectBox">
                <IconButton className="selectBox__btn" onClick={() => { console.log("kug") }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                {selectBoxElements}
            </div>
        )
    }
}