import React, { useId } from 'react';

const Textarea = React.forwardRef(function Textarea({
  label,
  className = "",
  rows = 5,
  ...props
}, ref) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-1 pl-1 text-white"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        ref={ref}
        rows={rows}
        className={`px-3 py-2 rounded-lg bg-orange-50 outline-none  duration-200 border border-sand w-full resize-none ${className}`}
        {...props}
      />
    </div>
  );
});

export default Textarea;
