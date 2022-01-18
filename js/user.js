url="https://615c38b4c298130017735fee.mockapi.io/api/v1/user"
fetch("https://615c38b4c298130017735fee.mockapi.io/api/v1/user")
    .then(response => response.json())
    .then(data => console.log(data));


let name = document.getElementById("name")
let surname = document.getElementById("surname")
let age = document.getElementById('age')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let rasm = document.getElementById('img1')
let img = document.querySelector("img")

let fulname_holder = document.getElementById('fulname_holder')
let job1=document.getElementById('job1'),
    job2=document.getElementById('job2'),
    job3=document.getElementById('job3');

data={
    ism:'',
    fameliya:'',
    yosh:'',
    email:'',
    phone:'',
    rasm:''
}
console.log(data.ism);

function junat() {
    data.ism=name.value
    data.fameliya=surname.value
    data.yosh=age.value
    data.email=email.value
    data.phone=phone.value
    data.rasm = rasm.files[0].name
    console.log(data);
    fetch(url , {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        alert("Portfolio yaratildi");
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    
     
}