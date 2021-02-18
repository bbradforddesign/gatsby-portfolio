import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <header className="flex items-center justify-between flex-wrap pt-4">
      <Link to="/">
        <h1 className="font-bold text-xl tracking-tight">{siteTitle}</h1>
      </Link>
      <div className="lg:hidden -mt-4">
        <button
          onClick={() => setExpanded(!expanded)}
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
          expanded ? `block` : `hidden`
        } dropdown-modal z-20 absolute top-14 bg-black flex flex-col items-center justify-center lg:block lg:bg-transparent lg:static lg:flex-row lg:items-center lg:w-auto`}
      >
        <nav className="text-md lg:flex-grow">
          <Link
            to={`/about`}
            className="block mt-4 text-white hover:text-yellow-400 mr-4 lg:inline-block lg:mt-0 lg:text-black lg:hover:text-gray-300"
          >
            About
          </Link>
          <Link
            to={`/portfolio`}
            className="block mt-4 text-white hover:text-yellow-400 mr-4 lg:inline-block lg:mt-0 lg:text-black lg:hover:text-gray-300"
          >
            Portfolio
          </Link>
          <Link
            to={`/contact`}
            className="block my-4 text-white hover:text-yellow-400 lg:inline-block lg:mt-0 lg:text-black lg:hover:text-gray-300"
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
