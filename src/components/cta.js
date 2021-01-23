import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const CTA = ({ message, to }) => {
  return (
    <Link to={to}>
      <button class="bg-yellow-300 text-blue-900 hover:bg-yellow-100 shadow-md text-lg font-bold rounded-lg px-2 py-1">
        {message}
      </button>
    </Link>
  )
}

CTA.propTypes = {
  to: PropTypes.string,
  destination: PropTypes.string,
}

CTA.defaultProps = {
  to: ``,
  destination: "#",
}

export default CTA
