import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StepConnector from '@mui/material/StepConnector';
import './navbarVertical.css'
import {Stack} from "@mui/material";

const navbarTitleStyle = {
    marginTop:'5px',
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
export default function NestedList() {
    const [jobCategoryOpen, setJobCategoryOpen] = React.useState(false);
    const [cooperationTypeOpen, setCooperationTypeOpen] = React.useState(false);
    const [adSourceOpen, setAdSourceOpen] = React.useState(false);
    const [workPlaceOpen, setWorkPlaceOpen] = React.useState(false);
    const [contractTypeOpen, setContractTypeOpen] = React.useState(false);

    const jobCategoryHandleClick = () => {
        setJobCategoryOpen(!jobCategoryOpen);
    };
    const cooperationTypeHandleClick = () => {
        setCooperationTypeOpen(!cooperationTypeOpen);
    };
    const adSourceHandleClick = () => {
        setAdSourceOpen(!adSourceOpen);
    };
    const workPlaceHandleClick = () => {
        setWorkPlaceOpen(!workPlaceOpen);
    };
    const contractTypeHandleClick = () => {
        setContractTypeOpen(!contractTypeOpen);
    };

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader"/>
            }
        >
            <ListItemButton onClick={jobCategoryHandleClick}>
                {jobCategoryOpen ? <ExpandLess sx={{color: '#4166b7',marginTop:'-20px'}}/> : <ExpandMore sx={{color: '#4166b7',marginTop:'-20px'}}/>}
                <Stack sx={{width:'100%'}}>
                    <ListItemText sx={navbarTitleStyle}>دسته بندی شغلی</ListItemText>
                    <ListItemText sx={navbarContentStyle}>همه موارد</ListItemText>
                </Stack>
            </ListItemButton>
            <StepConnector sx={{width: '90%', margin: '10px auto 10px auto'}}/>
            <Collapse in={jobCategoryOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl: 4}}>
                        <>test</>
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={cooperationTypeHandleClick}>
                {cooperationTypeOpen ? <ExpandLess sx={{color: '#4166b7',marginTop:'-20px'}}/> : <ExpandMore sx={{color: '#4166b7',marginTop:'-20px'}}/>}
                <Stack sx={{width:'100%'}}>
                    <ListItemText sx={navbarTitleStyle}>نوع همکاری</ListItemText>
                    <ListItemText sx={navbarContentStyle}>همه موارد</ListItemText>
                </Stack>
            </ListItemButton>
            <StepConnector sx={{width: '90%', margin: '10px auto 10px auto' }}/>
            <Collapse in={cooperationTypeOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl: 4}}>
                        <>test</>
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={adSourceHandleClick}>
                {adSourceOpen ? <ExpandLess sx={{color: '#4166b7',marginTop:'-20px'}}/> : <ExpandMore sx={{color: '#4166b7',marginTop:'-20px'}}/>}
                <Stack sx={{width:'100%'}}>
                    <ListItemText sx={navbarTitleStyle}>منبع آگهی</ListItemText>
                    <ListItemText sx={navbarContentStyle}>همه موارد</ListItemText>
                </Stack>
            </ListItemButton>
            <StepConnector sx={{width: '90%', margin: '10px auto 10px auto'}}/>
            <Collapse in={adSourceOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl: 4}}>
                        <>test</>
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={workPlaceHandleClick}>
                {workPlaceOpen ? <ExpandLess sx={{color: '#4166b7',marginTop:'-20px'}}/> : <ExpandMore sx={{color: '#4166b7',marginTop:'-20px'}}/>}
                <Stack sx={{width:'100%'}}>
                    <ListItemText sx={navbarTitleStyle}>مکان کار</ListItemText>
                    <ListItemText sx={navbarContentStyle}>همه موارد</ListItemText>
                </Stack>
            </ListItemButton>
            <StepConnector sx={{width: '90%', margin: '10px auto 10px auto'}}/>
            <Collapse in={workPlaceOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl: 4}}>
                        <>test</>
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={contractTypeHandleClick}>
                {contractTypeOpen ? <ExpandLess sx={{color: '#4166b7',marginTop:'-20px'}}/> : <ExpandMore sx={{color: '#4166b7',marginTop:'-20px'}}/>}
                <Stack sx={{width:'100%'}}>
                    <ListItemText sx={navbarTitleStyle}>نوع قرارداد</ListItemText>
                    <ListItemText sx={navbarContentStyle}>همه موارد</ListItemText>
                </Stack>
            </ListItemButton>
            <Collapse in={contractTypeOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl: 4}}>
                        <>test</>
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}
