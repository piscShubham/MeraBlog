import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";

const products = [
  {
    id: 1,
    Content:
      "Tal slender porcelain bottle with natural clay textured body and cork stopper. ",
    href: "blogfilter",
    Extra: "Read More",
    imageSrc:
      "	https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/5cb11436342dd9c3cf851ebea370dfb33538970bdfaaba07297280466e541e15.jpg/v1/fill/w_538%2Ch_303%2Cq_90%2Cusm_0.60_1.00_0.01/5cb11436342dd9c3cf851ebea370dfb33538970bdfaaba07297280466e541e15.webp",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    Content:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper. ",
      href: "blogfilter",
    Extra: "Read More",
    imageSrc:
      "	https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/dd8b3aaf70425d896c779f72463733adcd26fc3191832e054ab0098ea2fe8e1b1584443536776.jpg/v1/fill/w_538%2Ch_303%2Cq_90%2Cusm_0.60_1.00_0.01/dd8b3aaf70425d896c779f72463733adcd26fc3191832e054ab0098ea2fe8e1b1584443536776.webp",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    Content:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper. ",
      href: "blogfilter",
    Extra: "Read More",
    imageSrc:
      "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/9c2624bcbbd9012005eae04dbdb0a12bccae7cdb552215f5e7ff8c54345edefc.jpg/v1/fill/w_538%2Ch_303%2Cq_90%2Cusm_0.60_1.00_0.01/9c2624bcbbd9012005eae04dbdb0a12bccae7cdb552215f5e7ff8c54345edefc.webp",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    Content:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper. ",
      href: "blogfilter",
    Extra: "Read More",
    imageSrc:
      "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/54d15586b8e831a8d6b14b6f5e53c9670e4a6aa53d10a2c5e711508997ac8bfe1628614389821.jpg/v1/fill/w_538%2Ch_303%2Cq_90%2Cusm_0.60_1.00_0.01/54d15586b8e831a8d6b14b6f5e53c9670e4a6aa53d10a2c5e711508997ac8bfe1628614389821.webp",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    Content:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper. ",
      href: "blogfilter",
    Extra: "Read More",
    imageSrc:
      "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/9c2624bcbbd9012005eae04dbdb0a12bccae7cdb552215f5e7ff8c54345edefc.jpg/v1/fill/w_538%2Ch_303%2Cq_90%2Cusm_0.60_1.00_0.01/9c2624bcbbd9012005eae04dbdb0a12bccae7cdb552215f5e7ff8c54345edefc.webp",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    Content:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper. ",
      href: "blogfilter",
    Extra: "Read More",
    imageSrc:
      "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/ada75440311254d771b9bfa28173170e8e377ec13ffdc2050b4e82bfae2f697c1628763949063.jpg/v1/fill/w_538%2Ch_303%2Cq_90%2Cusm_0.60_1.00_0.01/ada75440311254d771b9bfa28173170e8e377ec13ffdc2050b4e82bfae2f697c1628763949063.webp",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    Content:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper. ",
      href: "blogfilter",
    Extra: "Read More",
    imageSrc:
      "	https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/0c018f7c8c9f5adcc54531905fb2bbe2c26295f1624ea36b93708f2833e828c11628607364932.jpg/v1/fill/w_538%2Ch_303%2Cq_90%2Cusm_0.60_1.00_0.01/0c018f7c8c9f5adcc54531905fb2bbe2c26295f1624ea36b93708f2833e828c11628607364932.webp",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 8,
    Content:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper. ",
      href: "blogfilter",
    Extra: "Read More",
    imageSrc:
      "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/719ae50b59c255985766f97b186a5945ac8969f0b77c7dc43f1c676b1d3f60891628692326613.jpg/v1/fill/w_538%2Ch_303%2Cq_90%2Cusm_0.60_1.00_0.01/719ae50b59c255985766f97b186a5945ac8969f0b77c7dc43f1c676b1d3f60891628692326613.webp",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export function Content() {
  return (
    <div className="bg-stone-100 relative ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
      <div className="absolute top-3 ">
        <h1 className=" text-xl   font-bold    py-1">Blog Website Templates</h1>
        <div className="flex space-x-8  mt-2  ">
          <h1 className="inline-flex items-center rounded-md  border-solid border-2 bg-gray-50 text-black px-2 py-1 text-sm font-medium  hover:bg-sky-700 hover:text-white ">
            All
          </h1>
          <h1 className="inline-flex items-center rounded-md  border-solid border-2 bg-gray-50 text-black px-2 py-1 text-sm font-medium  hover:bg-sky-700 hover:text-white ">
            Personal Blog
          </h1>
          <h1 className="inline-flex items-center rounded-md  border-solid border-2 bg-gray-50 text-black px-2 py-1 text-sm font-medium  hover:bg-sky-700 hover:text-white ">
            Food & Travel
          </h1>
          <h1 className="inline-flex items-center rounded-md  border-solid border-2 bg-gray-50 text-black px-2 py-1 text-sm font-medium  hover:bg-sky-700 hover:text-white ">
            News & Business
          </h1>
          <h1 className="inline-flex items-center rounded-md  border-solid border-2 bg-gray-50 text-black px-2 py-1 text-sm font-medium  hover:bg-sky-700 hover:text-white ">
            Arts
          </h1>
          <h1 className="inline-flex items-center rounded-md  border-solid border-2 bg-gray-50 text-black px-2 py-1 text-sm font-medium  hover:bg-sky-700 hover:text-white ">
            Fashion & beauty
          </h1>
          <h1 className="inline-flex items-center rounded-md  border-solid border-2 bg-gray-50 text-black px-2 py-1 text-sm font-medium  hover:bg-sky-700 hover:text-white ">
            Sports
          </h1>
          <h1 className="inline-flex items-center rounded-md  border-solid border-2 bg-gray-50 text-black px-2 py-1 text-sm font-medium  hover:bg-sky-700 hover:text-white ">
            Podcast
          </h1>
        </div>
        </div>

        <div className="grid grid-cols-1  mt-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <p className="mt-4 text-sm text-gray-700">{product.Content}</p>
              <button className="mt-2 text-sm  px-4 py-1  rounded-b-lg    font-medium bg-blue-800 text-white">
             <Link to={`/${product.href}`}>{product.Extra}</Link>   
            
              </button>
            </a>
          ))}
        </div>
     
      </div>
      <div className=" py-2"> 
     <Pagination/>
     </div>
    </div>
  );
}

