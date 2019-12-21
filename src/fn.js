/**
 * Debounce function execution
 * @param {function} func the function to invoke
 * @param {number} delay invoke function after given milliseconds
 * @return {function} debounced function
 */
export const debounce = (func, delay) => {
  let inDebounce

  return function() {
    const context = this
    const args = arguments

    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

/**
 * Throttle function execution
 * @param {function} func the function to invoke
 * @param {number} period limit one invokation per period milliseconds
 * @return {function} the throttled function
 */
export const throttle = (func, period) => {
  let lastFunc
  let lastRan

  return function() {
    const context = this
    const args = arguments

    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= period) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, period - (Date.now() - lastRan))
    }
  }
}
