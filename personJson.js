class Person{
  constructor(a,b,c,d,e,f,g){
    this.name=a;
    this.age=b;
    this.email=c;
    this.qualification=d;
    this.address=e;
    this.phone=f;
    this.maritialStatus=g;
    
  }
  personinfo(){
    return `
    Name: ${this.name}
    Age:  ${this.age}
    Email: ${this.email}
    Qualification: ${this.qualification}
    Address: ${this.address}
    Phone: ${this.phone}
    MaritialStatus: ${this.maritialStatus}
    `
  }
}
let person=new Person("Johon",20,"john123@gmail.com","MCA","London",122354678,"Unmarried");
let person1=new Person("Surendran",23,"rose123@gmail.com","MBA","London",9876543210, "married")
console.log(person1.personinfo());
console.log(person.personinfo());