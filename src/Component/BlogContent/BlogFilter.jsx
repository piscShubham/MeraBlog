const products = [
    {
      id: 1,
      Content:
        "Tal slender porcelain bottle with natural clay textured body and cork stopper. ",
      href: "/blogfilter",
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
      href: "#",
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
      href: "#",
      Extra: "Read More",
      imageSrc:
        "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/9c2624bcbbd9012005eae04dbdb0a12bccae7cdb552215f5e7ff8c54345edefc.jpg/v1/fill/w_538%2Ch_303%2Cq_90%2Cusm_0.60_1.00_0.01/9c2624bcbbd9012005eae04dbdb0a12bccae7cdb552215f5e7ff8c54345edefc.webp",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    
   
  ];
export function BlogFilter(){
    return(
        <div class="flex mt-4 h-screen  ">
        <div class=" w-2/4   border-green-500 ml-32 ">
        <div>
          <img src="https://static.wixstatic.com/media/f61af8_e15083b95c954f71a1b4d9a5a78ded70~mv2_d_2121_1312_s_2.jpg/v1/fill/w_1899,h_849,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_e15083b95c954f71a1b4d9a5a78ded70~mv2_d_2121_1312_s_2.jpg" />
          <span className="flex ">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="w-8  h-8 rounded-lg mt-2 "
            />
            <p className="ml-3 mt-2">Shubham pandey</p>
          </span>
          {/* <p className=" ml-8">Posted an our ago</p> */}
          <dl className=" mt-2">
            <h1 className=" text-2xl font-bold mt-5">
              Headings that are well formatted and clearly worded aid both
              visual and nonvisual readers of all abilities{" "}
            </h1>
            
            <p className=" mb-5 py-8 text-justify   font-sans hover:font-serif">
              A paragraph is defined as “a group of sentences or a single
              sentence that forms a unit” (Lunsford and Connors 116). Length and
              appearance do not determine whether a section in a paper is a
              paragraph. For instance, in some styles of writing, particularly
              journalistic styles, a paragraph can be just one sentence long. A
              paragraph is defined as “a group of sentences or a single sentence
              that forms a unit” (Lunsford and Connors 116). Length and
              paragraph. For instance, in some styles of writing, particularly
              journalistic styles, a paragraph can be just one sentence long. A
              paragraph is defined as “a group of sentences or a single sentence
              that forms a unit” (Lunsford and Connors 116). Length and
              paragraph is defined as “a group of sentences or a single sentence
              that forms a unit” (Lunsford and Connors 116). Length and
              paragraph. For instance, in some styles of writing, particularly
              journalistic styles, a paragraph can be just one sentence long. A
              paragraph is defined as “a group of sentences or a single sentence
              that forms a unit” (Lunsford and Connors 116). Length and
              A paragraph is defined as “a group of sentences or a single
              sentence that forms a unit” (Lunsford and Connors 116). Length and
              appearance do not determine whether a section in a paper is a
              paragraph. For instance, in some styles of writing, particularly
              journalistic styles, a paragraph can be just one sentence long. A
              paragraph is defined as “a group of sentences or a single sentence
              that forms a unit” (Lunsford and Connors 116). Length and
              paragraph. For instance, in some styles of writing, particularly
              journalistic styles, a paragraph can be just one sentence long. A
              paragraph is defined as “a group of sentences or a single sentence
              that forms a unit” (Lunsford and Connors 116). Length and
              paragraph is defined as “a group of sentences or a single sentence
              that forms a unit” (Lunsford and Connors 116). Length and
              paragraph. For instance, in some styles of writing, particularly
              journalistic styles, a paragraph can be just one sentence long. A
              paragraph is defined as “a group of sentences or a single sentence
              that forms a unit” (Lunsford and Connors 116). Length and
              
            </p>
          
          </dl>
        </div>
        </div>
        <div class="w-1/4 h-1/4 mr-3  flex flex-col space-y-4  ml-32   ">
       

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
                {product.Extra}
              </button>
            </a>
          ))}
        </div>

      </div>
    )
}
  
