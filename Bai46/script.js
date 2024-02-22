var student1 = {
    Fullname: "Trần Văn Tuấn",
    Age: 19,
    Score: 9,
    GetInfo: function () {
        return `Fullname: ${this.Fullname}, Age: ${this.Age}, Score: ${this}`
    }};

var student2 = {
    Fullname: "Trần Văn Huy",
    Age: 19,
    Score: 9,
    GetInfo: function () {
        return `Fullname: ${this.Fullname}, Age: ${this.Age}, Score: ${this}`
    }};

function Student(fullname, age, score){
this.fullname = fullname;
this.age = age;
this.score = score;
this.getInfo = function(){
    return `Fullname: ${this.fullname}, Age: ${this.age}, Score: ${this.score}`
    }
}
var studen3 = new Student3("Trần Văn Tuấn", 19, 9);
student3.Gender = "Nữ"
student1.Address = "Hà Nội"
var studen4 = new Student4("Trần Văn Huy", 19, 9);