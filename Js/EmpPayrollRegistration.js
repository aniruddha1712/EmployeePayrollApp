window.addEventListener('DOMContentLoaded',(event) =>{

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
    output.textContent = salary.value;
});

const name = document.querySelector('#name');
const textError = document.querySelector('.text-error');
name.addEventListener('input',function(){
  if(name.value.length == 0){
    textError.textContent = "";
    return;
  }
  try{
    (new EmployeePayrollData()).name = name.value;
  }
  catch(ex){
    textError.textContent = ex;
  }
}); 
});

// querySelector is newer feature
const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
}

// getElementById is better than querySelector in older versions
// const getInputElementValue = (id) => {
//   let value = document.getElementById(id).value;
//   return value;
// }
const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
}

const save = () => {
  try
  {
    let employeePayrollData = createEmployeePayroll();
  } 
  catch(ex)
  {
    return;
  }
}

const createEmployeePayroll = () => {
  let employeePayrollData = new EmployeePayrollData();
  try{
    employeePayrollData.name = getInputValueById('#name');
  }catch(ex){
    setTextValue('.text-error',ex);
    throw ex;
  }
  employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
  employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
  employeePayrollData.department = getSelectedValues('[name=department]');
  employeePayrollData.salary = getInputValueById('#salary');
  employeePayrollData.note = getInputValueById('#notes');
  let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
  employeePayrollData.startDate = Date.parse(date);
  alert(employeePayrollData.toString());
  return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let setItems = [];
  allItems.forEach(item => {
    if(item.checked) setItems.push(item.value);
  });
  return setItems;
}