//-----Classes-----//-> A type of function, and the properties are assigned inside a costructor() method.
class Car {
    constructor(name){
        this.brand = name;
    }
}

const mycar = new Car("1967 Chevy Impala");

console.log(mycar.brand)