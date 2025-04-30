// What are the common Object methods ? 
// Object.keys() - Returns an array of a given object's own enumerable property names.
// Object.values() - Returns an array of a given object's own enumerable property values.
// Object.entries() - Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// Object.assign() - Copies all enumerable own properties from one or more source objects to a target object.
// Object.freeze() - Freezes an object, preventing new properties from being added to it and marking all existing properties as read-only.
// Object.seal() - Seals an object, preventing new properties from being added to it but allowing existing properties to be modified.
// Object.create() - Creates a new object with the specified prototype object and properties.
// Object.defineProperty() - Defines a new property directly on an object, or modifies an existing property on an object.
// Object.defineProperties() - Defines new or modifies existing properties directly on an object, returning the object.
// Object.getOwnPropertyDescriptor() - Returns a property descriptor for an own property of a given object.
// Object.getOwnPropertyDescriptors() - Returns all own property descriptors of a given object.
// Object.getOwnPropertyNames() - Returns an array of all properties (enumerable or not) found directly upon a given object.
// Object.getPrototypeOf() - Returns the prototype of the specified object.
// Object.is() - Determines whether two values are the same value.
// Object.isExtensible() - Determines if an object is extensible (whether it can have new properties added to it).
// Object.isFrozen() - Determines if an object is frozen (whether its properties are immutable).
// Object.isSealed() - Determines if an object is sealed (whether its properties are non-configurable).
// Object.prototype.isPrototypeOf() - Determines whether an object is in the prototype chain of another object.

// Example object for demonstration
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Demonstrate Object.keys()
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log(getObjectKeys(person)); // Output: ['name', 'age', 'city']

// Demonstrate Object.values()
function getObjectValues(obj) {
  return Object.values(obj);
}
console.log(getObjectValues(person)); // Output: ['John', 30, 'New York']

// Demonstrate Object.entries()
function getObjectEntries(obj) {
  return Object.entries(obj);
}
console.log(getObjectEntries(person)); // Output: [['name', 'John'], ['age', 30], ['city', 'New York']]

// Demonstrate Object.assign()
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

// Demonstrate Object.freeze()
function freezeObject(obj) {
  return Object.freeze(obj);
}
const frozenPerson = freezeObject(person);
frozenPerson.age = 31; // This will not work because the object is frozen
console.log(frozenPerson.age); // Output: 30

// Demonstrate Object.seal()
function sealObject(obj) {
  return Object.seal(obj);
}
const sealedPerson = sealObject({...person});
sealedPerson.age = 31; // This will work because the object is sealed
console.log(sealedPerson.age); // Output: 31

// Demonstrate Object.create()
function createObject(proto) {
  return Object.create(proto);
}
const newPerson = createObject(person);
newPerson.name = 'Jane';
console.log(newPerson.name); // Output: 'Jane'

// Demonstrate Object.defineProperty()
function defineProperty(obj, prop, descriptor) {
  return Object.defineProperty(obj, prop, descriptor);
}
const propertyObject = {};
defineProperty(propertyObject, 'name', {
  value: 'John',
  writable: false,
  enumerable: true
});
console.log(propertyObject.name); // Output: 'John'

// Demonstrate Object.defineProperties()
function defineProperties(obj, props) {
  return Object.defineProperties(obj, props);
}
const multiPropertyObject = {};
defineProperties(multiPropertyObject, {
  name: { value: 'John', writable: true },
  age: { value: 30, writable: false }
});
console.log(multiPropertyObject); // Output: { name: 'John', age: 30 }

// Demonstrate Object.getOwnPropertyDescriptor()
function getPropertyDescriptor(obj, prop) {
  return Object.getOwnPropertyDescriptor(obj, prop);
}
console.log(getPropertyDescriptor(person, 'name')); // Output: { value: 'John', writable: true, enumerable: true, configurable: true }

// Demonstrate Object.getOwnPropertyDescriptors()
function getAllPropertyDescriptors(obj) {
  return Object.getOwnPropertyDescriptors(obj);
}
console.log(getAllPropertyDescriptors(person));

// Demonstrate Object.getOwnPropertyNames()
function getPropertyNames(obj) {
  return Object.getOwnPropertyNames(obj);
}
console.log(getPropertyNames(person)); // Output: ['name', 'age', 'city']

// Demonstrate Object.getPrototypeOf()
function getPrototype(obj) {
  return Object.getPrototypeOf(obj);
}
console.log(getPrototype(person)); // Output: [Object: null prototype] {}

// Demonstrate Object.is()
function compareValues(value1, value2) {
  return Object.is(value1, value2);
}
console.log(compareValues(NaN, NaN)); // Output: true
console.log(compareValues(0, -0)); // Output: false

// Demonstrate Object.isExtensible()
function checkExtensible(obj) {
  return Object.isExtensible(obj);
}
console.log(checkExtensible(person)); // Output: true

// Demonstrate Object.isFrozen()
function checkFrozen(obj) {
  return Object.isFrozen(obj);
}
console.log(checkFrozen(frozenPerson)); // Output: true

// Demonstrate Object.isSealed()
function checkSealed(obj) {
  return Object.isSealed(obj);
}
console.log(checkSealed(sealedPerson)); // Output: true

// Demonstrate Object.prototype.isPrototypeOf()
function checkPrototypeOf(proto, obj) {
  return proto.isPrototypeOf(obj);
}
console.log(Object.prototype.isPrototypeOf(person)); // Output: true


// What is Prototype Inheritance? 
// Prototype inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects.
// This is achieved through the prototype chain, where an object can access properties and methods of its prototype object.
// This allows for code reuse and the creation of complex object hierarchies.q
// // Example of prototype inheritance
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};
function Dog(name) {
  Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function() {
  console.log(`${this.name} barks.`);
};    
const dog = new Dog('Rex');
dog.speak(); // Output: Rex barks.
