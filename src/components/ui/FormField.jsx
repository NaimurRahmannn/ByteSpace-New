import { useId } from 'react'

export default function FormField({
  id,
  label,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  autoComplete,
  required = false,
  className = '',
}) {
  const generatedId = useId()
  const inputId = id || generatedId

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label
          className="font-body text-body-sm font-medium text-text-primary"
          htmlFor={inputId}
        >
          {label}
        </label>
      )}
      <input
        autoComplete={autoComplete}
        className="h-[52px] w-full rounded-xl border border-[#E5E6E8] bg-white px-5 font-body text-base text-text-primary placeholder:text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        id={inputId}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
    </div>
  )
}
