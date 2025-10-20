
const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    let count = 0
    let results = []
    promises.forEach((promise, index) => {
      promise.then((result) => {
        results[index] = result
        count++
        if (count === promises.length) {
          resolve(results)
        }
      })
      .catch(reject)
    })
  })
}

const promiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject)
    })
  })
}

const promiseAny = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject)
    })
  })
}

const deepCopy = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  let newObject = Array.isArray(obj) ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObject[key] = deepCopy(obj[key])
    }
  }

  return newObject
}

