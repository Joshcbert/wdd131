function getGrades(inputSelector) { // get grades from the input box
    const gradeString = document.querySelector(inputSelector).value; // split them into an array (String.split(','))
    let grades = gradeString.split(",");// clean up any extra spaces, and make the grades all uppercase. (Array.map())
    const cleanGrades = grades.map(grade => {
        let alittleOffTheTop = grade.trim()
        return alittleOffTheTop.toUpperCase()
    } )
    console.log(cleanGrades) // return grades
    return cleanGrades
}  
function lookupGrade(grade) {
    let points = 0; // converts the letter grade to it's GPA point value and returns it
    if (grade === "A"){
        points = 4;
    } else if (grade === "B") {
        points = 3;
    } else if (grade === "C") {
        points = 2;
    } else if (grade === "D") {
        points = 1;
    } else if (grade === "F") {
        points = 0;
    }
    return points;
}
function calculateGpa(grades) {// gets a list of grades passed in and convert the letter grades to gpa points
    let GPA_Values = grades.map((grade) => lookupGrade(grade))
    console.log(GPA_Values)// calculates the GPA
    let GPA = GPA_Values.reduce((total,GPA_point) => {
        return total+GPA_point
    })/GPA_Values.length
    console.log(GPA.toFixed(2))// return the GPA
    return GPA.toFixed(2); 
}
function outputGpa(gpa, selector) {    // takes a gpa value and displays it in the HTML in the element identified by the selector
    const output = document.querySelector(selector)
    output.innerText = gpa
}
function clickHandler() {    // when the button in our html is clicked:    // get the grades entered into the input
    const grades = getGrades("#grades")    // calculate the gpa from the grades entered
    const GPA = calculateGpa(grades)    // display the gpa
    outputGpa(GPA,"#output")
}
document.querySelector("#submitButton").addEventListener("click",clickHandler);