// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// target = 5
// output = 4


// сделаю сам

function binarySearch(nums, target)  {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] < target) {
          left = mid + 1
      } else if (nums[mid] > target) {
          right = mid - 1
      } else if (target === nums[mid]) {
          return mid
      }
  }

  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1))