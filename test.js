// getting information from input elements in html file
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const calcbtn = document.getElementById("addbutton");
const clearbtn = document.getElementById("clearbutton");
const textline = document.getElementById("text")


// calculating bmi with height and weight
calcbtn.addEventListener("click", function calculate() {
  const weightNum = parseInt(weight.value);
  const heightNum = parseInt(height.value);
  const bmiCalc = ((weightNum / heightNum ** 2) * 703).toFixed(2);
  
  
// healthy weight messaging
  const newText1 = `With a height of ${heightNum} inches and a weight of ${weightNum} pounds your BMI is ${bmiCalc}. You are healthy weight`;

  // overweight messaging
  const newText2 = `With a height of ${heightNum} inches and a weight of ${weightNum} pounds your BMI is ${bmiCalc}. You are overweight.`;
  
  // obese messaging
  const newText3 = `With a height of ${heightNum} inches and a weight of ${weightNum} pounds your BMI is ${bmiCalc}. You are obese`;

  // code for normal weight
  if (bmiCalc < 25) {
    console.log(newText1);
    const p = document.createElement("p");
    p.innerHTML = ''
    const text = document.createTextNode(newText1);
    p.append(text);
    document.getElementById("parent").appendChild(p).style.backgroundColor = "green";
    
    //  code for overweight weight
  } else if (bmiCalc > 26 && bmiCalc < 30) {
    console.log("overweight");
    const p = document.createElement("p");
    const text = document.createTextNode(newText2);
    p.appendChild(text);
    document.getElementById("parent").appendChild(p).style.backgroundColor = "yellow";

    // code for obese weight
    
  } else {
    console.log("obese");
    const p = document.createElement("p");
    const text = document.createTextNode(newText3);
    p.appendChild(text);
    document.getElementById("parent").appendChild(p).style.backgroundColor = "red";
    
  }

  calcbtn.disabled = true;
});


clearbtn.addEventListener("click", function(){
  location.reload()
})

const tl = new TimelineMax()

