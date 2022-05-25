import React, { Component } from "react";
import "./Box.scss"
import { Autocomplete, Button, ButtonGroup, IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

export interface IData {
    provinces?: { name: string, id: number }
    jobTitle?: string
    categories?: { name: string, id: number }
}

export interface IOption {
    type: "Select" | "TextField"
    label: string
    fieldName: keyof IData
    width?: string
    options?: { name: string, id: number }[] | []
}

interface IProps {
    boxElements: IOption[]
    searchOnClickHandler(): void
    onChangeHandler(value: { name: string, id: number } | null | string, fieldName: keyof IData, event?: React.SyntheticEvent<Element, Event>): void
}

export default class Box extends Component<IProps> {

    render() {

        let boxElements = this.props.boxElements.map((boxElement, index) => {
            switch (boxElement.type) {
                case "Select":
                    return <Autocomplete
                        onChange={(event: any, newValue: { name: string, id: number } | null) => this.props.onChangeHandler(newValue, boxElement.fieldName, event)}
                        key={index}
                        sx={{ width: `${boxElement.width && boxElement.width}` }}
                        disablePortal
                        // id="combo-box-demo"
                        options={boxElement.options!}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => <TextField variant="standard" {...params} label={boxElement.label} sx={{paddingBottom:2}} />}
                    />
                case "TextField":
                    return <TextField onChange={(event) => this.props.onChangeHandler(event.target.value, boxElement.fieldName, event)} key={index} id="outlined-basic" label={boxElement.label} variant="standard" />
            }
        })

        return (
            <ButtonGroup className="Box" variant="contained" aria-label="outlined primary button group">
                <IconButton className="Box__btn" onClick={this.props.searchOnClickHandler} aria-label="search">
                    <SearchIcon />
                </IconButton>
                {boxElements}
            </ButtonGroup>
        )
    }
}