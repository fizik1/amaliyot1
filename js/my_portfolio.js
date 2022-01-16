let fulname_holder = document.getElementById('fulname_holder')
let job1=document.getElementById('job1'),
    job2=document.getElementById('job2'),
    job3=document.getElementById('job3');


let info = ''

function joyla(){
    fetch("https://615c38b4c298130017735fee.mockapi.io/api/v1/user")
        .then(response => response.json())
        .then(data => {fulname_holder.innerHTML=data[5].ism
            console.log(data);
        })
    console.log(fulname_holder);
}
joyla()