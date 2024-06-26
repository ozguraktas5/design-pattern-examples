// factory method

// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class PersonFactory {
//     static add(name, age) {
//         return new Person(name, age);
//     }
// }

// const person = PersonFactory.add("Ozgur", 31);
// console.log(person)

// abstract method

// class Person {
//     consume() {}
// }

// class Client extends Person {
//     consume() {
//         console.log("Client")
//     }
// }

// class PersonFactory {
//     prepare=(name)
// }

// class ClientFactory extends PersonFactory {
//     addClient() {
//         console.log("Client created")
//         return new Client();
//     }
// }

// const clientUserFact = new ClientFactory();
// const person = clientUserFact.addClient();
// person.consume();

// Builder

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     toString() {
//         return (
//             `${this.name} is ${this.age} years old!`
//         )
//     }
// }

// class PersonBuilder {
//     constructor (person = new Person()) {
//         this.person = person;
//     }

//     get age() {
//         return new PersonAgeBuilder(this.person)
//     }

//     get name() {
//         return new PersonNameBuilder(this.person)
//     }

//     build() {
//         return this.person;
//     }
// }

// class PersonNameBuilder extends PersonBuilder {
//     constructor(person) {
//         super(person)
//     }

//     is(name) {
//         this.person.name = name;
//         return this;
//     }
// }

// class PersonAgeBuilder extends PersonBuilder {
//     constructor(person) {
//         super(person)
//     }

//     is(age) {
//         this.person.age = age;
//         return this;
//     }
// }

// const personBuilder = new PersonBuilder();
// const person = personBuilder.name.is("Ozgur").age.is(31).build();
// console.log(person.toString())

// Prototype Method

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     setName(name) {
//         this.name = name;
//         console.log(name.toString())
//     }

//     clone() {
//         return new Person(this.name)
//     }
// }

// const person1 = new Person();
// person1.setName("Ali");

// const person2 = person1.clone()
// person2.setName("Veli")

// Singleton Method

class Person {
    constructor() {
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }
        this.constructor.instance = this;
    }

    toString() {
        console.log("This instance");
    }
}

const person1 = new Person();
const person2 = new Person();

console.log("İs same: ", (person1 === person2))
person1.toString()

