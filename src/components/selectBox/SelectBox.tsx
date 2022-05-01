import React, { Component } from "react";
import "./SelectBox.scss"
import { Autocomplete, IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export interface ISelectBoxOption {
    type: "Select" | "TextField"
    label: string
    width?: string
    options?: { name: string, id: number }[]
}

interface IProps {
    selectBoxElements: ISelectBoxOption[]
    searchOnClickHandler(): void
}

export default class SelectBox extends Component<IProps> {

    render() {

        let selectBoxElements = this.props.selectBoxElements.map((selectBoxElement, index) => {
            switch (selectBoxElement.type) {
                case "Select":
                    return <Autocomplete
                        key={index}
                        sx={{ width: `${selectBoxElement.width && selectBoxElement.width}` }}
                        disablePortal
                        id="combo-box-demo"
                        options={selectBoxElement.options!}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => <TextField {...params} label={selectBoxElement.label} />}
                    />
                case "TextField":
                    return <TextField key={index} id="outlined-basic" label={selectBoxElement.label} variant="outlined" />
            }
        })

        return (
            <div className="selectBox">
                <IconButton className="selectBox__btn" onClick={this.props.searchOnClickHandler} aria-label="search">
                    <SearchIcon />
                </IconButton>
                {selectBoxElements}
            </div>
        )
    }
}