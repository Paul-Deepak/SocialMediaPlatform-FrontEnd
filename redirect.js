
// function inputEmail(event) {
//     emailValue = event.target.value;
// }

// function inputPass(event) {
//     passwordValue = event.target.value;
// }


// function login(event) {
//     event.preventDefault()

//     if (emailRegex.test(emailValue)) {
//         emailInput.classList.remove('invalid');
//         emailError.textContent = '';
//         flag1 = 0;
//     }
//     else {
//         emailInput.classList.add('invalid');
//         emailError.textContent = 'Please enter a valid email address';
//         flag1 = 1;
//     }

//     if (passRegex.test(passwordValue)) {
//         passwordInput.classList.remove('invalid');
//         passwordError.textContent = '';
//         flag2 = 0;

//     } else {
//         passwordInput.classList.add('invalid');
//         passwordError.textContent = 'Password does not meet the criteria';
//         flag2 = 1;
//     }

//     if (emailValue == "") {
//         emailInput.classList.add('invalid');
//         emailError.textContent = 'Email should not be empty';
//         flag1 = 1;
//     }
//     if (passwordValue == "") {
//         passwordInput.classList.add('invalid');
//         passwordError.textContent = 'Password should not be empty';
//         flag2 = 1;
//     }
//     const requestBody = {
//         email: emailValue,
//         password: passwordValue
//     };

//     if (flag1 == 0 && flag2 == 0) {

//         fetch('http://localhost:8080/api/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ requestBody }),
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Invalid credentials');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log('Login successful:', data);
//                 window.location.href = 'dashboard.html';
//             })
//             .catch(error => {
//                 console.error('Login failed:', error);
//                 showAlert("Incorrect password", "no")
//             });
//     }
// }
