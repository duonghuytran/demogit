// Khái niệm object-constructor: là 1 bản thiết kế của đối tượng giúp cho việc tạo đối tượng được dễ dàng và thuận tiện hơn. Giả sử trong 1 lớp học có các thông tin tên, tuổi, điểm của học sinh thì k thể tạo 1 cách thủ công từng học sinh được mà cần phải dùng đến object-constructor
// var student1 = {
//     fullname:'Trần Văn Tuấn', 
//     age: 19, score: 9, 
//     getinfo: function(){
//         return `fullname: ${this.fullname}, age: ${this.age}, score: ${this.score}`
//     }
// };

// var student2 = {
//     fullname:'Trần Văn Tuấn', 
//     age: 20, score: 9.5, 
//     getinfo: function(){
//         return `fullname: ${this.fullname}, age: ${this.age}, score: ${this.score}`
//     }
// };
// Viết object-constructor giống như 1 function
 function HocSinh(hoten, tuoi, diem){
    this.hoten = hoten;
    this.tuoi = tuoi;
    this.diem = diem;
    this.laythongtin = function(){
        return `hoten: ${this.hoten}, tuoi: ${this.tuoi}, diem: ${this.diem}`
    }
 }
//  Tạo mới 1 đối tượng hocsinh3 hoặc vô số đối tượng khác có cùng cấu trúc tên, tuổi, điểm bằng dòng bên dưới thay vì phải code mỗi học sinh 1 số lượng code như student1 và student2
 var hocsinh3 = new HocSinh('Nguyễn Văn A','16','9.0');
 console.log('hocsinh3: ', hocsinh3);

 var hocsinh4 = new HocSinh('Nguyễn Văn B','90','2.0');
 console.log('hocsinh4: ', hocsinh4);
// Ngoài ra còn có thể dùng hàm laythongtin để gọi giá trị của hocsinh3 và hocsinh4
 console.log('hocsinh3(lần 2): ', hocsinh3.laythongtin());
 console.log('hocsinh4(lần 2): ', hocsinh4.laythongtin());

//  Để thêm các thuộc tính khác mà kp học sinh nào cũng có như: bằng khen, thành tích, hoạt động ngoại khóa,vv thì ta dùng thêm các thuộc tính đó vào cho riêng đối tượng đó, vd:
// Thêm bằng khen cho hocsinh3:
hocsinh3.bangkhen = 'Học sinh giỏi cấp tình';
console.log(hocsinh3);

// Thêm thành tích ca hát cho hocsinh4
hocsinh4.thanhtich = 'Giải nhất Bolero';
console.log(hocsinh4);




