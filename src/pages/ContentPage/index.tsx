import { Grid } from "@mui/material"
import BarChart from "./BarChart/index.tsx"
import LineChart from "./LineChart/index.tsx"
import SecondBarChart from "./SecondBarChart/index.tsx"
import TableChart from "./TableChart/index.tsx"



export const ContentPage = () => {
    const styling = {height:'35vh',backgroundColor:'white',margin:'10px',borderRadius:'8px'}
    return (
        <Grid container style={{display:'flex',flexDirection:'row'}}>
            <Grid item xs={5} style={styling}>
                <LineChart />
            </Grid>
            <Grid item xs={5}  style={styling}>
                <BarChart />
            </Grid>
            
            <Grid item xs={5}  style={styling}>
               <SecondBarChart />
            </Grid>
            <Grid item xs={5}  style={styling}>
                <TableChart />
            </Grid>
        </Grid>
    )
}

