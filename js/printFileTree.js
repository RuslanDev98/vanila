Решение
const data = {
  name: "folder",
  children: [
    { name: "file1.txt" },
    { name: "file2.txt" },
    {
      name: "images",
      children: [
        { name: "image.png" },
        {
          name: "vacation",
          children: [{ name: "crocodile.png" }, { name: "penguin.png" }],
        },
      ],
    },
    { name: "shopping-list.pdf" },
  ],
};

function printFileTree(data) {}