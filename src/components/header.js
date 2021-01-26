import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="flex flex-row justify-between p-4">
    <a href="/" className="text-2xl font-black">
      <h1>{siteTitle}</h1>
    </a>
    <nav>
      <ul className="flex flex-row items-center font-medium">
        <li className="mx-3 hover:text-yellow-300">
          <Link to="/about/">About Me</Link>
        </li>
        <li className="mx-3 hover:text-yellow-300">
          <Link to="/portfolio/">Portfolio</Link>
        </li>
        <li className="mx-3 hover:text-yellow-300">
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
