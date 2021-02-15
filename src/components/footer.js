import React from "react"
import Skyline from "../assets/skyline.svg"

const Footer = () => (
  <footer>
    <Skyline className="w-full max-w-screen-sm -mb-1" />
    <div class="bg-black flex flex-col md:flex-row items-start justify-between inline-block w-full p-4">
      <p class="text-white md:flex-grow text-sm font-semibold mb-0">
        2021 Blake Bradford
      </p>

      <div class="w-auto text-xs">
        <a
          class="text-white hover:text-gray-100 block mt-1 md:inline-block md:mt-0 mr-4"
          href="/"
        >
          LinkedIn
        </a>

        <a
          class="text-white hover:text-gray-100 block mt-1 md:inline-block md:mt-0 mr-4"
          href="/"
        >
          GitHub
        </a>

        <a
          class="text-white hover:text-gray-100 block mt-1 md:inline-block md:mt-0"
          href="/"
        >
          Email
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
