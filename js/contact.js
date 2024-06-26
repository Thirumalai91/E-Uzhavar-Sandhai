const inputs = document.querySelectorAll(".input");
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-nav');
    
navbarToggler.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const fname = document.getElementById("fname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const submit = document.getElementsByClassName("form-contact")[0];


submit.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log('clicked');

  let ebody = `
  <h1>First Name: </h1>${fname.value}
  <br>
  <h1>email: </h1>${email.value}
  <br>
  <h1>email: </h1>${phone.value}
  <br>
  <h1>Message: </h1>${message.value}
  <br>
  `;

  Email.send({
    SecureToken : "08b0bfc6-2bd7-4ba1-a620-20d311ce7c3f",
    To : 'nikilan2345@gmail.com',
    From : "nikilan2345@gmail.com",
    Subject : "call-supporters"+ email.value,
    Body : ebody
}).then(
  message => alert(message)
);


  
//E94BD37CF76C80C2EE2B44021CB4C1F2A367
})