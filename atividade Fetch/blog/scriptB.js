const title = document.getElementById("title");
const content = document.getElementById("content");
const image = document.getElementById("image")
const btn = document.getElementById("btn-submit");

btn.addEventListener("click" , () => {

const userData = JSON.stringify({
title: title.value,
content:content.value,
image:image.value,

})

fetch("http://10.92.198.38:8080/feed/post", {
method:"Post",
body:userData,
headers:{"Content-type": "application/json; charset=UTF-8 " ,
    'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtb3JvYmxveDIwMjRAaG90bWFpbC5jb20iLCJ1c2VySWQiOiI2NjQyNWZjZWVmZWVmODBlODI1NjRlOGYiLCJpYXQiOjE3MTU2MjYxMTAsImV4cCI6MTcxNTY0MDUxMH0.AgamQQ8C12XlsZS-cgd6yX2NDlaFdB9jM0ZKM8SlAzE"
}
    
})
    .then((result) => result.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err));
});