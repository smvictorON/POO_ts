import Person from "./Person";
import Address from "./Address";

const address = new Address("123 Main St", "Cityville", "Stateville");
const person = new Person("Alice", 30, ["Reading", "Painting"], address);

person.displayBasicInfo();
person.displayHobbies();
person.displayAddress();
console.log(`Age in days: ${person.calculateAgeInDays()}`);