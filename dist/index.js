"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const Address_1 = __importDefault(require("./Address"));
const address = new Address_1.default("123 Main St", "Cityville", "Stateville");
const person = new Person_1.default("Alice", 30, ["Reading", "Painting"], address);
person.displayBasicInfo();
person.displayHobbies();
person.displayAddress();
console.log(`Age in days: ${person.calculateAgeInDays()}`);
