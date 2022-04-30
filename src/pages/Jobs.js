import {Card, Grid} from "@mui/material";
import Test2 from "../components/test/Test2";
import './jobs.css'

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
                    hello
                </Card>
            </Grid>
        </Grid>
    )
}
export default Jobs;