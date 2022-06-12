import { Grid } from "@mui/material"
import img from '../../public/img/1.jpg'
const Jumbo1:React.FC=()=>{
    return (<>
    
    <Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
    <a href=""><img height='100px' src={img} style={{borderRadius:"50%"}}/></a>

<img height='100px' src={img} style={{borderRadius:"50%"}}/>
<img height='100px' src={img} style={{borderRadius:"50%"}}/>
<img height='100px' src={img} style={{borderRadius:"50%"}}/>
<img height='100px' src={img} style={{borderRadius:"50%"}}/>
<img height='100px' src={img} style={{borderRadius:"50%"}}/>
<img height='100px' src={img} style={{borderRadius:"50%"}}/>

</Grid>
    
    
    </>)
}
export default Jumbo1