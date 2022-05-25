import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StepConnector from '@mui/material/StepConnector';
import { Stack } from "@mui/material";

export interface IData {
    navbarVerticalCategories?: string[]
    navbarVerticalCooperation?: string[]
    navbarVerticalEducation?: string[]
    navbarVerticalGender?: string[]
    navbarVerticalInsurnace?: string[]
}

export interface IOption {
    label: string
    fieldName: keyof IData
    options: { name: string, id: number }[]
    collapseHandler(): void,
    collapse: boolean
}

interface IProps {
    navbarVerticalElements: IOption[]
    onChangeHandler(value: string[], fieldName: keyof IData, pageId: number, event?: React.SyntheticEvent<Element, Event>): void
    data: IData
}

const navbarTitleStyle = {
    marginTop: '5px',
    fontFamily: 'BYekan+',
    fontSize: '21px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.38,
    letterSpacing: 'normal',
    textAlign: 'right',
    color: '#4166b7'
};

const navbarContentStyle = {
    fontFamily: 'BYekan+',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.44,
    letterSpacing: 'normal',
    textAlign: 'right',
    color: '#33334c'
}

export default function NavbarVertical(props: IProps) {

    let navbarVerticalElements = props.navbarVerticalElements.map((navbarVerticalElement, index) => {
        let ListItem = navbarVerticalElement.options.map((option, index) => {
            return <ListItemButton key={index} sx={{ pl: 4 }} onClick={() => {
                let arr = []
                arr.push(option.name)
                props.onChangeHandler(arr, navbarVerticalElement.fieldName, 1)
            }
            }>
                <>{option.name}</>
            </ListItemButton>
        })

        return (
            <React.Fragment key={index}>
                <ListItemButton onClick={navbarVerticalElement.collapseHandler}>
                    {navbarVerticalElement.collapse ? <ExpandLess sx={{ color: '#4166b7', marginTop: '-20px' }} /> : <ExpandMore sx={{ color: '#4166b7', marginTop: '-20px' }} />}
                    <Stack sx={{ width: '100%' }}>
                        <ListItemText sx={navbarTitleStyle}>{navbarVerticalElement.label}</ListItemText>
                        <ListItemText sx={navbarContentStyle}>{props.data[navbarVerticalElement.fieldName] ? props.data[navbarVerticalElement.fieldName] : "همه موارد"}</ListItemText>
                    </Stack>
                </ListItemButton>
                <StepConnector sx={{ width: '90%', margin: '10px auto 10px auto' }} />
                <Collapse in={navbarVerticalElement.collapse} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {ListItem}
                    </List>
                </Collapse>
            </React.Fragment>
        )
    })

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" />
            }
        >
            {navbarVerticalElements}
        </List>
    );
}
