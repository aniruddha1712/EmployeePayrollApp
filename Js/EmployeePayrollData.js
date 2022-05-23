class EmployeePayrollData
{
  get id() {return this._id;}
  set id(id){
    this._id = id;
  }

  get name() {return this._name;}
  set name(name){
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z//s]{2,}$');
    if(nameRegex.test(name))
      this._name = name;
    else throw 'Incorrect Name';
  }

  get profilePic() {return this._profilePic;}
  set profilePic(profilePic) {
    this._profilePic = profilePic;
  }

  get gender() {return this._gender;}
  set gender(gender){
    this._gender = gender;
  }

  get department() {return this._department;}
  set department(department){
    this._department = department;
  }

  get salary() {return this._salary;}
  set salary(salary){
    this._salary = salary;
  }

  get note() {return this._note;}
  set note(note){
    this._note = note;
  }

  get startDate() {return this._startDate;}
  set startDate(startDate){
    let todayDate = new Date().toLocaleDateString();
    if (startDate <= todayDate)
        this._startDate = startDate;
    else throw "The Given Date is future Date";
  }

  toString(){
    const option = {year:'numeric', month:'long', day:'numeric'};
    const empdate = this.startDate ? 'undefined': this.startDate.toLocaleDateString("en-US", option);

    return "id="+this.id+", Name="+this.name+", Gender="+this.gender+". ProfilePic="+this.profilePic+
         ", Department="+this.department+", Salary="+this.salary+", StartDate="+this.startDate+", Note="+this.note;
  }
}