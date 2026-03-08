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
          className="cyber-label"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        ref={ref}
        rows={rows}
        className={`cyber-input w-full resize-none ${className}`}
        {...props}
      />
    </div>
  );
});

export default Textarea;
