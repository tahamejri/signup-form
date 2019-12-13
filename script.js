// //selecting the submit button
// let submitButton = Array.from(document.getElementsByClassName("subRes-but"))[0]

// //the first function will be to check if all the imput fields are fiell
// //add event listener to the submit button
// submitButton.addEventListener("click", function(){
// 	let arrayOfInputValues = Array.from(document.querySelectorAll("input")).map(function(element){
// 		return element.value
// 	})
// })

// var verifymail = function(emailInput){
// 	return	emailInput.contains('@') && emailInput.contains('.')
// }

// var verifyPassword = function(password){
// 	var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

// 	return mediumRegex.test(password)
// }

// var verifyPasswordEqual = (pass,confirmation) => pass === confirmation ? true : false ;

class FormVerification {
	constructor() {
		this.firstName ;
		this.email ;
		this.password ;
		this.lastName ;
		this.comment
		this.validation();
	}
	
	
	
	//this function verify if all the inputs are filled
	
	validation = function(){
		if(this.verify()){
			if(this.verifymail()){

				if(this.verifyPasswordEqual()){
					this.password = document.querySelector('#exampleInputPassword1').value
					this.email = Array.from(document.querySelectorAll('#exampleInputEmail1'))[0].value
					this.firstName = document.querySelector('#firstnameinput').value
					this.lastName = document.querySelector('#lastnameinput').value
					this.comment = document.querySelector('#exampleFormControlTextarea1').value
					var obje = JSON.stringify(this)
					alert(obje)


				}
			}
		}

	}
	
	
	verify = function () {
		let allInputs = Array.from(document.querySelectorAll("input"));
		var y = allInputs.reduce(function (acc, element) {
			acc = acc && (element.value.length === 0 ? false : true)
			return acc

		}, true)
		y ? true : alert('all inputs must be filled') ;
		
		return y
	}


	//this function checks if the password and the confirmation are identical 
	verifyPasswordEqual = function () {
		let pass = document.querySelector('#exampleInputPassword1').value
		let confirmation = document.querySelector('#exampleInputPassword2').value
		this.password = pass ;
		return this.verifyPassword() ? (pass === confirmation ? true : alert('your password doesnt match')) : false

	}

	//this function returns true or false telling if the email is valid or not
	verifymail = function () {
		let emailInput = Array.from(document.querySelectorAll('#exampleInputEmail1'))[0].value
		console.log(emailInput)
	  return emailInput.includes('@') && emailInput.includes('.') ? true : alert('enter a valid email adress')
	}

	verifyPassword = function () {
		let password = document.querySelector('#exampleInputPassword1').value
		console.log('this shit is good')
		var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

		return mediumRegex.test(password) ? true : alert("your password doesnt reach the minimum security")
	}
}


let submitButton = document.querySelector("#buttontest")


// let form;
submitButton.addEventListener('click', function () {
	let form = new FormVerification
})