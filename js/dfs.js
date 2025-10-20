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


const getNodesByType = (tree, type) => {
  const result = []
  const stack = [tree]

  while (stack.length !== 0) {
    console.log('stack = ', stack)
    const node = stack.pop()
    if (node.type === type) {
      result.push(node)
    }

    if (node.children) {
      stack.push(...node.children)
    }
  }

  return result.reverse()
}


// Тестирование

const tree = {
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

console.log(getNodesByType(tree, "added"));