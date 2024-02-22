// Mảng: Array là một đối tượng định nghĩa sẵn trong js, chúng ta dùng 1 mảng để chứa danh sách các giá trị thay vì mỗi một giá trị phải gán vào 1 biến -->
// Các phần tử trong mảng không nhất thiết phải cùng 1 kdl
// Cách 1: khai báo các phần tử với các kdl khác nhau trong cùng 1 mảng
var traicay = new Array('cam', 'lê', 'táo', 34, {}, null);
console.log('mảng trái cây gồm: ', traicay)

// Cách 2:
var ngonNguLapTrinh = ['C#', 'JS', 'Ruby', 'PHP', 'Python'];
console.log("Các ngôn ngữ lập trình là: ", ngonNguLapTrinh);
console.log('Độ dài mảng trên là: ', ngonNguLapTrinh.length);
console.log('Phần tử thứ 2 là: ', ngonNguLapTrinh[2]);
// Bên dưới là cách kiểm tra xem 1 biến có phải là mảng k, ở trên ngonNguLapTrinh là 1 biến, nh nếu đưa vào đó 1 object rỗng ({}) thì kdl trả về cũng là object, do đó ta dùng Array.isArray(tên biến) để kiểm tra, nếu trả về là true thì mảng, false thì kp mảng
console.log('kdl của ngonNguLapTrinh là: ', typeof ngonNguLapTrinh);
console.log('kdl của ngonNguLapTrinh là: ', Array.isArray(ngonNguLapTrinh));

