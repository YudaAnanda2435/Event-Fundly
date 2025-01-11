import React from "react";
import { Link } from "react-router-dom"; // Import Link

export function HeroSection() {
  return (
    <section id="hero" className="bg-black min-h-screen">
      <div className="container mx-auto px-6 md:px-20 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="space-y-7 text-white w-full md:w-1/2">
            <h1 className="text-2xl  sm:text-4xl text-center md:text-5xl   lg:text-7xl md: font-medium font-fontJakarta mt-32 md: whitespace-nowrap">
              <span className="text-blue-500">SMART</span>-SAVINGS
              <br />
              PLANNED-EVENTS
            </h1>
            <p className="text-center md:text-start text-gray-400 text-[16px] lg:text-justify font-fontJakarta cursor-pointer">
              <span className="hover:text-blue-600">
                Nunc urna at, elit Nullam nulla,
              </span>
              convallis. Donec nulla,
              <span className="hover:text-blue-600">
                gravida sollicitudin. ipsum id fringilla elementum Vestibulum
                tincidunt ex
              </span>
              <span className="hover:text-blue-600">
                tincidunt Ut odio tortor. non leo. elit nisl.
              </span>
              <span className="hover:text-blue-600">
                non venenatis vel faucibus non id tincidunt Cras non. nisl.
              </span>
            </p>
            <div className="text-center md:text-start">
              <Link
                to="/signup"
                className="m-auto text-gray-900 font-fontJakarta hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* <div className="relative w-full md:w-1/2 aspect-[1/1] rounded-2xl overflow-hidden">
            <img
              src="/assets/grafik.gif"
              alt="3D isometric financial planning illustrations"
              className="object-cover w-full h-full"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
