function SearchBox(){
    return(
       <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#1c1d22] p-3">

            {/* searchinput  */}
             <div className="flex flex-1 items-center gap-3 px-3">
                <span className="text-xl text-gray-400">
                ⌕
                </span>

                <input 
                   type="text"
                   placeholder="Search beautiful moments..."
                   className="w-full bg-transparent py-2 text-white outline-none placeholder:text-gray-500"
                />
             </div>

             {/* color filter */}
             <button className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700">
                <span className="h-3 w-3 rounded-full bg-white"></span>
                color
             </button>
        </div>
       </section>
    );
}

export default SearchBox;