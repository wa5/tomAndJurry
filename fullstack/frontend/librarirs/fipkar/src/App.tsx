import Star1 from "./component/Starrating/Star1";
import Contact from "./pages/contact/Contact";
import Home from "./pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from "./pages/About/About";
import SinglePage from "./pages/singlePage/SinglePage";
interface IMansa{
  data:string
}

const Mansa:React.FC<IMansa>=(props)=>{
  return <h2>{props.data}</h2>
}

function App() {
  return (
<>
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/singlePage" element={<SinglePage/>}/>
  </Routes>
</Router>



</>
  
  );
}

export default App;

{/* <h1>hello  1234</h1>
<Mansa data="hello im daa"/>
<Mansa data="hello im daa3"/>
<Mansa data="hello im daat"/>
<Mansa  data="hello im daag"/>
<Star1/> */}