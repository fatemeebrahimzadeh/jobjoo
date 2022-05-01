import {Grid} from "@mui/material";
import saveIc from '../../assets/icons/ic-save.png'
import corporationIc from '../../assets/icons/ic-corpo.png'
import cityIc from '../../assets/icons/ic-pin.png'

const JobCard = () => {
    const jobTitle = "Senior UI/UX Designer";
    const requestDate = "سه روز پیش";
    const corporation = "فناوران اطلاعات خبره | Fanavaran";
    const city = "تهران";
    return (<Grid container>
            <Grid item xs={2}>
                <img src={saveIc} alt='save-icon'/>
            </Grid>
            <Grid item xs={8}>
                <Grid container justifyContent='end'>
                    <Grid item sx={{
                        marginTop:'3px',
                        marginRight:'13px',
                        fontFamily: 'BYekan+',
                        fontSize: '14px',
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 1.43,
                        letterSpacing: 'normal',
                        textAlign: 'right',
                        color: '#33334c'
                    }}>{requestDate}</Grid>
                    <Grid item sx={{
                        fontFamily: 'BYekan+',
                        fontSize: '21px',
                        fontWeight: 'bold',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 1.38,
                        letterSpacing: 'normal',
                        textAlign: 'right',
                        color: '#4166b7'}}>{jobTitle}</Grid>
                </Grid>
                <Grid container justifyContent='end'>
                    <Grid item sx={{
                        marginTop: '11px',
                        marginRight: '5px',
                        fontFamily: 'BYekan+',
                        fontSize: '18px',
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 1.67,
                        letterSpacing: 'normal',
                        textAlign: 'right',
                        color: '#33334c'
                    }}>{corporation}</Grid>
                    <Grid item sx={{marginTop: '15px'}}><img src={corporationIc}/></Grid>
                </Grid>
                <Grid container justifyContent='end'>
                    <Grid item sx={{
                        marginTop: '11px',
                        marginRight: '5px',
                        paddingBottom:'10px',
                        fontFamily: 'BYekan+',
                        fontSize: '18px',
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 1.67,
                        letterSpacing: 'normal',
                        textAlign: 'right',
                        color: '#33334c'
                    }}>{city}</Grid>
                    <Grid item sx={{marginTop: '15px'}}><img src={cityIc}/></Grid>
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <div className='company-logo'>

                </div>
            </Grid>

        </Grid>);
}
export default JobCard;