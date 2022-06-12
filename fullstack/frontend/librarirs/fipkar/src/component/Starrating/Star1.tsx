import { Button, Rating, Typography } from "@mui/material";

const Star1=()=>{

    return (<>
    <Typography component="legend">Controlled</Typography>
{/* <Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/> */}
<Typography component="legend">Read only</Typography>
<Rating name="read-only" value={3} readOnly />
<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
    </>)
}
export default Star1