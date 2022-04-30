import {Card, Grid} from "@mui/material";
import Test2 from "../components/test/Test2";
import './jobs.css'
import NavbarVertical from '../components/navbar/NavbarVertical'

const Jobs = () =>{
    return(
        <Grid container spacing={6} justifyContent='center'>
            <Grid item xs={6}>
                <div className="selectBox">
                    <Test2/>
                </div>
            </Grid>
            <Grid item xs={3}>
                <Card>
                    <NavbarVertical/>
                </Card>
            </Grid>
        </Grid>
    )
}
export default Jobs;