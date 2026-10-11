import "./styles/tailwind.css";
import "./components/navbar.jsx"
import Navbar from "./components/navbar.jsx";
import { createRoot } from "react-dom/client";



const Root = document.querySelector('#root');

createRoot(Root).render(
  <Navbar/>
)