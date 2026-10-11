import { useRef, useState } from 'react';
import '../styles/style.css';
export default function Navbar() {

const item_refs = useRef([]);

const [whidth, setWhidth] = useState(0);
const [left, setLeft] = useState(0);
const [whitch, setWhitch] = useState(null);

function clicked(i){
  if(i==whitch){
     return(
    'clicked_navbar_item'
  )
  }else{
    return('')
  }
 
}

const nav_items = [
 "HOME","MOVIES","FAVORITES"
];


  return (
    <div className="bg-black border-b border-[#202020] z-100 fixed border-solid w-full h-[8vh] flex justify-between">
      <div className='p-1 flex items-center w-[8vh] gap-1'>
        <img  src="/favicon.png"/>
        <div className='text-white cursor-pointer font-styles-headers items-center'>Cin<span className='text-[#21a2f8c5]'>Box</span>
    </div>
      </div>
     
      <nav className='items-center justify-center flex flex-col relative'>
        <ul className='gap-5 flex items-center cursor-pointer justify-center text-white'>
          {nav_items.map(
            (item,index) => {
              return(
                <li className={clicked(index)} key={item} onClick={() => {
                   let el = item_refs.current[index]
                   setLeft(el.offsetLeft)
                   setWhidth(el.offsetWidth)
                   setWhitch(index)
                }} ref={
                  (el) => {
                   item_refs.current[index]=el
                  }
                }>
                  {item}
                </li>
              )
            }
          )}
        </ul>
        <div className='h-[.5vh] w-full'>
        <div className='bg-[#21a2f8c5] absolute transition-all duration-500 h-[0.5vh]' id='line' style={{width:whidth , left:left}}></div>
        </div>
      </nav>
      <div className='flex gap-2 items-center justify-center p-1'>
       <img src="/profile.jpg" alt="Profile" className='size-8 cursor-pointer rounded-full border border-items'/>
       <svg className='size-8 cursor-pointer text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      </div>
    </div>
    
    
  )
}
