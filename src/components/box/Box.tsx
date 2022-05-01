import React, { Component } from "react";
import "./Box.scss"
import { Autocomplete, IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export interface IBoxOption {
    type: "Select" | "TextField" | "Component"
    label: string
    width?: string
    options?: { name: string, id: number }[]
}

interface IProps {
    boxElements: IBoxOption[]
    searchOnClickHandler(): void
}

export default class SelectBox extends Component<IProps> {

    render() {

        let boxElements = this.props.boxElements.map((boxElement, index) => {
            switch (boxElement.type) {
                case "Select":
                    return <Autocomplete
                        // multiple
                        key={index}
                        sx={{ width: `${boxElement.width && boxElement.width}` }}
                        disablePortal
                        id="combo-box-demo"
                        options={boxElement.options!}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => <TextField {...params} label={boxElement.label} />}
                    />
                case "TextField":
                    return <TextField key={index} id="outlined-basic" label={boxElement.label} variant="outlined" />
            }
        })

        return (
            <div className="Box">
                <IconButton className="Box__btn" onClick={this.props.searchOnClickHandler} aria-label="search">
                    <SearchIcon />
                </IconButton>
                {boxElements}
            </div>
        )
    }
}