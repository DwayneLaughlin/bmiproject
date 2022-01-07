// getting information from input elements in html file
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const calcbtn = document.getElementById("addbutton");

// calculating bmi with height and weight
calcbtn.addEventListener("click", function calculate() {
  const weightNum = parseInt(weight.value);
  const heightNum = parseInt(height.value);
  const bmiCalc = ((weightNum / heightNum ** 2) * 703).toFixed(2);
  const parent = document.getElementById("parent");
  const child = document.getElementById("child");

  const newText1 = `Your BMI is ${bmiCalc}. You are normal weight`;
  const newText2 = `Your BMI is ${bmiCalc}. You are overweight.`;
  const newText3 = `Your BMI is ${bmiCalc}. You are obese`;

  if (bmiCalc < 25 && bmiCalc > 16) {
    //   need to figure out how to get the results on the page instead of the alert. May need to create element in here then append to div and replace on click
    console.log(newText1);
    const p = document.createElement("p");
    const text = document.createTextNode(newText1)
    p.appendChild(text)
    document.getElementById("parent").appendChild(p)
    
    alert(newText1);
  } else if (bmiCalc > 25 && bmiCalc < 30) {
    console.log("overweight");
    alert(newText2);
  } else {
    console.log("obese");
    alert(newText3);
  }
});
