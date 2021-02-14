import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header className="flex items-center justify-between flex-wrap pt-4">
      <h1 className="font-bold text-xl tracking-tight mb-0">
        <Link>{siteTitle}</Link>
      </h1>
      <div className="block md:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-gray-100 hover:border-gray-100 hover:bg-black"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } z-20 absolute top-12 left-0 pl-4 w-96 ml-8 bg-gray-400 block rounded-b-2xl md:bg-transparent md:static md:flex md:items-center md:w-auto`}
      >
        <nav className="text-md md:flex-grow">
          <Link
            to={`/about`}
            className="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-gray-100 mr-4"
          >
            About
          </Link>
          <Link
            to={`/portfolio`}
            className="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-gray-100 mr-4"
          >
            Portfolio
          </Link>
          <Link
            to={`/contact`}
            className="block my-4 md:inline-block md:mt-0 text-gray-700 hover:text-gray-100"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
