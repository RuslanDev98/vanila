
// Демонстрация различий между обычными функциями и стрелочными функциями

const obj = {
  name: 'John',
  age: 30,
  
  // Обычная функция - имеет собственный this
  testFunction: function() {
    console.log('🔵 Обычная функция:');
    console.log('this =', this); // указывает на obj
    console.log('this.name =', this.name); // 'John'
    console.log('this.age =', this.age); // 30
    
    // Стрелочная функция ВНУТРИ обычной функции
    const arrowFunction = () => {
      console.log('🟢 Стрелочная внутри обычной:');
      console.log('this =', this); // наследует this от testFunction (obj)
      console.log('this.name =', this.name); // 'John'
      console.log('this.age =', this.age); // 30
    }
    arrowFunction();
  },
  
  // Стрелочная функция - НЕ имеет собственного this
  arrowTestFunction: () => {
    console.log('🔴 Стрелочная функция:');
    console.log('this =', this); // указывает на window/global
    console.log('this.name =', this.name); // undefined
    console.log('this.age =', this.age); // undefined
  },
  
  // Альтернативный способ с правильным this для стрелочной функции
  correctArrowFunction: function() {
    // Возвращаем стрелочную функцию, которая наследует this от обычной функции
    return () => {
      console.log('🟡 Правильная стрелочная:');
      console.log('this.name =', this.name); // 'John'
      console.log('this.age =', this.age); // 30
    }
  }
}

console.log('=== ДЕМОНСТРАЦИЯ РАЗЛИЧИЙ THIS ===');
obj.testFunction();
console.log('---');
obj.arrowTestFunction();
console.log('---');
const correctArrow = obj.correctArrowFunction();
correctArrow();

// Дополнительная демонстрация
console.log('\n=== ДОПОЛНИТЕЛЬНЫЕ ПРИМЕРЫ ===');

// Пример с bind()
const boundFunction = obj.arrowTestFunction.bind(obj);
console.log('🟠 Попытка bind() со стрелочной функцией:');
boundFunction(); // bind не работает со стрелочными функциями!

// Пример с call()
console.log('🟠 Попытка call() со стрелочной функцией:');
obj.arrowTestFunction.call(obj); // call не работает со стрелочными функциями!

// Тесты для Promise.all и Promise.race находятся в файле promises-test.js
