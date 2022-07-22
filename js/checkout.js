
// Exercise 6
function validate() {
	var error = 0;


	// Get the input fields
	var form = document.querySelectorAll('.needs-validation');

	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements""
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name, phone, password, and email


	let regulExName = new RegExp(/^[A-Za-z]+$/); //ex reg para control letras

	if (fName.value.length >= 3 && regulExName.test(fName.value)) {
	} else {
		document.getElementById("errorName").style.display = 'block';
		document.getElementById("fName").style.border = '2px solid red';
	
		error = 1;
	}

	let regulExLastN = new RegExp(/^[A-Za-z]+$/); //ex reg para control letras

	if (fLastN.value.length >= 3 && regulExLastN.test(fLastN.value)) {
	} else {
		document.getElementById("errorLastN").style.display = 'block';
		document.getElementById("fLastN").style.border = '2px solid red';
		error = 1;
	}


	let regulExEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'); //ex reg para control mail

	if (fEmail.value.length >= 3 && regulExEmail.test(fEmail.value)) {

	} else {
		document.getElementById("errorEmail").style.display = 'block';
		document.getElementById("fEmail").style.border = '2px solid red';
		error = 1;
	}


	let regulExFPhone = new RegExp(/^[0-9]+$/); //ex reg para control numeros

	if (fPhone.value.length === 9 && regulExFPhone.test(fPhone.value)) {

	} else {
		document.getElementById("errorPhone").style.display = 'block';
		document.getElementById("fPhone").style.border = '2px solid red';
		error = 1;
	}

	let regulExPass = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{4,8}$/); //ex reg para control passw

	if ( regulExPass.test(fPassword.value)) {

	} else {
		document.getElementById("errorPassword").style.display = 'block';
		document.getElementById("fPassword").style.border = '2px solid red';
		error = 1;
	}

	let regulExAdress = new RegExp(/[A-Za-z0-9]+/g); //ex reg puede contener letras/num/ espacios

	if (fAddress.value.length >= 3 && regulExAdress.test(fAddress.value)) {
	} else {
		document.getElementById("errorAddress").style.display = 'block';
		document.getElementById("fAddress").style.border = '2px solid red';

		error = 1;
	}

	if (error > 0) {
		alert("Error");
	} else {
		alert("ok");
		form.submit();
	}


}

