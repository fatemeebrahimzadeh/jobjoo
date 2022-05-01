import React, { Component } from "react";
import "./Box.scss"
import { Autocomplete, Button, IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Limitation from "../UI/limitation/Limitation";
import { IHomeDate } from "../../pages/home/Home";

export interface IBoxOption {
    type: "Select" | "TextField" | "experienceComponent" | "salaryComponent"
    label: string
    fieldName: keyof IHomeDate
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
    onChangeHandler(value: { name: string, id: number } | null | string, fieldName: keyof IHomeDate, event?: React.SyntheticEvent<Element, Event>): void
}

export default class Box extends Component<IProps, IState> {

    state = {
        experiencelimitationShow: false,
        salarylimitationShow: false
    }

    experiencelimitationButtonOnClickHandler = () => {
        this.setState({ experiencelimitationShow: !this.state.experiencelimitationShow, salarylimitationShow: false })
    }

    salarylimitationButtonOnClickHandler = () => {
        this.setState({ salarylimitationShow: !this.state.salarylimitationShow, experiencelimitationShow: false })
    }

    render() {

        let boxElements = this.props.boxElements.map((boxElement, index) => {
            switch (boxElement.type) {
                case "Select":
                    return <Autocomplete
                        // multiple
                        onChange={(event: any, newValue: { name: string, id: number } | null) => this.props.onChangeHandler(newValue, boxElement.fieldName, event)}
                        key={index}
                        sx={{ width: `${boxElement.width && boxElement.width}` }}
                        disablePortal
                        id="combo-box-demo"
                        options={boxElement.options!}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => <TextField {...params} label={boxElement.label} />}
                    />
                case "TextField":
                    return <TextField onChange={(event) => this.props.onChangeHandler(event.target.value, boxElement.fieldName, event)} key={index} id="outlined-basic" label={boxElement.label} variant="outlined" />
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