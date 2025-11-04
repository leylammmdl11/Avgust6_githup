class student{
    constructor(surname,name,age,gender){
        this.surname=surname
        this.name=name
        this.age=age
        this.gender=gender
    }
    showOf(){{
        console.log(`users- name = ${name}, surname= ${surname} , age= ${age} , gender= ${gender}`)
    }}
}
const user1= new student("Memmedli" ,"Leyla", 14, 9)
 user1.showOf()
 const user2= new student("Rehimzade","Aylin", 15, 10)
 user2.showOf()
 const user3= new student("Yusifli","Medine", 14, 9)
 user3.showOf()

///
 
 class Person1{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    newAge(){
        this.age +=1
        console.log(`boyudu 1 yas - ${age}`)
    }
 }
const person1 = new Person1("Leyla", 14);
person1.newAge();
