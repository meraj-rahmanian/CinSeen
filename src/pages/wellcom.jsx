export default function Wellcom() {
  return (
      <div className="min-h-screen bg-[url('/WellcomPageBackgrund.jpg')] bg-cover bg-center bg-no-repeat">      <div className="pt-25">
       <h1 className='text-blck flex justify-center items-center font-bold cursor-default max-sm:text-4xl sm:text-5xl lg:text-7xl md:text-6xl'>WELLCOM</h1>
        <p className="text-black flex justify-center items-center cursor-default max-sm:text-4
        xl lg:text-2xl md:text-3xl font-medium pt-20">for watching movie please enter your acount</p>
        <div className="flex justify-center items-center flex-col py-10">
          <div className="w-[40vh] h-[8vh] hero-hover bg-blue-800 m-10 rounded-xl cursor-default flex items-center justify-center font-medium text-3xl">sing in</div>
          <div className="w-[40vh] h-[8vh] hero-hover bg-white m-10 rounded-xl cursor-default flex items-center justify-center font-medium text-3xl">sing up</div>
          
        </div>
       
       </div>
    </div>
    
  )
}
