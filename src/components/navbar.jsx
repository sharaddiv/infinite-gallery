function Navbar(){
    return(
        <nav className="grid grid-cols-3 items-center px-8 py-5 text-white">
          
          {/* left logo  */}
          <div>
            <h1 className="text-2xl font-bold tracking-widest">
                SA <span className="text-violet-500">VEE</span> 
            </h1>
          </div>

          {/* center - navigation */}
          <div className="flex items-center justify-center gap-8">
            <a href="#">Home</a>
            <a href="#">You</a>
            <a href="#">Search</a>
          </div>

          {/* right - profile */}
          <div className="flex justify-end">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500 font-bold">
                S
            </div>
          </div>
        </nav>
    )
}

export default Navbar;