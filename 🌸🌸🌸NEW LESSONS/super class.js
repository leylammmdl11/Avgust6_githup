class Person {
    constructor(surname, name, age, gender) {
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    showInfo() {
        console.log(
            `Surname: ${this.surname}, Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`
        );
    }

    rename(newName) {
        this.name = newName;
        console.log(`Name changed! New name: ${this.name}`);
    }
}

class Admin extends Person {
    constructor(surname, name, age, gender, role, id) {
        super(surname, name, age, gender);
        this.role = role;
        this.id = id;
    }

    showInfo() {
        console.log(
            `Surname: ${this.surname}, Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Role: ${this.role}, ID: ${this.id}`
        );
    }

    rename(newName) {
        this.name = newName;
        console.log(`Admin name changed! New name: ${this.name}`);
    }
}

class Player extends Person {
    constructor(surname, name, age, gender, level) {
        super(surname, name, age, gender);
        this.level = level;
    }

    levelUp() {
        this.level += 1;
        console.log(`${this.name} level up! New level: ${this.level}`);
    }

    showInfo() {
        super.showInfo();
        console.log(`Level: ${this.level}`);
    }

    rename(newName) {
        this.name = newName;
        console.log(`Player name changed! New name: ${this.name}`);
    }
}

// Nümunələr
const p = new Person("Məmmədov", "Leyla", 14, "female");
p.showInfo();
p.rename("Aysu");
p.showInfo();

const admin = new Admin("Əliyev", "Kamran", 30, "male", "superadmin", "A-001");
admin.showInfo();
admin.rename("Murad");
admin.showInfo();

const player = new Player("Rəhimova", "Aylin", 16, "female", 5);
player.showInfo();
player.rename("Lalə");
player.showInfo();
player.levelUp();