class Uber{
  constructor(custname,distance,amount,extra){
      this.custname=custname;
      this.distance=distance;
      this.amount=amount;
      this.extra=extra;
  }
  getCalculate(){
      return (`The Customer is ${this.custname} was travel from the distance is ${this.distance} here amount 
      ${this.amount} and the waiting charges is ${this.extra}`);
  }
  getPrice(){
      let price=(this.distance * this.amount)+(5 * this.extra);
      return price;
  }
  setDistance(dist){
  this.distance=dist;
   }
  
}
const customer1=new Uber("Surendran",50,25,10);
const customer2=new Uber("Mahesh",70,20,5);
customer2.setDistance(50);
console.log(customer1.getCalculate());
console.log(customer1.getPrice());
console.log(customer2.getCalculate());
console.log(customer2.getPrice());