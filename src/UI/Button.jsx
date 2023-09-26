import PropTypes from 'prop-types'
import classNames from 'classnames'


const Button = ({children, primary, secondary, success, warning, danger, outline, rounded, ...rest}) => {

    const classes = classNames('px-3 py-1.5 border m-2', rest.className, {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-500 bg-yellow-500 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-lg': rounded,
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-800": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-500": outline && warning,
        "text-red-500": outline && danger,
    })
  return (
    <button {...rest} className={classes}>
        {children}
    </button>
  )

}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary) 
            + Number(!!secondary) 
            + Number(!!success) 
            + Number(!!warning)
            + Number(!!danger)

        if(count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be true') 
        }
       
    }
}

export default Button