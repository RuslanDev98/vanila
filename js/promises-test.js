// Тестовые кейсы для проверки собственных Promise.all и Promise.race

// Вспомогательная функция для создания промиса с задержкой
const createPromise = (value, delay) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

// Тестовый кейс для Promise.all - все промисы должны выполниться
const testPromiseAll = () => {
  console.log('\n🧪 Тест Promise.all:');
  return [
    createPromise('Первый', 100),
    createPromise('Второй', 50),
    createPromise('Третий', 200)
  ];
  // Ожидаемый результат: ['Первый', 'Второй', 'Третий'] через 200мс
};

// Тестовый кейс для Promise.race - должен вернуться самый быстрый
const testPromiseRace = () => {
  console.log('\n🏃 Тест Promise.race:');
  return [
    createPromise('Медленный', 300),
    createPromise('Быстрый', 100),
    createPromise('Средний', 200)
  ];
  // Ожидаемый результат: 'Быстрый' через 100мс
};

// Пример использования ваших методов:
console.log('Для тестирования используйте:');
console.log('myPromiseAll(testPromiseAll())');
console.log('myPromiseRace(testPromiseRace())');

// Для сравнения - нативные методы:
Promise.all(testPromiseAll()).then(result => {
  console.log('🔵 Нативный Promise.all результат:', result);
});

Promise.race(testPromiseRace()).then(result => {
  console.log('🔴 Нативный Promise.race результат:', result);
});


// my promise all

const myPromiseAll = (promises) => {
  if (!promises.length) {
    return Promise.resolve([])
  }
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;

    promises.forEach((promise, index) => {
      promise.then((result) => {
        results[index] = result
        count++

        if (count === promises.length) {
          resolve(results)
        }

      }).catch(reject)
    })
  })
}

const myPromiseRace = (promises) => {
  if (!promises.length) {
    return Promise.resolve()
  }
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject) 
    })
  })
}

myPromiseAll(testPromiseAll()).then(result => {
  console.log('🔵 My Promise All результат:', result);
}).catch(error => {
  console.log('🔴 My Promise All ошибка:', error);
});


myPromiseRace(testPromiseRace()).then(result => {
  console.log('🔵 My Promise Race результат:', result);
}).catch(error => {
  console.log('🔴 My Promise Race ошибка:', error);
});
