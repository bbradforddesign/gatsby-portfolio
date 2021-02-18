import React from "react"
import Skyline from "../assets/skyline.svg"

const Footer = () => (
  <footer>
    <Skyline className="w-full max-w-screen-sm -mb-1" />
    <div className="bg-black flex flex-col lg:flex-row items-start justify-between inline-block w-full p-4">
      <p className="text-white lg:flex-grow text-sm font-semibold mb-0">
        2021 Blake Bradford
      </p>

      <div className="w-auto text-xs">
        <a
          className="text-white hover:text-gray-100 block mt-1 lg:inline-block lg:mt-0 mr-4"
          href="/"
        >
          LinkedIn
        </a>

        <a
          className="text-white hover:text-gray-100 block mt-1 lg:inline-block lg:mt-0 mr-4"
          href="/"
        >
          GitHub
        </a>

        <a
          className="text-white hover:text-gray-100 block mt-1 lg:inline-block lg:mt-0"
          href="/"
        >
          Email
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
