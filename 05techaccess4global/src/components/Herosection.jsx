import React from "react";

function Herosection() {
  return (
    <div>
      <div className="relative bg-zinc-900 text-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
            <div className="inline-flex items-center">
              <span className="ml-4 text-2xl font-bold">techaccess4global</span>
            </div>
            <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2">
              <p className="text-xs font-medium md:text-sm">
                What people say's about us.
                <span className="ml-2 cursor-pointer font-bold">Read More →</span>
              </p>
            </div>
            <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
              People who really cares about your business
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-gray-500">
            Many accessibility standards require that electronic documents be accessible to individuals with disabilities. This includes those in the popular Portable Document Format (PDF). We can help your organization quickly and easily bring large document collections into compliance with relevant standards.
            </p>
            <div className="mt-8">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get-touch
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-gray-200 p-4">
            <img
              className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
              src="https://images.pexels.com/photos/28176310/pexels-photo-28176310/free-photo-of-atrapando-burbujas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
