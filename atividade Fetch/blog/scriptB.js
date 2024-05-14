const title = document.getElementById("title");
const content = document.getElementById("content");

const btn = document.getElementById("btn-submit");

btn.addEventListener("click" , () => {


const image = document.getElementById("image")
const formData = new FormData();

formData.append('title', title.value);
formData.append('content', content.value);
formData.append('image', image.files[0]);

fetch("http://10.92.198.38:8080/feed/post", {
method:"Post",
body: formData,
headers:{
    'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtb3JvYmxveDIwMjRAaG90bWFpbC5jb20iLCJ1c2VySWQiOiI2NjQyNWZjZWVmZWVmODBlODI1NjRlOGYiLCJpYXQiOjE3MTU3MTEyMzEsImV4cCI6MTcxNTcyNTYzMX0.PBEuPZUeSwKAuguGDWNCNhUkfQfb9ZKJD6dkPIfvtLE"

}
    
})
    .then((result) => result.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err));
});