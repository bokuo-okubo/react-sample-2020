import { useState, useEffect } from 'react'

type Validator = (_: string) => boolean

const defaultValidator: Validator = str => !str

export const useInput = (initialValue: string, validator?: Validator) => {
  if (!validator) validator = defaultValidator

  const [value, set] = useState(initialValue)
  const [error, setError] = useState(true)

  useEffect(() => {
    validator && setError(validator(value))
  }, [validator, value])

  const onChange = (e: any) => {
    set(e.target.value)
    validator && setError(validator(e.target.value))
  }

  return { value, error, onChange }
}
