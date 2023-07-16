// complete this js code
function Person(name,age){
    this._name=name
    this._age=age
    this.__proto__ = Person.prototype
}
Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this._name} and I am ${this._age} years old.`);
}
function Employee(name,age,jobTitle){
    Person.call(this,name,age)
    this._jobTitle = jobTitle
	this.__proto__ = Employee.prototype
}
Employee.prototype.jobGreet = function(){
    console.log(`Hello, my name is ${this._name}, I am ${this._age} years old, and my job title is ${this._jobTitle}.`);
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
