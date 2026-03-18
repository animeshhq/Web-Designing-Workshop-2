function calculateMarks(){
    const subjectMarks = document.getElementById("subjects")

    let n = subjectMarks.value;
    let total = 0;

    for(let i = 0; i < n; i++){
        let marks = prompt("Enter marks for subjects" + i);
        total += Number(marks)
    }

    let avg = total / n;
    let grade;

    if(avg >= 90){
        grade = "A"
    } else if(avg >= 75) {
        grade = "B"
    } else if(avg >= 50){
        grade = "C"
    } else {
        grade = "F"
    }

    let result = (avg >= 40) ? "Pass" : "Fail";

    document.getElementById("total").innerHTML = "Total marks:" + total;
    document.getElementById("average").innerHTML = "Average Grade:" + avg;
    document.getElementById("result").innerHTML = "Result:" + result;
    document.getElementById("grade").innerHTML = "Grade:" + grade;
}
