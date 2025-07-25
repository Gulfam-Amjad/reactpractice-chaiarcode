import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor= 'bg-blue-600',
    textColor = 'text-white',
    classname = '',
    ...props,

}) {
  return (
    <button className={`py-2 px-4 rounded-full ${classname} ${textColor} ${type} ${bgColor}`} {...props}>
         {children}
    </button>>
  )
}

export default Button