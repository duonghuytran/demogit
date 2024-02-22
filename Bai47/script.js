// VONG LẶP FOR
for (var index = 1; index <= 5; index++) {
    console.log(index)
    
}

var ngonngu = ['C#', 'php', 'java', 'js'];
// index bắt đầu từ o đến index nhỏ hon chiều dài của mảng (array.length), vì index tính từ 0
var length = ngonngu.length;

for (var index = 0; index <= length - 1; index++) {
    console.log(ngonngu[index])    
}
// VONG LẶP FOR IN

// In ra index của các phần tử trong mảng (kp giá trị của phần tử nhé)
for(var item in ngonngu){
    console.log(item)
}

// in ra các giá trị phần tử trong mảng
for(var item in ngonngu){
    console.log(ngonngu[item])
}
// duyệt qua từng pro trong object
var student = {
    FullName: 'Trần Văn A',
    Age: 15,
    Score: 9.5
}
for(var item in student){
    // In ra tên của pro
    console.log(item)
    // in ra giá trị của pro
    console.log(student[item])
}

// VONG LẶP FOR OF: in ra giá trị các phần tử trong mảng, chủ yếu dùng cho mảng, 
// khác biệt với for in cú pháp bên dưới sẽ in ra index trong mảng, còn for of sẽ in ra các giá trị phần tử trong mảng
for(var item of ngonngu){
    console.log(item)
}

//Bên dưới, ta đang thực hiện thêm các phần tử của mảng ngonngu vào chuỗi htmlStr qua mỗi lần lặp và hiển thị nó trong thẻ p
var ngonngu = ['C#', 'php', 'java', 'js'];
var htmlStr = '';
for(var item of ngonngu){
    htmlStr += `<p>${item}</p>`
}
document.getElementById('content').innerHTML = htmlStr;