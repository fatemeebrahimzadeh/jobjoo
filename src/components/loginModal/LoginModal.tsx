import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Card, Tooltip} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FormControlUnstyled, {
    useFormControlUnstyledContext,
} from '@mui/base/FormControlUnstyled';
import InputUnstyled, {inputUnstyledClasses} from '@mui/base/InputUnstyled';
import {styled} from '@mui/system';
import clsx from 'clsx';
import {Icon} from "@iconify/react";
import ButtonUnstyled, {buttonUnstyledClasses} from "@mui/base/ButtonUnstyled";

const modalStyle = {
    bgcColor: 'red',
    boxShadow: 24,
    p: 4,
    margin: '0 auto',
    marginTop: 20,
    padding: 4

};
const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
};
const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};
const Label = styled(
    ({children, className}: { children?: React.ReactNode; className?: string }) => {
        const formControlContext = useFormControlUnstyledContext();
        const [dirty, setDirty] = React.useState(false);

        React.useEffect(() => {
            if (formControlContext?.filled) {
                setDirty(true);
            }
        }, [formControlContext]);

        if (formControlContext === undefined) {
            return <p>{children}</p>;
        }

        const {error, required, filled} = formControlContext;
        const showRequiredError = dirty && required && !filled;

        return (
            <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
                {children}
                {required ? ' *' : ''}
            </p>
        );
    },
)`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

const Input = styled(InputUnstyled)(
    ({theme}) => `
  
  .${inputUnstyledClasses.input} {
    width: 320px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 8px;
    padding: 12px 12px;

    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }

    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  }
`,
);
const HelperText = styled((props: {}) => {
    const formControlContext = useFormControlUnstyledContext();
    const [dirty, setDirty] = React.useState(false);

    React.useEffect(() => {
        if (formControlContext?.filled) {
            setDirty(true);
        }
    }, [formControlContext]);

    if (formControlContext === undefined) {
        return null;
    }

    const {required, filled} = formControlContext;
    const showRequiredError = dirty && required && !filled;

    return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const CustomButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[500]};
  margin-top: 15px;
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const LoginModal: React.FC<{ open: boolean, setOpen: any, hideClose: any }> = ({open, setOpen, hideClose}) => {
    const handleClose = () => setOpen(false);

    const submitLoginHandler = () => {
        setOpen(false);
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Card sx={{...modalStyle, maxWidth: '25%'}}>
                    <Tooltip title='close'>
                        <IconButton aria-label="delete" size="small" sx={{marginTop:-2,float:'right'}} onClick={handleClose}>
                            <Box component={Icon} icon={"eva:close-outline"} sx={{width: '15', height: '15'}}/>
                        </IconButton>
                    </Tooltip>
                    <FormControlUnstyled defaultValue="" required>
                        <Label>Name</Label>
                        <Input/>
                        <HelperText/>
                        <CustomButton onClick={submitLoginHandler}>submit</CustomButton>
                    </FormControlUnstyled>
                </Card>
            </Modal>
        </div>
    );
}

export default LoginModal