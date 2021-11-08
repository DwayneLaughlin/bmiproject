// getting information from input elements in html file
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const calcbtn = document.getElementById("addbutton");


// calculating bmi with height and weight
calcbtn.addEventListener("click", function calculate (){
    const weightNum = parseInt(weight.value);
    const heightNum = parseInt(height.value);
    const bmiCalc = ((weightNum / heightNum **2) * 703).toFixed(2);
    const textBox = document.getElementById("textbox")

    const newText = document.createElement("p");
    newText.innerHTML = bmiCalc
    textBox.appendChild(newText)

})
