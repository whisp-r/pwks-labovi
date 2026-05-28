// 1. 
function delayedGreeting(delayMs, greetingText) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(greetingText);
      resolve();
    }, delayMs);
  });
}

delayedGreeting(2000, "Hello, world!");

// 2. 
function checkWeather(city) {
  return new Promise((resolve, reject) => {
    const isSunny = Math.random() > 0.5;
    if (isSunny) {
      resolve(`Vrijeme je suncano u ${city}`);
    } else {
      reject(`Vrijeme nije suncano u ${city}`);
    }
  });
}

checkWeather("Zagreb")
  .then((message) => console.log(message))
  .catch((message) => console.log(message)); 

// 3. 
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
  console.log('Prije cekanja');
  await delay(3000); 
  console.log('Nakon cekanja');
}

example();

// 4 
function getData(callback) {
  setTimeout(function() {
    const data = { message: 'Ovo su podaci' };
    callback(data);
  }, 4000);
}

function processData(data) {
  console.log('Obrada podataka:', data.message);
}

getData(processData);
console.log('Nastavak izvrsavanja');

// 5. 
function calculateSum(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000); // simulate 1 second delay
  });
}

async function calculateAndPrintSum(a, b) {
  const result = await calculateSum(a, b);
  console.log(result);
}

calculateAndPrintSum(5, 3); 

// 6.
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Broj je paran.");
    } else {
      reject("Broj je neparan.");
    }
  });
}

checkNumber(4)
  .then((message) => console.log(message))
  .catch((message) => console.log(message));