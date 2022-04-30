import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StepConnector from '@mui/material/StepConnector';

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
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader"/>
            }
        >
            <ListItemButton onClick={jobCategoryHandleClick}>
                {jobCategoryOpen ? <ExpandLess /> : <ExpandMore />}
                <ListItemText sx={{textAlign:'right'}}>دسته بندی شغلی</ListItemText>

            </ListItemButton>
            <Collapse in={jobCategoryOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <>test</>
                    </ListItemButton>
                </List>
            </Collapse>
            <StepConnector/>
            <ListItemButton onClick={cooperationTypeHandleClick}>
                {cooperationTypeOpen ? <ExpandLess /> : <ExpandMore />}
                <ListItemText sx={{textAlign:'right'}}>نوع همکاری</ListItemText>

            </ListItemButton>
            <Collapse in={cooperationTypeOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <>test</>
                    </ListItemButton>
                </List>
            </Collapse>
            <StepConnector/>
            <ListItemButton onClick={adSourceHandleClick}>
                {adSourceOpen ? <ExpandLess /> : <ExpandMore />}
                <ListItemText sx={{textAlign:'right'}}>منبع آگهی</ListItemText>

            </ListItemButton>
            <Collapse in={adSourceOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <>test</>
                    </ListItemButton>
                </List>
            </Collapse>
            <StepConnector/>
            <ListItemButton onClick={workPlaceHandleClick}>
                {workPlaceOpen ? <ExpandLess /> : <ExpandMore />}
                <ListItemText sx={{textAlign:'right'}}>مکان کار</ListItemText>

            </ListItemButton>
            <Collapse in={workPlaceOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <>test</>
                    </ListItemButton>
                </List>
            </Collapse>
            <StepConnector/>
            <ListItemButton onClick={contractTypeHandleClick}>
                {contractTypeOpen ? <ExpandLess /> : <ExpandMore />}
                <ListItemText sx={{textAlign:'right'}}>نوع قرارداد</ListItemText>

            </ListItemButton>
            <Collapse in={contractTypeOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <>test</>
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}
