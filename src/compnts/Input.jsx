import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    style={minWidth:"50%"},
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='cyber-label' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`cyber-input w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input