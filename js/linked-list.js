

function SingleLinkedList(val, next) {
  this.value = val || 0
  this.next = next || null


    
}

SingleLinkedList.prototype.printAllList = function() {
  let values = []
  let current = this
  while (current) {
    values.push(current.value)
    current = current.next
  }
  console.log(values.join(' -> '))
}

let list = new SingleLinkedList(1)
list.next = new SingleLinkedList(2)
list.next.next = new SingleLinkedList(3)

let list2 = new SingleLinkedList(4)
list2.next = new SingleLinkedList(5)
list2.next.next = new SingleLinkedList(6)

let result = new SingleLinkedList()
let current = result

while (list || list2) {
  current.value = list.value + list2.value
  list = list.next
  list2 = list2.next
  
  if (list || list2) {
    current.next = new SingleLinkedList()
    current = current.next
  }
}

result.printAllList()
