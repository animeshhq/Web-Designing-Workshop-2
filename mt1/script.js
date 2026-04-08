function findLargest() {
  let n1 = parseFloat(prompt("Enter number 1:"));
  let n2 = parseFloat(prompt("Enter number 2:"));
  let n3 = parseFloat(prompt("Enter number 3:"));
  let n4 = parseFloat(prompt("Enter number 4:"));
  let n5 = parseFloat(prompt("Enter number 5:"));

  let largest;

  if (n1 >= n2 && n1 >= n3 && n1 >= n4 && n1 >= n5) {
    largest = n1;
  } else if (n2 >= n1 && n2 >= n3 && n2 >= n4 && n2 >= n5) {
    largest = n2;
  } else if (n3 >= n1 && n3 >= n2 && n3 >= n4 && n3 >= n5) {
    largest = n3;
  } else if (n4 >= n1 && n4 >= n2 && n4 >= n3 && n4 >= n5) {
    largest = n4;
  } else {
    largest = n5;
  }

  document.getElementById("result").innerText = "Largest Number is: " + largest;
}
