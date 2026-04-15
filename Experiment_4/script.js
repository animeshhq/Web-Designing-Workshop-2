let employees = [];

function addEmployee() {
  let name = document.getElementById("name").value;
  let salary = document.getElementById("salary").value;
  let department = document.getElementById("department").value;

  if (name === "" || salary === "" || department === "") {
    alert("Please fill all fields!");
    return;
  }

  let emp = {
    name: name,
    salary: Number(salary),
    department: department,
  };

  employees.push(emp);

  document.getElementById("output").innerHTML = "Employee Added!";
}

function displayEmployees() {
  let output = "<h3>All Employees</h3>";

  for (let i = 0; i < employees.length; i++) {
    let emp = employees[i];
    output +=
      "<p>" + emp.name + " | ₹" + emp.salary + " | " + emp.department + "</p>";
  }

  document.getElementById("output").innerHTML = output;
}

function filterEmployees() {
  let output = "<h3>Salary > 50000</h3>";

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 50000) {
      output +=
        "<p>" + employees[i].name + " | ₹" + employees[i].salary + "</p>";
    }
  }

  document.getElementById("output").innerHTML = output;
}

function totalSalary() {
  let total = 0;

  for (let i = 0; i < employees.length; i++) {
    total = total + employees[i].salary;
  }

  document.getElementById("output").innerHTML =
    "<h3>Total Salary: ₹" + total + "</h3>";
}

function averageSalary() {
  let total = 0;

  for (let i = 0; i < employees.length; i++) {
    total = total + employees[i].salary;
  }

  let avg = 0;
  if (employees.length > 0) {
    avg = total / employees.length;
  }

  document.getElementById("output").innerHTML =
    "<h3>Average Salary: ₹" + avg.toFixed(2) + "</h3>";
}

function countDepartment() {
  let dept = prompt("Enter Department:");
  let count = 0;

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].department === dept) {
      count++;
    }
  }

  document.getElementById("output").innerHTML =
    "<h3>" + dept + " Department Count: " + count + "</h3>";
}
