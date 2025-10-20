

/*

Подмассив

Дан массив:

[-2, 1, -3, 4, -1, 2, 1, -5, 4]

Нужно найти в нем последовательность чисел, которая даст наибольшую сумму и вывести результат:

// 6

*/

var maxSubArray = function(nums) {
  let max = nums[0];
  let total = 0

  for (let i = 0; i < nums.length; i++) {
      if (total < 0) {
          total = 0
      }
      total += nums[i]

      max = Math.max(max, total)
  }  

  return max
};

var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = []
  let prev = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
      const current = intervals[i]
      if (current[0] <= prev[1]) {
          prev[1] = Math.max(prev[1], current[1])
      } else {
          result.push(prev)
          prev = current
      }
  }

  result.push(prev)

  return result
};


/**
 * 
 * 
 * Переговорки

Дан массив интервалов, на которые хотят забронировать комнату:

[[5, 10], [0, 30], [15, 20]]

Нужно проверить их на отсутствие пересечений и вернуть результат:

// false

Сэндбокс подготовлен
 * 
 * 
*/
const isMeetingsNotOverlap = (intervals) => {  
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i - 1][1] > intervals[i][0]) {
      return false
    }
  }
  
  return true;
}

lengthOfLongestSubstring = function(s) {
  const letters = new Set();
  let max = 0;
  let left = 0

  for (let right = 0; right < s.length; right++) {

      while (letters.has(s[right])) {
          letters.delete(s[left])
          left++
      }

      letters.add(s[right])
      max = Math.max(max, right - left + 1)

  }
  
  return max
}

var isValidParentheses = function(s) {
  const map = {
      "(" : ")",
      "[" : "]",
      "{" : "}"
  }
  const stack = []
  
  for (const char of s) {
      if (char === '(' || char === '{' || char === '[') {
          stack.push(char)
      } else {
          if (map[stack.pop()] !== char) {
              return false
          }
      }
  }
  return !stack.length
};

var simplifyPath = function(path) {
  let strPath = path.split("/")
  const stack = []
  for (let i = 0; i < strPath.length; i++) {
      if (strPath[i] === '' || strPath[i] === '.') {
          continue
      }

      if (strPath[i] === '..') {
          stack.pop()
      } else {
          stack.push(strPath[i])
      }

  }

  return "/" + stack.join('/')
};


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

function arithmeticProgression(a1, d, n) {
  let progression = [];
  
  for (let i = 0; i < n; i++) {
    let term = a1 + i * d;
    progression.push(term);
  }
  
  return progression;
}