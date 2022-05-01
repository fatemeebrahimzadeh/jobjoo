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
                    <Grid item>{requestDate}</Grid>
                    <Grid item>{jobTitle}</Grid>
                </Grid>
                <Grid container justifyContent='end'>
                    <Grid item>{corporation}</Grid>
                    <Grid item><img src={corporationIc}/></Grid>
                </Grid>
                <Grid container justifyContent='end'>
                    <Grid item>{city}</Grid>
                    <Grid item><img src={cityIc}/></Grid>
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <div className='company-logo'>

                </div>
            </Grid>

        </Grid>);
}
export default JobCard;