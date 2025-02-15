//  arrays.js
const steps = ["one", "two", "three"];
const grades = ["A","B","A"]
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const indexTest = [12, 34, 21, 54]
const luckyNum = 21

function listTemplate(step) {
  return `<li>${step}</li>`; //the html string made from step
}

function gradeGPA(grade) {
    let points = 0;
    if (grade === "A"){
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}

const gradeGPAvalues = grades.map(gradeGPA);

console.log(gradeGPAvalues)

const GPAaverage = gradeGPAvalues.reduce((total,GPA) => {
    return (total+GPA);
})/gradeGPAvalues.length

console.log(GPAaverage)

const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML

document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML

const shortFruits = fruits.filter((fruit) => fruit.length <  6);

console.log(shortFruits)

let hasLuckyNumber = indexTest.indexOf(luckyNum)

console.log(hasLuckyNumber)