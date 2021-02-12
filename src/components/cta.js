import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const CTA = ({ message, to, align }) => {
  return (
    <Link to={to} className={`flex ${align}`}>
      <button className="bg-black text-gray-100 hover:bg-gray-100 hover:text-black shadow-md text-xl font-bold rounded-md px-4 py-2">
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
