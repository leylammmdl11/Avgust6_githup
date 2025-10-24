let student = {
  firstName: "Leyla",
  lastName: "Memmedli",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value) {
    let parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};
student.fullName = "Leyla Memmedli";
console.log(student.fullName); 
let product = {
  name: "Book",
  priceUSD: 10,
  get priceAZN() {
    return this.priceUSD * 1.7;
  }
};
console.log(product.priceAZN); 
