"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, hobbies, address) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        this.address = address;
    }
    // Método para exibir informações básicas
    displayBasicInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    // Método para exibir hobbies
    displayHobbies() {
        console.log(`Hobbies: ${this.hobbies.join(', ')}`);
    }
    // Método para exibir o endereço
    displayAddress() {
        console.log(`Address: ${this.address.street}, ${this.address.city}, ${this.address.state}`);
    }
    // Método para calcular a idade em dias
    calculateAgeInDays() {
        return this.age * 365; // Aproximação simples de dias em um ano
    }
}
exports.default = Person;
