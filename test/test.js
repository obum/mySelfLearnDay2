const assert = require("chai").assert;
const myapp = require('../src/app');


	escribe('Create an instance of a class',()=>{
	       	it('Create an instance of the class Person when instanciated',()=>{
            	let Sam = new Person;
              	let isTypeOf = Sam instanceof Person 
  	          	assert.equal(isTypeOf,true);
      	  });//end of it block
          });//end of describe block


