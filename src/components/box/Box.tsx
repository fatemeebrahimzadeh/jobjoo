import React, { Component } from "react";
import "./Box.scss"
import { Autocomplete, Button, IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Limitation from "../UI/limitation/Limitation";

export interface IBoxOption {
    type: "Select" | "TextField" | "experienceComponent" | "salaryComponent"
    label: string
    width?: string
    options?: { name: string, id: number }[]
    payload?: { min: number, max: number }
}

interface IState {
    experiencelimitationShow: boolean
    salarylimitationShow: boolean
}

interface IProps {
    boxElements: IBoxOption[]
    searchOnClickHandler(): void
}

export default class Box extends Component<IProps, IState> {

    state = {
        experiencelimitationShow: false,
        salarylimitationShow: false
    }

    experiencelimitationButtonOnClickHandler = () => {
        this.setState({ experiencelimitationShow: !this.state.experiencelimitationShow })
    }

    salarylimitationButtonOnClickHandler = () => {
        this.setState({ salarylimitationShow: !this.state.salarylimitationShow })
    }

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
                case "experienceComponent":
                    return <div>
                        <Button key={index} onClick={this.experiencelimitationButtonOnClickHandler} variant="contained" size="large">{boxElement.label}</Button>
                        <Limitation limitationShow={this.state.experiencelimitationShow} />
                    </div>
                case "salaryComponent":
                    return <div>
                        <Button key={index} onClick={this.salarylimitationButtonOnClickHandler} variant="contained" size="large">{boxElement.label}</Button>
                        <Limitation limitationShow={this.state.salarylimitationShow} />
                    </div>
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