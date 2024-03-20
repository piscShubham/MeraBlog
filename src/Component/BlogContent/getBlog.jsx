import { useDispatch,useSelector } from "react-redux"
import { getBlog } from "../../Features/Createblog";
import { useEffect } from "react";
const products = [
    {
      id: 1,
      Content:
        "Tal slender porcelain bottle with natural clay textured body and cork stopper. ",
      href: "blogfilter",
      Extra: "Read More",
      imageSrc:
        "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/5cb11436342dd9c3cf851ebea370dfb33538970bdfaaba07297280466e541e15.jpg/v1/fill/w_538%2Ch_303%2Cq_90%2Cusm_0.60_1.00_0.01/5cb11436342dd9c3cf851ebea370dfb33538970bdfaaba07297280466e541e15.webp",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
]


export function GetBlog(){
    const dispatch = useDispatch();
    const { blog, loading, error } = useSelector((state) => state.blog);

    console.log("the blog is",blog)
  
    useEffect(() => {
      dispatch(getBlog());
    }, [dispatch]);


    return(
        <div class="w-1/4 h-1/4 mr-3  flex flex-col space-y-4  ml-32   ">
       

       {blog.map((product) => (
  <a href="/" className="group" key={product.id}>
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      <img
        src={product.image}
        alt="shshsgsfsg"
        className="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <p className="mt-4 text-sm text-gray-700">{product.description.substring(0, 30)}...</p>
    <button className="mt-2 text-sm px-4 py-1 rounded-b-lg font-medium bg-blue-800 text-white">
      Read More
    </button>
  </a>
))}
        </div>  
    )
}