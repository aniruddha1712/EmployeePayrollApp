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