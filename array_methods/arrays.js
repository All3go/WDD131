//  arrays.js
// Activity 1 by Austin Linford
// This file contains examples of using array methods in JavaScript
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join()

// Activity 2 by Austin Linford
const grades = ['A', 'B', 'A'];
function changeGradeToPoints(grade) {
  let points = 0;
  if (grade === 'A') {
    points = 4;
  } else if (grade === 'B') {
    points = 3;
  }
  return points;
}
const gradesPoints = grades.map(changeGradeToPoints);
document.querySelector("#list2").innerHTML = gradesPoints.join();

// Activity 3 by Austin Linford
const gpaPoints = grades.map(changeGradeToPoints);
const totalPoints = gpaPoints.reduce(function(total, item) {
  return total + item;
});
const gpa = totalPoints / gpaPoints.length;
document.querySelector("#list3").innerHTML = gpa.toFixed(2);

// Activity 4 by Austin Linford
const fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortFruits = fruit.filter((fruit) => fruit.length < 6);
document.querySelector("#list4").innerHTML = shortFruits.join();

// Activity 5 by Austin Linford
const myArray = [12, 34, 21, 54]
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
document.querySelector("#list5").innerHTML = luckyIndex !== -1 ? `Lucky number found at index: ${luckyIndex}` : "Lucky number not found";