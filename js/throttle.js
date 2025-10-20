// Вариант 1: Throttle через Date.now() (проверка времени)
const throttle = (fn, delay) => {
  let lastCall = 0
  return function(...args) {
    console.log('args = ', args)
    const now = Date.now()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    fn(...args)
  }
}

// Вариант 2: Throttle через setTimeout
const throttleWithTimeout = (fn, delay) => {
  let timeoutId = null
  let lastArgs = null
  
  return function(...args) {
    lastArgs = args
    
    if (!timeoutId) {
      // Вызываем функцию сразу
      fn.apply(this, args)
      // Устанавливаем таймер, чтобы блокировать вызовы на период delay
      timeoutId = setTimeout(() => {
        timeoutId = null
        // Если были вызовы во время блокировки, выполним последний
        if (lastArgs) {
          fn.apply(this, lastArgs)
          lastArgs = null
        }
      }, delay)
    }
  }
}

// Вариант 3: Trailing throttle (вызов в конце)
const throttleTrailing = (fn, delay) => {
  let timeoutId = null
  
  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    
    timeoutId = setTimeout(() => {
      fn.apply(this, args)
      timeoutId = null
    }, delay)
  }
}

// Пример использования
const throttledFn = throttleWithTimeout(() => {
  console.log('throttledFn with setTimeout', new Date().toLocaleTimeString())
}, 2000)

window.addEventListener('scroll', throttledFn)

const myThrottle = (fn, delay) => {
  let timeoutId = null
  let lastArgs = null

  return (...args) => {
    lastArgs = args

    if (!timeoutId) {
      fn.apply(this, args)


      timeout = setTimeout(() => {
        timeout = null
        fn.apply(this, lastArgs)
        lastArgs = null
      }, delay)
    }
  }
}



function digitPermutation(arr) {
  const groups = {};

  for (let num of arr) {
    const key = String(num).replace(/0/g, "").split("").sort().join("");

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(num);
  }

  return Object.values(groups);
}

console.log(
  digitPermutation([1230, 99, 23001, 123, 111, 300021, 101010, 900009, 9])
); // [[99, 900009], [111, 101010], [23001, 123, 23001, 300021], [9]]
console.log(digitPermutation([11, 22])); // [[11], [22]]
console.log(digitPermutation([11111112, 12222222])); // [[11111112], [12222222]]