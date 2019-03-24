/* Write your code here */

function Company(compData){
    let _maxCount = compData.maxCompanySize;
    let _employees = [];
    let _logs = [];
    _logs.push(`${compData.name} was created in ${new Date()}`);
    this.addNewEmployee = function(employee){
        if (!(employee instanceof Employee)){
            console.log('Please try to add Employee instance');
            return
        }
        if (_employees.length < _maxCount){
            _employees.push(employee);
            employee.working = true;
            employee.hire(compData.name);
            employee.startWorkInCompany = new Date().getSeconds();
            _logs.push(`${employee.name} starts working at ${compData.name} in ${new Date()}`)
            return
        } else if (_employees.length === _maxCount){  // check who has the lowest salaries
            let minSalaryEmployeeId = [0];
            for (let i = 1; i < _employees.length; i++) {
                if (_employees[i].salary < _employees[minSalaryEmployeeId[0]].salary){
                   minSalaryEmployeeId = [];
                   minSalaryEmployeeId[0] = i;
                   continue
               } 
                if (_employees[i].salary === _employees[minSalaryEmployeeId[0]].salary){
                     minSalaryEmployeeId.push(i) 
                }   
            }
            if (minSalaryEmployeeId.length === 1){
                this.removeEmployee(minSalaryEmployeeId[0]);
                _employees.push(employee);
                employee.hire(compData.name);
                employee.working = true;
                employee.startWorkInCompany = new Date().getSeconds();
                _logs.push(`${employee.name} starts working at ${compData.name} in ${new Date()}`)
                return
            }

            //Check who works longer with min salaries

            let maxTimeWorkEmployeeId = minSalaryEmployeeId[0];
            for (let i = 0; i < minSalaryEmployeeId.length; i++) {
                if (_employees[minSalaryEmployeeId[i]].getWorkTimeInSeconds() > maxTimeWorkEmployeeId){
                    maxTimeWorkEmployeeId = minSalaryEmployeeId[i];
                }
            }
            this.removeEmployee(maxTimeWorkEmployeeId)
            _employees.push(employee);
            employee.hire(compData.name);
            employee.working = true;
            employee.startWorkInCompany = new Date().getSeconds();
            _logs.push(`${employee.name} starts working at ${compData.name} in ${new Date()}`)
        } 
    }
    this.removeEmployee = function(id){
        if (!((typeof(id) === 'number') && (isFinite(id)))){
            console.log('Incorrect data, put as first argumet a number (id of employee)');
            return
        }
        _employees[id].working = false;
        _employees[id].fire();
        _employees[id].finishWorkInCompany = new Date().getSeconds();
        _logs.push(`${_employees[id].name} ends working at ${compData.name} in ${new Date()}`)
        _employees.splice(id, 1);
    }
    this.getAvarageSalary = function(){
        let sum = 0;
        for (let i = 0; i < _employees.length; i++) {
            sum += _employees[i].salary
        }
        return Math.round(100 * (sum / _employees.length)) / 100
    }
    this.getEmployees = function(){
        return _employees
    }
    this.getFormattedListOfEmployees = function(){
        for (let i = 0; i < _employees.length; i++) {
            console.log(`${_employees[i].name} -  works in ${compData.name} ${_employees[i].getWorkTimeInSeconds()} seconds`)
        }
    }
    this.getAvarageAge = function(){
        let sum = 0;
        for (let i = 0; i < _employees.length; i++) {
            sum += _employees[i].age
        }
        return Math.round(100 * (sum / _employees.length)) / 100
    }
    this.getHistory = function(){
        return _logs
    }
}

function Employee(employeeData){
    this.working = false;
    this.currentNameCompany = null;
    this.startWorkInCompany = 0;
    this.finishWorkInCompany;
    this.name = employeeData.name;
    this.primarySkill = employeeData.primarySkill;
    this.age = employeeData.age;
    this.salary = employeeData.salary;
    let _employeeLogs = [];
    let _TimeOfWork = 0;
    this.getSalary = function(){
        return this.salary
    }
    this.setSalary = function(newSalary){
        if (!((typeof(newSalary) === 'number') && (isFinite(newSalary)))){
            console.log('Incorrect data, put as first argumet a number (salary of employee)');
            return
        }
        if (newSalary <= this.salary){
            _employeeLogs.push(`try to change salary from ${this.salary} to ${newSalary}`)
        } else {
            _employeeLogs.push(`change salary from ${this.salary} to ${newSalary}`)
            this.salary = newSalary;
        }
    }
    this.getWorkTimeInSeconds = function(){
        if (this.working){
            let timeOfWorking = _TimeOfWork + new Date().getSeconds() - this.startWorkInCompany;
            return timeOfWorking;
        }
        return _TimeOfWork;
    }
    this.hire = function(currentNameCompany){
        if (!(typeof(currentNameCompany) === 'string')){
            console('Incorrect data, put as first argumet a string (name of company)');
            return
        }
        this.currentNameCompany = currentNameCompany;
        _employeeLogs.push(`${this.name} is hired to ${this.currentNameCompany} in ${new Date()}`)
    }
    this.fire = function(){
        _employeeLogs.push(`${this.name} is fired from ${this.currentNameCompany} in ${new Date()}`)
        this.currentNameCompany = null;
    }
    this.getHistory = function(){
        return _employeeLogs;
    }
}


let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});

let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});
epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);

epam.removeEmployee(2);


console.log(epam.getHistory());
epam.getFormattedListOfEmployees();

console.log(vasyl.getHistory());

console.log(epam.getAvarageSalary()); 
console.log(epam.getAvarageAge());  

epam.addNewEmployee(5,6,9,5); 

setTimeout(() => {
   epam.removeEmployee(1);
   console.log(artem.getWorkTimeInSeconds());
}, 5000);

vova.setSalary(900);
vova.setSalary(2200);
epam.removeEmployee(1);

console.log(vova.getHistory());
console.log(vova.currentNameCompany);

setTimeout(() => {
    console.log(epam.getHistory());
 }, 5000);



 




