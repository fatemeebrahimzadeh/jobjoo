import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import React from "react";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import {TabPanel} from "@mui/lab";
import {styled} from "@mui/material/styles";
import Favorites from "./Favorites";

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} disabled={props.disable} />)(
    ({ theme }) => ({
        textTransform: 'none',
        minWidth: 0,
        [theme.breakpoints.up('sm')]: {
            minWidth: 0,
        },
        fontSize:'22px',
        fontWeight: theme.typography.fontWeightBold,
        paddingRight: theme.spacing(1),
        marginLeft:theme.spacing(4),
        color: 'rgba(0, 0, 0, 0.85)',
        fontFamily: ['BYekan'].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&.Mui-selected': {
            // color: '#1890ff',
            color: 'black',
            fontWeight: theme.typography.fontWeightBold,
        },
        '&.Mui-focusVisible': {
            backgroundColor: '#d1eaff',
        },
    }),
);

interface StyledTabProps {
    label: string;
    value:string;
    disable:boolean
}

const Tabs :React.FC = () =>{
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return(
        <Box sx={{ width: '100%', typography: 'body1' ,padding:'0 200px 0 200px'}}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} dir='rtl'>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <AntTab label="آگهی های ذخیره شده" value="1" disable={false}/>
                        <AntTab label="اطلاعات من" value="2" disable={true}/>
                    </TabList>
                </Box >
                <TabPanel value="1" dir='rtl'>
                    <Favorites/>
                </TabPanel>
                <TabPanel value="2" dir='rtl' >اطلاعات من</TabPanel>
            </TabContext>
        </Box>
    )
}
export default Tabs