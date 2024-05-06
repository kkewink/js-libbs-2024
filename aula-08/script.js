const name = document.getElementById("name");
const  email = document.getElementById("email");
const phone = document.getElementById("phone");
const city = document.getElementById("city");
const state = document.getElementById("state");
const password =document.getElementById("password");
const btn = document.getElementById("btn-submit");
const array = []


btn.addEventListener("click" , () => {
array.push(
    {
        "name": name.value,
        "email": email.value,
        "phone":phone.value,
        "city":city.value,
        "state":state.value,
    }
)

console.log(array)

const userData = JSON.stringify({
name: name.value,
email: email.value,
phone: phone.value,
city: city.value,
state: state.value,
password:password.value,
image:"",
})

fetch("http://10.92.198.38:3001/signup" , {
method:"Post",
body:userData,
headers:{"Content-type": "application/json; charset=UTF-8"}
})
    .then((result) => result.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err));
});