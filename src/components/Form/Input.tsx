import { forwardRef, InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...rest }, ref) => {
    return (
      <div className={className}>
        <input
          ref={ref}
          {...rest}
          className={`transition-colors w-full p-4 border rounded-md ${
            !error ? 'border-[#121214]' : 'border-[#F75A68]'
          } bg-[#121214] text-base font-Roboto font-normal focus:border-[#00B37E] focus-visible:outline-none`}
        />

        {error && <span className="mt-2 text-[#F75A68] text-xs">{error}</span>}
      </div>
    )
  }
)

InputComponent.displayName = 'Input'

export const Input = InputComponent
