"use strict";

class Person{

	constructor(username, age){

		this.username = username;
		this.age = age;  

	}


	join(){

		console.log(this.username +" has joined the "+ this.group +" group with memberid: "+ this.memberid);
		module.export = join
	}
}

class Member extends Person{
  constructor(username, age,group,memberid){
  		super(username, age);
  		this.memberid = memberid;   
			this.group = group;
	  }	
  }


let Sam = new Person ("Sammy", "34");
Sam.username
let daniel = new Member ("Daniel", "45","Bootcamp", "3435");

daniel.join();

module.export = Person