import React from "react";

function Footer() {
  return (
    <footer className="font-sans text-gray-800 bg-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight xl:text-2xl">
              Subscribe to our newsletter to get updates.
            </h1>

            <div className="flex flex-col mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="w-full px-4 py-2 text-gray-800 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                Subscribe
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-gray-800">Industries</p>

            <div className="flex flex-col space-y-2">
              <p className="text-gray-800 hover:underline hover:cursor-pointer hover:text-blue-500">
                Retail & E-Commerce
              </p>
              <p className="text-gray-800 hover:underline hover:cursor-pointer hover:text-blue-500">
                Information Technology
              </p>
              <p className="text-gray-800 hover:underline hover:cursor-pointer hover:text-blue-500">
                Finance & Insurance
              </p>
            </div>
          </div>
        </div>

        <hr className="h-2 my-6 border-gray-200 md:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center flex-1 gap-4 sm:justify-start">
            <img
              src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
              width="130"
              height="110"
              alt="Google Play"
            />
            <img
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
              width="130"
              height="110"
              alt="App Store"
            />
          </div>

          <div className="flex justify-center gap-4 sm:justify-end">
            <img
              src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
              width="30"
              height="30"
              alt="Facebook"
            />
            <img
              src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
              width="30"
              height="30"
              alt="Twitter"
            />
            <img
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width="30"
              height="30"
              alt="Instagram"
            />
            <img
              src="https://www.svgrepo.com/show/94698/github.svg"
              width="30"
              height="30"
              alt="GitHub"
            />
            <img
              src="https://www.svgrepo.com/show/22037/path.svg"
              width="30"
              height="30"
              alt="Path"
            />
            <img
              src="https://www.svgrepo.com/show/28145/linkedin.svg"
              width="30"
              height="30"
              alt="LinkedIn"
            />
            <img
              src="https://www.svgrepo.com/show/22048/dribbble.svg"
              width="30"
              height="30"
              alt="Dribbble"
            />
          </div>
        </div>
        <p className="p-8 text-lg text-center">
          © 2023 Your Company Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
