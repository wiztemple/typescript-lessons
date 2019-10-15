const carMakers: string[] = ["Lamborghini", "Ford", "VolksWagen", "Toyota", "Mercedes"];

const dates = [
  new Date(),
  new Date()
]

const carsByMake: string[][] = [
  ['Aventador SV Roadster'],
  ['Expedition'],
  ['Arteon'],
  ['Camry'],
  ['Benz E-Class']
]

// Help wit inferenece when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// prevents incompatible values
// carMakers.push(10)

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
})

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('22-01-23');
importantDates.push(new Date());