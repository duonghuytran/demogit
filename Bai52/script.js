//getElementsByTagName: lấy ra tất cả thẻ p thì đưa chữ p vào làm đối số của hàm này 
//kq trả về là 1 HTMLCollection chứa tất cả thẻ p dưới dạng "index:p", nó gần giống mảng nh k có các phương thức như some, find, map, for each, 
//để xem nội dung của thẻ p ta cần thêm index khi gọi đến biến chứa HTMLCollection, vd để xem nội dung thẻ p có index là 2, ta gõ: pElement[2]
var pElement = document.getElementsByTagName('p');
console.log(pElement[2]);

//getElementsByClassName: thay vì dùng id thì ta dùng tên class, vd bên dưới là tìm các thẻ có class tên là para, kd trả về cũng là 1 HTMLCollection chứa các phần tử dưới định dạng "<index>:<tên thẻ><tên class>"
//để xem nội dung của thẻ p có classs para, ta cần thêm index khi gọi đến biến chứa HTMLCollection, vd để xem nội dung thẻ p có index là 0, ta gõ: paraElement[0]
var paraElement = document.getElementsByClassName('para');
console.log(paraElement[0]);


//querySelector: 
//lấy ra 1 phần tử có class tên para
var paraElement1 = document.querySelector('.para');
console.log(paraElement1[1]);

//lấy ra thẻ p đầu tiên nằm trong thẻ có id là div-1 
var pInDiv = document.querySelector('#div-1 p');
console.log(pInDiv)

//lấy ra thẻ li đầu tiên của thẻ có class là nav
var selectedLi = document.querySelectorAll('.nav li')
console.log(selectedLi)

//lấy ra thẻ li cuối cùng của thẻ có class là nav (sử dụng lớp giả)
var selectedLi = document.querySelectorAll('.nav li:last-child')
console.log(selectedLi)

//lấy ra thẻ li ở vị trí thứ 3 (kp index) của thẻ có class là nav (sử dụng lớp giả)
var selectedLi = document.querySelectorAll('.nav li:nth-child(3)')
console.log(selectedLi)


//querySelectorAll: 
//lấy ra tất cả phần tử có class tên para và trả về 1 NoteList chứa các phần tử, cách truy xuất các phần tử cũng giống như mảng
var paraElement2 = document.querySelectorAll('.para');
console.log(paraElement2[1]);

//lấy ra tất cả thẻ p nằm trong thẻ có id div-1 và trả về 1 NoteList chứa các phần tử, cách truy xuất các phần tử cũng giống như mảng
var paraElement2 = document.querySelectorAll('#div-1 p');
console.log(paraElement2[1]);

