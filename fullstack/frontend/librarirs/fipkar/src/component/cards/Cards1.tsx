import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import img from '../../public/img/2.jpg'
const Card1:React.FC=()=>{
    return (<>
    
    <Card sx={{ maxWidth: 200 }}>
      <Link to="/singlePage">
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>)
}

export default Card1