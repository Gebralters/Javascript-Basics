//Object Oriented Programming



//classes

class shape{
    color='Red';
    getcolor()
    {
       console.log(`The color of this car is ${this.color}`);
    }

}
const sh= new shape();
sh.getcolor();

class student{

    name;
    age;
    studentNo;

    constructor(name, age, studentNo)
    {
        this.name=name;
        this.age=age;
        this.studentNo=studentNo;
    }

    myself()
    {
       console.log(`My name is ${this.name}, I am ${this.age} years old, 
        My student number is ${this.studentNo}`);
    }
}

const student1=new student('letheba', 21, '2222333344');
student1.myself();



const car={
    carON: 0,

    start: function()
    {
        if(carON== 1)
        {
            console.log('Start car');
        }
        else{
            console.log('Not starting');
        }
        
    },
    Opendoors: function()
    {
        console.log('Open all doors');
    },
    getname: function()
    {
        console.log(`The name of your car is ${this.name}`);
    }
}
const car2={
    carON: 1,
    name:'Polo',
    start: function()
    {
        if(this.carON== 1)
        {
            console.log('Start car');
        }
        else{
            console.log('Not starting');
        }
    },
    Opendoors: function()
    {
        console.log('Open all doors');
    },
    getname: function()
    {
        console.log(`The name of your car is ${this.name}`);
    }
}
console.log(car.start);
console.log(car2.start);


s