import "./styles/tailwind.css";
import "./components/navbar.jsx"
import Navbar from "./components/navbar.jsx";
import { createRoot } from "react-dom/client";
import Wellcom from "./pages/wellcom.jsx";


const Root = document.querySelector('#root');

createRoot(Root).render(
  <>
  
  
  
  <Navbar/>
  <Wellcom/>



  </>
 

)