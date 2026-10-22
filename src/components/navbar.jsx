import { useRef, useState } from 'react';
import '../styles/style.css';

export default function Navbar() {
  const item_refs = useRef([]);

  const [whidth, setWhidth] = useState(0);
  const [left, setLeft] = useState(0);
  const [whitch, setWhitch] = useState(null);
  const [search_input, setSearch_input] = useState(false);

  const nav_items = ["HOME", "MOVIES", "FAVORITES"];

  return (
    <div className='z-100 fixed w-full'>
      <div className="bg-black border-b border-[#202020] border-solid h-[8vh] flex">

        <div className='flex-1 min-w-0 p-1 flex items-center gap-1'>
          <img src="/favicon.png" className='h-full' />
          <div className='text-white cursor-default font-styles-headers'>
            Cin<span className='text-[#21a2f8c5]'>Box</span>
          </div>
        </div>

        <nav className='items-center justify-center flex flex-col relative'>
          <ul className='gap-5 flex items-center cursor-pointer justify-center text-white'>
            {nav_items.map((item, index) => (
              <li
                className={index === whitch ? 'clicked_navbar_item  hero-hover' : ' hero-hover'}
                key={item}
                onClick={() => {
                  const el = item_refs.current[index];
                  setLeft(el.offsetLeft);
                  setWhidth(el.offsetWidth);
                  setWhitch(index);
                }}
                ref={(el) => { item_refs.current[index] = el; }}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className='h-[.5vh] w-full'>
            <div
              className='bg-[#21a2f8c5] absolute transition-all duration-500 h-[0.5vh]'
              id='line'
              style={{ width: whidth, left: left }}
            ></div>
          </div>
        </nav>

        <div className='flex-1 min-w-0 p-1 flex gap-2 items-center justify-end relative'>
          {search_input && (
            <input
              type="text"
              className='absolute right-24 bg-black h-[6vh] w-[35vh] rounded-md border-2 border-[#202020] border-solid flex text-white px-2 focus:border-[#21a2f8c5] focus:outline-none'
              placeholder='search...'
            />
          )}

          {search_input ? (
            <svg onClick={() => setSearch_input(false)} className='text-white hero-hover size-8 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg onClick={() => setSearch_input(true)} className='size-8 cursor-pointer text-white hero-hover' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          )}

          <img src="/profile.jpg" alt="Profile" className='size-8 hero-hover cursor-pointer rounded-full border border-items' />
        </div>

      </div>
    </div>
  );
}