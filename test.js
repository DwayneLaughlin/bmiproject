// getting information from input elements in html file
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const calcbtn = document.getElementById("addbutton");


// calculating bmi with height and weight
calcbtn.addEventListener("click", function calculate (){
    const weightNum = parseInt(weight.value);
    const heightNum = parseInt(height.value);

    console.log((weightNum / heightNum **2) * 703)
})
