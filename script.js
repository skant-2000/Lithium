var work = document.getElementById("work");
var employ = document.getElementById("employ");
var family = document.getElementById("family");
var career = document.getElementById("career");

var workdrop = document.getElementById("workdrop")
var employdrop = document.getElementById("employdrop")
var familydrop = document.getElementById("familydrop")
var careerdrop = document.getElementById("careerdrop")

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;


function showAndHideWorkdrop() {
    if ( count1%2===0){
        workdrop.style.visibility = "visible"
    }
    else {
        workdrop.style.visibility = "hidden"
    }
    count1++
}
function showAndHideEmploydrop() {
    if ( count2%2===0){
        employdrop.style.visibility = "visible"
    }
    else {
        employdrop.style.visibility = "hidden"
    }
    count2++
}
function showAndHideFamilydrop() {
    if ( count3%2===0){
        familydrop.style.visibility = "visible"
    }
    else {
        familydrop.style.visibility = "hidden"
    }
    count3++
}
function showAndHideCareerdrop() {
    if ( count4%2===0){
        careerdrop.style.visibility = "visible"
    }
    else {
        careerdrop.style.visibility = "hidden"
    }
    count4++
}

work.addEventListener('click', showAndHideWorkdrop)
employ.addEventListener('click', showAndHideEmploydrop)
family.addEventListener('click', showAndHideFamilydrop)
career.addEventListener('click', showAndHideCareerdrop)