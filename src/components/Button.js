import React from 'react'
import PropTypes from 'prop-types'

const Button = ({className, onClick, children}) => {
    return (
        <button
            className={className}
            style={{margin: '10px 15px'}}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.string
}

export default Button
