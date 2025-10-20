/*
Дана древовидная структура следующего формата:

const tree = {
  type: 'nested',
  children: [
    { type: 'added', value: 42 },
    {
      type: 'nested',
      children: [
        { type: 'added', value: 43 },
      ],
    },
    { type: 'added', value: 44 },
    ...
  ]
}

Необходимо написать функцию `getNodes(tree, type)`, которая возвращает все ноды в порядке следования, соответствующие переданному типу.

Глубина вложенности любая.

Пример:

const addedItems = getNodes(tree, 'added');

// Результат:
[
  { type: 'added', value: 42 },
  { type: 'added', value: 43 },
  { type: 'added', value: 44 },
  ...
]
*/

const getNodes = (root, type) => {
  const stack = [root]
  const result = []
  while (stack.length) {
    const current = stack.pop()

    if (current.type === type) {
      result.push(current)
    }

    if (current.children) {
      stack.push(...current.children)
    }
  }

  return result.reverse()
}


// Тестирование

const treeTest = {
  type: "nested",

  children: [
    { type: "added", value: 42 },

    {
      type: "nested",

      children: [{ type: "added", value: 43 }],
    },

    { type: "added", value: 44 },
  ],
};

console.log(getNodes(treeTest, "added"));
// [
// { type: 'added', value: 42 },
// { type: 'added', value: 43 },
// { type: 'added', value: 44 }
// ]