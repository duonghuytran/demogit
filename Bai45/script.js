//Đây là 1 object với các pro fullname, age, address, Các property bên trong object cách nhau bởi dấu phẩy, muốn tạo pro email-address với dấu "-", thêm dấu ngoặc vuông cho nó [email-address]
var student = {
    fullname: 'Trần Văn Tuấn', 
    age: 20, 
    address:' Mỹ Đình',
    [email-address]: 'huytd1@scb.com.vn'
}
// In ra object
console.log(student);


// Truy xuất property adress
console.log(student.adress); //gọi đến tên object - tên pro (khuyên dùng)
console.log(student['adress']); //gọi đến tên object - tên pro dưới dạng string
// Thay đổi giá trị bên trong object, vd gán lại giá trị cho age
student.age = 19;
console.log(student);
// Thêm mới 1 pro tên score vào cuối object student
student.score = 9.5;
console.log(student);
// Đưa giá trị của 1 biến thành 1 pro trong 1 object có sẵn, thay vì đưa Địa chỉ email vào thì ta dùng cách bên dưới, đưa tên biến vào trong dấu [], kq trả về là: {fullname: 'Trần Văn Tuấn', age: 20, adress: ' Mỹ Đình', Địa chỉ email: 'huytd1@scb.com.vn'}
var email ='Địa chỉ email';
var student = {
    fullname: 'Trần Văn Tuấn', 
    age: 20, 
    adress:' Mỹ Đình',
    [email]: 'huytd1@scb.com.vn'
}
console.log(student);
// Để truy xuất giá trị của pro email trong object, vì nó là 1 biến bên ngoài object nên nó sẽ khác với việc gọi 1 pro có sẵn, có 2 cách:
// Cách 1: gọi đến giá trị của biến email
console.log(student['Địa chỉ email']);
// Cách 2: gọi bằng tên biến, KHUYÊN DÙNG
console.log(student[email]);


// Xóa pro age trong object student:
delete student.age;
console.log(student);

// Phương thức trong object: về bản chất là 1 hàm, trong 1 object, chúng ta có thể truyền 1 pro dưới dạng 1 hàm vào, và 1 pro như vậy đc gọi là phương thức
var student = {
    fullname: 'Trần Văn Tuấn', 
    age: 20, 
    adress:' Mỹ Đình',
    [email]: 'huytd1@scb.com.vn',
    hello: function(){
        return 'Hello world';
    }, //đây là cách (1) để truyền 1 hàm làm phương thức trong 1 object 
    GetInfo(){
        return `tên: ${this.fullname} , tuổi: ${this.age}, địa chỉ: ${this.adress} `
    } //đây là cách (2) để truyền 1 hàm làm phương thức trong 1 object 
}
// Gọi đến hàm hello, vì là hàm nên cần có cặp dấu ngoặc tròn ở sau
console.log(student.hello());
// Gọi đến hàm GetInfo, this chính là đại diện cho object student, vì hàm đang được viết trong object này nên dùng this.fullname nghĩa là fullname của object student này
console.log(student.GetInfo());