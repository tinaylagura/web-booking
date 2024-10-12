// IsEmpty
export const isEmpty = (value) => {
  if (value === null || value === undefined || value === '') return true

  return !!(Array.isArray(value) && value.length === 0)
}

// isNullOrUndefined
export const isNullOrUndefined = (value) => {
  return value === null || value === undefined
}

// isEmptyArray
export const isEmptyArray = (arr) => {
  return Array.isArray(arr) && arr.length === 0
}

// isObject
export const isObject = (obj) =>
  obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj)

// Required Validator
export const requiredValidator = (value) => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
    return 'This field is required'

  return !!String(value).trim().length || 'This field is required'
}

// Email Validator
export const emailValidator = (value) => {
  if (isEmpty(value)) return true
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|("+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (Array.isArray(value))
    return (
      value.every((val) => re.test(String(val))) || 'The email field must be a valid email address'
    )
  return re.test(String(value)) || 'The email field must be a valid email address'
}

//  Password Validator
export const passwordValidator = (password) => {
    const regExp = /(?=.*\d) (?=.*[a-z]) (?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/
    const validPassword = regExp.test(password)

    return (
        // eslint-disable-next-line operator-linebreak
        validPassword ||
        'Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
    )
}

// Confirm Password Validator
export const confirmedValidator = (value, target) =>
    value === target || 'The Confirm Password field confirmation does not match'

// Between Validator
export const betweenValidator = (value, min, max) => {
    const valueAsNumber = Number(value)

    return (
        (Number(min) <= valueAsNumber && Number(max) >= valueAsNumber) ||
        `Enter a number between ${min} and ${max}`
    )
}

// Integer Validator
export const integerValidator = (value) => {
    if (isEmpty(value)) return true
    if (Array.isArray (value))
        return value.every((val) => /^-?[0-9]+$/.test(String(val))) || 'This field must be a number'
    return /^-?[0-9]+$/.test(String (value)) || 'This field must be a number'

}