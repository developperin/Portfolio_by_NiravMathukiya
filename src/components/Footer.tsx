import React from "react";
// import img from "@/images/2.png";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800">
        <div className="mx-auto max-w-screen-xl py-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-white/80 sm:justify-start">
              {/* <img src="@/images/2.png" alt="" className="w-24" /> */}
              @ Nirav mathukiya
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2022. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
