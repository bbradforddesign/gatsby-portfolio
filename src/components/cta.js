import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const CTA = ({ message, to, align }) => {
  return (
    <Link to={to} className={`flex ${align}`}>
      <button className="bg-yellow-300 text-blue-900 hover:bg-yellow-100 shadow-md text-lg font-bold rounded-lg px-2 py-1">
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
