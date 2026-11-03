function Hero(){
    return(
        <section className="p-16 text-center">
              
              {/* small subtitle*/}
               <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-purple-500">
                Visual Inspiration
                </p>

                 {/* mian heading */}
               <h1 className="text-5xl font-bold text-white sm:text-6xl">
                Infinite Gallery
                </h1>

                {/* description  */}
               <p className="mt-7 rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700">Explore. Discover. Save your favourite moments
               </p>
                

                {/* button */}
               <button className="mt-7 rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700" >
                Start Exploring  →
               </button>
        </section>
    )
}

export default Hero;