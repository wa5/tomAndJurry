import { Container, Grid } from "@mui/material";
import Card1 from "../../component/cards/Cards1";
import Jumbo1 from "../../component/jumbo/Jumbo1";
import Navbar1 from "../../component/navbar/Navbar1";
import Slid1 from "../../component/sliders/Slid1";

var mystyle = { backgroundColor: "red" };
const Home: React.FC = () => {
  return (
    <>
      <Container maxWidth="xl" >
        <Grid       
        >
          <Navbar1/>
        </Grid>
        <br/>
        <Grid
         
        >
        <Jumbo1/>
        </Grid>
        <br/>
        <Grid
      
        >
          <Slid1/>
        </Grid>
        <br/>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          
        </Grid>
        <br/>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          
        </Grid>
        <br/>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          
        </Grid>
        <br/>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          
        </Grid>
        <br/>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          <Card1/>
          
        </Grid>
        HELLO im home page
      </Container>
    </>
  );
};

export default Home;
