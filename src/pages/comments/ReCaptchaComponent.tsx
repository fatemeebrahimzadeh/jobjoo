import { FC, useCallback, useEffect } from 'react';
import {
    useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

interface IProps {
    callBackReCaptcha(token: string): void
}

const ReCaptchaComponent: FC<IProps> = (props) => {
    const { executeRecaptcha } = useGoogleReCaptcha();

    // Create an event handler so you can call the verification on button click event or form submit
    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            console.log('Execute recaptcha not yet available');
            return;
        }

        const token = await executeRecaptcha('contact');
        props.callBackReCaptcha(token)
        // Do whatever you want with the token
    }, [executeRecaptcha]);

    // You can use useEffect to trigger the verification as soon as the component being loaded
    useEffect(() => {
        handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);

    return <></>;
};

export default ReCaptchaComponent