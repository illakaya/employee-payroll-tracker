// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Create a function that will check if entered value is a number and convert it into a number (as prompts return strings). If not, returns $0
const salaryNum = function(x) {
  if (isNaN(x)) {
    return 0;
  } else {
    return Number(x);
  }
}

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  // create a variable to hold the array
  let employeeData = [];
  // create a while loop with iterations through an indexed array, storing each array item as objects with properties first, last name and salary
  let moreEmployee = true;
  let i = 0;
  while (moreEmployee) {
    employeeData[i] = {
      firstName: prompt(`Enter first name:`),
      lastName: prompt(`Enter last name:`),
      salary: salaryNum(prompt(`Enter salary:`)),
    }
    // add 1 to index i so that data is not overwritten
    i++;
    // create a prompt for users to stop entering more data or not
    moreEmployee = confirm(`Do you want to add another employee?`);
  }
  // the function returns the array data to be stored in variable employee
  return employeeData;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // create variable to store total salary of all employees
  let employeeTotal = 0;
  // create a for loop that will go through each item's salary in the array and add to the total
  for (let i = 0; i < employeesArray.length; i++) {
    employeeTotal += employeesArray[i].salary;
  }
  // calculate the average salary
  let meanSalary = employeeTotal / employeesArray.length;
  // log to console using template literals and express numbers to 2dp
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is \$${meanSalary.toFixed(2)}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
