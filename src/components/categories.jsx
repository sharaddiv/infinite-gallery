const categories = [
    {
      name: "Templates",
      image: "https://picsum.photos/id/20/200/140",
    },
    {
      name: "Typography",
      image: "https://picsum.photos/id/30/200/140",
    },
    {
      name: "UI Design",
      image: "https://picsum.photos/id/48/200/140",
    },
    {
      name: "Web Design",
      image: "https://picsum.photos/id/60/200/140",
    },
    {
      name: "Cars",
      image: "https://picsum.photos/id/111/200/140",
    },
    {
      name: "Photography",
      image: "https://picsum.photos/id/250/200/140",
    },

    {
        name: "Branding",
        image: "https://picsum.photos/seed/branding/200/140",
      },
      {
        name: "Illustration",
        image: "https://picsum.photos/seed/illustration/200/140",
      },
      {
        name: "Fashion",
        image: "https://picsum.photos/seed/fashion/200/140",
      },
      {
        name: "Architecture",
        image: "https://picsum.photos/seed/architecture/200/140",
      },
      {
        name: "Nature",
        image: "https://picsum.photos/seed/nature/200/140",
      },
      {
        name: "Lifestyle",
        image: "https://picsum.photos/seed/lifestyle/200/140",
      },
      {
        name: "Abstract Art",
        image: "https://picsum.photos/seed/abstract/200/140",
      },
      {
        name: "Interior Design",
        image: "https://picsum.photos/seed/interior/200/140",
      },
      {
        name: "Food",
        image: "https://picsum.photos/seed/food/200/140",
      },
      {
        name: "Technology",
        image: "https://picsum.photos/seed/technology/200/140",
      },
      {
        name: "Minimalism",
        image: "https://picsum.photos/seed/minimalism/200/140",
      },
      {
        name: "Street Art",
        image: "https://picsum.photos/seed/streetart/200/140",
      },
  ];

  
function Categories(){
    return(
      <section className="mx-auto max-w-7xl px-6 py-8">
       
        <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
                Explore Categories
            </h2>

            <p className="text-sm text-gray-500">
                Discover your Interest
            </p>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 hide-scrollbar">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group w-40 shrink-0 cursor-pointer overflow-hidden rounded-2xl border-white/10 bg-[#1c1d22] transition hover:-translate-y-1 hover:border-purple-500"
              >

            <img 
               src={category.image} 
               alt={category.name}
               className="h-24 w-full object-cover transition duration-300 group-hover:scale-105"        
            />

            <h3 className="px-3 py-4 text-sm font-semibold text-white">
                {category.name}
            </h3>
           </div>
          ))}
        </div>

      </section>
    )
  }

export default Categories;