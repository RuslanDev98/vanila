/*
Дан массив целых неотрицательных чисел, нужно сгруппировать друг с другом числа,
которые можно получить путём перестановки цифр их составляющих,
нули при этом игнорируем, т. к. нет числа 011.
Решение должно быть максимально эффективно по памяти и времени.
*/

function digitPermutation(arr) {
  let map = {}

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i].toString().replace(/0+/g, '').split('').sort().join('')
    if (!map?.[key]) {
      map[key] = []
    }
    map[key].push(arr[i])
  }

  return Object.values(map)
}

console.clear();
console.log("start test");
console.log(
  digitPermutation([1230, 99, 23001, 123, 111, 300021, 101010, 90000009, 9])
);
// [[99, 90000009], [111, 101010], [1230, 23001, 123, 300021], [9]]
console.log(digitPermutation([11, 22])); // [[11], [22]]
console.log(digitPermutation([11111111112, 122222222222])); // [[11111111112], [122222222222]]
console.log("end test");