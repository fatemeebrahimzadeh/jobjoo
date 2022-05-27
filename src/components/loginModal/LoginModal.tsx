import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Tooltip} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import {useTheme} from '@mui/material/styles';

import {Icon} from "@iconify/react";

const modalStyle = {
    bgcColor: 'red',
    boxShadow: 24,
    p: 4,
    margin: '0 auto',
    marginTop: 3,

};
const LoginModal:React.FC <{open:boolean,setOpen:any,bodyContent:any,hideClose:any}>=({open, setOpen, bodyContent, hideClose}) =>{
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={{...modalStyle, maxWidth: '75%'}}>
                    {!hideClose && <Tooltip title='close'>
                        <IconButton aria-label="delete" size="small"
                                    sx={{marginBottom: 2, backgroundColor: 'red'}}
                                    onClick={handleClose}>
                            <Box component={Icon} icon={"eva:close-outline"} sx={{width: '15', height: '15'}}/>
                        </IconButton>
                    </Tooltip>}
                    <Box sx={{ maxHeight: window.innerHeight - 150, overflow: 'auto' }} >{bodyContent}</Box>
                </Box>
            </Modal>
        </div>
    );
}

export default LoginModal