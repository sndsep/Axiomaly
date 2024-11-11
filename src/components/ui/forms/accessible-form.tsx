import React from 'react'
import { useId } from 'react'

interface AccessibleFormFieldProps {
  label: string
  error?: string
  required?: boolean
  description?: string
  children: React.ReactNode
}

export function AccessibleFormField({
  label,
  error,
  required,
  description,
  children,
}: AccessibleFormFieldProps) {
  const id = useId()
  const descriptionId = useId()
  const errorId = useId()

  return (
    <div role="group" aria-labelledby={id}>
      <label
        id={id}
        htmlFor={id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      
      {description && (
        <p
          id={descriptionId}
          className="mt-1 text-sm text-gray-500"
        >
          {description}
        </p>
      )}
      
      {React.cloneElement(children as React.ReactElement, {
        id,
        'aria-describedby': description ? descriptionId : undefined,
        'aria-invalid': error ? true : undefined,
        'aria-errormessage': error ? errorId : undefined,
        required,
      })}
      
      {error && (
        <p
          id={errorId}
          className="mt-1 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  )
}

