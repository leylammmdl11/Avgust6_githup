    class Calculator {
      add(a, b) {
        console.log(`${a} + ${b} = ${a + b}`);
      }

      subtract(a, b) {
        console.log(`${a} - ${b} = ${a - b}`);
      }

      multiply(a, b) {
        console.log(`${a} × ${b} = ${a * b}`);
      }

      divide(a, b) {
        if (b === 0) {
          console.log("0-a bölmək olmaz!");
        } else {
          console.log(`${a} ÷ ${b} = ${a / b}`);
        }
      }
    }

    const calc = new Calculator();
    calc.add(5, 3);
    calc.subtract(10, 6);
    calc.multiply(4, 7);
    calc.divide(8, 2);




    class Rectangle {
      constructor(width, height) {
        this.width = width;
        this.height = height;
      }

      area() {
        console.log(`Sahə: ${this.width * this.height}`);
      }

      perimeter() {
        console.log(`Perimetr: ${2 * (this.width + this.height)}`);
      }
    }

    const rect = new Rectangle(5, 10);
    rect.area();
    rect.perimeter();





    class Player {
      constructor(name, health, power) {
        this.name = name;
        this.health = health;
        this.power = power;
      }

      attack() {
        console.log(`${this.name} hücum etdi! 💥`);
      }

      takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} zərbə aldı! Sağlamlıq: ${this.health}`);
      }
    }

    const player1 = new Player("Leyla", 100, 20);
    player1.attack();
    player1.takeDamage(25);

