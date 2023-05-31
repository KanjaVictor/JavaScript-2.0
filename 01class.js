//-----Classes-----//
/*
A type of function, and the properties are assigned inside a constructor() method.
A constructor is a function that does initialization of an object when the object is created.
Arguments are passed to the constructor function when you use the new keyword.
*/
class Car {
    //Constructor Method
    constructor(name){
        this.brand = name;//this keyword refers to the object.
    }

    //A Method
    present(){
        return `I have a ` + this.brand;
    }
}

const mycar = new Car("1967 Chevy Impala");//An object 

console.log(mycar.brand);//Constructor function is called when the object is initialized.

console.log(mycar.present());


//-----Class Inheritance-----// -> Done using the extends keyword. The class will inherit all the methods from the other class.
class Model extends Car{
    constructor(name, mod){
        /*
        super method is used to refer to the parent class.
        Calling it in the constructor method, calls the parent's constructor method and gets access
        to the parent's properties and methods. 
        */
        super(name);
        this.model = mod;
    }

    /*
    Show method has been created. The class Model inherits from the Car class.
    present method has been used in the show method.
    */
    show(){
        return this.present() + ', it is a ' + this.model 
    }
}
const mycar1 = new Model("Ford", "Mustang GT 500");
console.log(mycar1.show());

