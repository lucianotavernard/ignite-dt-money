import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode
}

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...rest }, ref) => {
    return (
      <label htmlFor={id}>
        <input
          id={id}
          type="radio"
          ref={ref}
          {...rest}
          className="peer hidden"
        />

        {label}
      </label>
    )
  }
)

InputComponent.displayName = 'InputRadio'

export const InputRadio = InputComponent
