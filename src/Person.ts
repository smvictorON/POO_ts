import Address from "./Address";

export default class Person {
  // Propriedades da classe
  private name: string;
  private age: number;
  private hobbies: string[];
  private address: Address;

  constructor(name: string, age: number, hobbies: string[], address: Address) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.address = address;
  }

  // Método para exibir informações básicas
  displayBasicInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }

  // Método para exibir hobbies
  displayHobbies(): void {
    console.log(`Hobbies: ${this.hobbies.join(', ')}`);
  }

  // Método para exibir o endereço
  displayAddress(): void {
    console.log(`Address: ${this.address.street}, ${this.address.city}, ${this.address.state}`);
  }

  // Método para calcular a idade em dias
  calculateAgeInDays(): number {
    return this.age * 365; // Aproximação simples de dias em um ano
  }
}
