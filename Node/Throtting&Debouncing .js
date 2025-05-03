
// Throttling: Ensures a function is called at most once in a specified time period
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Example of throttle usage
const throttledFunction = throttle(() => {
  console.log('Throttled function called');
}, 1000);

// Debouncing: Delays execution of a function until after a specified wait period
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}

// Example of debounce usage 
const debouncedFunction = debounce(() => {
  console.log('Debounced function called');
}, 1000);

// Example usage with event listeners
// window.addEventListener('scroll', throttledFunction); // Throttle scroll events////
// window.addEventListener('resize', debouncedFunction); // Debounce resize events