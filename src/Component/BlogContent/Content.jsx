import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
// Content.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../Features/Createblog";

export function Content() {
  const dispatch = useDispatch();
  const { blog, loading, error } = useSelector((state) => state.blog);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    dispatch(getBlog({ page: currentPage, perPage: 3 }));
  }, [dispatch, currentPage]);
  const totalPages = Math.ceil(blog.totalitem / 3); // Assuming each page contains 10 items
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="bg-stone-100 relative ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <div className="absolute top-3 ">
          <h1 className=" text-xl   font-bold    py-1">
            Blog Website Templates
          </h1>
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
          {blog.data.map((product) => (
            <a href="/" className="group" key={product.id}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.image}
                  alt="shshsgsfsg"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <p className="mt-4 text-sm text-gray-700">
                {product.description.substring(0, 30)}...
              </p>
              <button className="mt-2 text-sm px-4 py-1 rounded-b-lg font-medium bg-blue-800 text-white">
                Read More
              </button>
            </a>
          ))}
        </div>
      </div>
      <div className=" py-2">
        <div className="flex items-center justify-between border-t border-gray-200 bg-stone-100 px-4 py-8 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-xl">1</span> to{" "}
                <span className="font-xl">{blog.perPage}</span> of{" "}
                <span className="font-xl">{blog.totalitem}</span> results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-8 w-10" aria-hidden="true" />
                </a>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <a
                      key={page}
                      href="#"
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                        currentPage === page
                          ? "bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </a>
                  )
                )}
                <a
                  href="#"
                  className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
