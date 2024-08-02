
let form = document.querySelector('.signin');

function addErrorElement(inputElement,errorMessage) {
    let errorEle = inputElement.parentElement.querySelector(".error");
    if (!errorEle) {
     errorEle = document.createElement("p");
     errorEle.setAttribute("class","error");
     inputElement.parentElement.appendChild(errorEle);  
    }
   errorEle.textContent = errorMessage;
}
//function to remove error message
function removeErrorElement(inputElement) {
    let errorEle = inputElement.parentElement.querySelector('.error');
    if (errorEle) {
        errorEle.remove();
   }
}

form.addEventListener('submit', function (e) {
    // prevent default form submission
     e.preventDefault();
     //Get form Elements
     const email = form.email;
     const password = form.password;

     //validation of form
    let hasError = false;
    
       if (email.value.trim() == ""|| password.value.trim() == "") {
           addErrorElement(email, "Please enter a valid email");
           addErrorElement(password, "Your password must contain between 4 to 60 characters");
           hasError = true;
       } else{
         removeErrorElement(email);
          removeErrorElement(password);
          window.location.href = '../Netflix/html/welcomepage.html'; 
       }
})
