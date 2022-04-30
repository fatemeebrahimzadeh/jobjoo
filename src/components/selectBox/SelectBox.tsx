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
}

export default class SelectBox extends Component<IProps> {

    get selectBoxElements() {
        return this.props.selectBoxElements.map(selectBoxElement => {
            switch (selectBoxElement.type) {
                case "Select":
                    let options = selectBoxElement.options?.map(option => {
                        return { label: option.name, id: option.id }
                    })
                    return ({ ...selectBoxElement, options })

                case "TextField":
                    return (selectBoxElement)
            }
        })
    }

    render() {

        // console.log("[selectBox]", this.props.selectBoxElements, this.selectBoxElements)

        // let selectBoxElements = this.selectBoxElements.map((selectBoxElement, index) => {
        //     switch (selectBoxElement.type) {
        //         case "Select":
        //             return <Autocomplete
        //                 key={index}
        //                 sx={{ width: `${selectBoxElement.width && selectBoxElement.width}` }}
        //                 disablePortal
        //                 id="combo-box-demo"
        //                 options={selectBoxElement.options!}
        //                 renderInput={(params) => <TextField {...params} label={selectBoxElement.label} />}
        //             />
        //         case "TextField":
        //             return <TextField key={index} id="outlined-basic" label={selectBoxElement.label} variant="outlined" />
        //     }
        // })

        return (
            <div className="selectBox">
                <IconButton className="selectBox__btn" onClick={() => { console.log("kug") }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                {/* {selectBoxElements} */}
            </div>
        )
    }
}