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

class Person {
    consume() {}
}

class Client extends Person {
    consume() {
        console.log("Client")
    }
}

class PersonFactory {
    prepare=(name)
}

class ClientFactory extends PersonFactory {
    addClient() {
        console.log("Client created")
        return new Client();
    }
}

const clientUserFact = new ClientFactory();
const person = clientUserFact.addClient();
person.consume();