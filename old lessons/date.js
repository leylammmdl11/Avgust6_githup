console.log("🌟Tapşırıq 1🌟")
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  kitabInfo() {
    return `Kitabın adı: ${this.title}, Müəllif: ${this.author}, İli: ${this.year}`;
  }
}

const myBook = new Book("Alice in wonderland","Lewis Carroll", 1865);
console.log(myBook.kitabInfo());
 

console.log("🌟Tapşırıq 2🌟")
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    console.log(`${this.make} ${this.model} (${this.year})`);
  }
}


class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
    super(make, model, year); 
    this.batteryCapacity = batteryCapacity;
  }

  getInfo() {
    console.log(`${this.make} ${this.model} (${this.year}), Batareya: ${this.batteryCapacity}`);
  }
}
 
const bmw = new ElectricCar("BMW" , "Model 5" , 2021, "85 kWh")
bmw.getInfo()
 
const mercedes = new ElectricCar("Mercedes" , "Model 4" , 2023, "75 kWh")
mercedes.getInfo()



    toggleAvailable(isAv) {
        this.isAvailable = isAv;
    }
}
const user1 = new User('Luke Skywalker');
const user2 = new User('Han Solo');