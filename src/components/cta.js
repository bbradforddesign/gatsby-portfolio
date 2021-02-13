import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const CTA = ({ message, to, align }) => {
  return (
    <Link to={to} className={`flex ${align}`}>
      <button className="px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-gray-100 hover:bg-gray-700">
        {message}
      </button>
    </Link>
  )
}

CTA.propTypes = {
  to: PropTypes.string,
  message: PropTypes.string,
  align: PropTypes.string,
}

CTA.defaultProps = {
  to: `#`,
  message: "Button",
  align: "justify-center",
}

export default CTA
