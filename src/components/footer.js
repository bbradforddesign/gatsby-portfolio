import React from "react"

const Footer = () => (
  <footer class="flex flex-col md:flex-row items-start justify-between inline-block w-full p-4">
    <p class="md:flex-grow text-lg font-semibold mb-0">2021 Blake Bradford</p>

    <div class="w-auto text-md">
      <a
        class="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-gray-100 mr-4"
        href="/"
      >
        LinkedIn
      </a>

      <a
        class="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-gray-100 mr-4"
        href="/"
      >
        GitHub
      </a>

      <a
        class="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-gray-100"
        href="/"
      >
        Email
      </a>
    </div>
  </footer>
)

export default Footer
