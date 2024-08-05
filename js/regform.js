
// let form = document.querySelector('.signin');

// function addErrorElement(inputElement,errorMessage) {
//     let errorEle = inputElement.parentElement.querySelector(".error");
//     if (!errorEle) {
//      errorEle = document.createElement("p");
//      errorEle.setAttribute("class","error");
//      inputElement.parentElement.appendChild(errorEle);  
//     }
//    errorEle.textContent = errorMessage;
// }
// //function to remove error message
// function removeErrorElement(inputElement) {
//     let errorEle = inputElement.parentElement.querySelector('.error');
//     if (errorEle) {
//         errorEle.remove();
//    }
// }

// form.addEventListener('submit', function (e) {
//     // prevent default form submission
//      e.preventDefault();
//      //Get form Elements
//      const email = form.email;
//      const password = form.password;

//      console.log(email);
//      //validation of form
//     let hasError = false;
    
//        if (email.value.trim() == "" || password.value.trim() == "") {
//            addErrorElement(email, "Email is required");
//            addErrorElement(password, "Password is required");
//            hasError = true;
//            email.focus() = styl
//        } else{
//          removeErrorElement(email);
//           removeErrorElement(password);
//           window.location.href = 'index.html'; 
//        }
// })
let form = document.querySelector('.signin');

function addErrorElement(inputElement, errorMessage) {
    let errorEle = inputElement.parentElement.querySelector(".error");
    if (!errorEle) {
        errorEle = document.createElement("p");
        errorEle.setAttribute("class", "error");
        inputElement.parentElement.appendChild(errorEle);
    }
    errorEle.textContent = errorMessage;
    inputElement.classList.add('input-error'); // Add class for red border
}

function removeErrorElement(inputElement) {
    let errorEle = inputElement.parentElement.querySelector('.error');
    if (errorEle) {
        errorEle.remove();
    }
    inputElement.classList.remove('input-error'); // Remove class for red border
}

form.addEventListener('submit', function (e) {
    // Prevent default form submission
    e.preventDefault();
    // Get form elements
    const email = form.email;
    const password = form.password;

    // Validation of form
    let hasError = false;

    if (email.value.trim() === "" || password.value.trim() === "") {
        if (email.value.trim() === "") {
            addErrorElement(email, "Email is required");
        } else {
            removeErrorElement(email);
        }

        if (password.value.trim() === "") {
            addErrorElement(password, "Password is required");
        } else {
            removeErrorElement(password);
        }
        
        hasError = true;
        if (!hasError) email.focus(); // Set focus only if no error
    } else {
        removeErrorElement(email);
        removeErrorElement(password);
        window.location.href = 'signup.html'; 
    }
});

