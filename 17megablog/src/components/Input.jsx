import React, { useId, forwardRef } from 'react';

const Input = forwardRef(function Input(
  {
    label,
    className = "",
    type = "text",
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className='w-full'>
      {label && (
        <label
          className='inline-block mb-1 p-1'
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        id={id}
        {...props}
      />
    </div>
  );
});

export default Input;
