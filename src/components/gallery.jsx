import { useState , useEffect , useRef } from "react";


function Gallery(){
    
    // states
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [page, setPage] = useState(1)
    const [favourite, setFavourite] = useState([])
    const loadRef = useRef(null)

    // API calling

     useEffect(() => {  

        async function fetchImages(){
           try{
            setError("");
            setLoading(true);

            const response = await fetch(
                `https://picsum.photos/v2/list?page=${page}&limit=12`
            );

            if(!response.ok){
                throw new Error("failed to fetch images");
            }
            
            const data = await response.json();

            setImages((prevImages) => [...prevImages, ...data]);

           } catch(err){
            setError(err.message);

           } finally{
              setLoading(false)
           }
        }

        fetchImages();

     }, [page])

     
    //  ye broweser api detect karenge ki koi element screen pr visible hua hai ya nhi 

    useEffect(() => {

        const target = loadRef.current;

        if(!target || loading) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){

                    observer.unobserve(target);

                    setPage((prevPage) => prevPage + 1)
                }
            },
            {
                rootMargin:"200px",
            }
        );

        observer.observe(target)

        return () => observer.disconnect();

    }, [loading]);
    
    
    function toggleFavorite(id) {
      setFavourite((prevFavourite) => {
        if (prevFavourite.includes(id)) {
          return prevFavourite.filter((favId) => favId !== id);
        }
    
        return [...prevFavourite, id];
      });
    }

    return(
        <section className="mx-auto max-w-7xl px-6 py-10">
           {loading && (
            <p className="text-center text-purple-400">
                Loading images...
            </p>
           )}

           {error &&(
            <p className="text-center text-red-400">
                {error}
            </p>
           )}

           
           {/* img gallery */}
           <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 ">
                 
               {images.map((image) => (
                 <div
                 key={image.id}
                 className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-[#1c1d22]"
               >
                 {/* Image */}
                 <img
                   src={image.download_url}
                   alt={image.author}
                   className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                 />
               
                 {/* Dark Overlay */}
                 <div className="absolute inset-0 flex flex-col justify-between bg-black/0 p-4 opacity-0 transition duration-300 group-hover:bg-black/40 group-hover:opacity-100">
               
                   {/* Favourite Button */}
                   <div className="flex justify-end">
                     <button 
                        onClick={() => toggleFavorite(image.id)}
                        className="rounded-full bg-white/20 p-3 text-white backdrop-blur-md transition hover:bg-purple-600">
                       ♥
                     </button>
                   </div>
               
                   {/* Image Details */}
                   <div>
                     <p className="text-sm font-semibold text-white">
                       {image.author}
                     </p>
               
                     <p className="mt-1 text-xs text-gray-300">
                       Beautiful inspiration
                     </p>
                   </div>
               
                 </div>
               </div>
                  
               ))}  

           </div>

             {/* infinite scroll triger */}

             <div
               ref={loadRef}
               className="h-10"
             >

             </div>

           {/* <button 
              onClick={() => setPage((prevPage) => prevPage + 1)}
              disabled={loading}
              className="mt-8 rounded-full bg-purple-600 px-6 py-3 text-white disabled:opactiy-50"
            >
              
              {loading ? "loading..." : "load more"}
           </button> */}

        </section>
    );
}


export default Gallery;