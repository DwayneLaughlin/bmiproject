const markHeightStart = 1.69;
const markWeightStart = 78;
const johnHeightStart = 1.95;
const johnWeightStart = 92;

const markHeightEnd = 1.88;
const markWeightEnd = 95;
const johnHeightEnd = 1.76;
const johnWeightEnd = 85;

const bmiMark = markWeightStart / markHeightStart ** 2;
console.log("Mark's starting BMI = " + bmiMark);

const bmiJohn = johnWeightStart / johnHeightStart ** 2;
console.log("John's starting BMI = " + bmiJohn);

const bmiMarkFinal = markWeightEnd / markHeightEnd ** 2;
console.log(`Mark's Final BMI = " + ${bmiMarkFinal}`);

const bmiJohnFinal = johnWeightEnd / johnHeightEnd ** 2;
console.log(`John's starting BMI = ${bmiJohnFinal}`);

if (bmiJohn > bmiMark) {
  console.log("John's starting BMI was higher than Mark's");
} else {
  console.log("Mark's starting BMI was higher than John's");
}

if (bmiJohnFinal > bmiMarkFinal) {
  console.log("John's final BMI is higher than Mark's");
} else {
  console.log("Mark's final BMI is higher than John's");
}
