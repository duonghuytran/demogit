var ngonngu = ['hihi', 'haha', 'huhu', 'hehe'];
// toString(): Phương thức Chuyển mảng trên thành chuỗi, bắt buộc dùng dấu ","
console.log(ngonngu.toString());
// join: cho phép nối các phần tử trong mảng với nhau bằng các ký tự cụ thể, linh hoạt hơn
console.log(ngonngu.join('-')); 
// pop:Xóa đi phần tử cuối cùng và trả ra kết quả phần tử bị xóa
console.log(ngonngu.pop());
console.log(ngonngu);
// push: thêm 1 hoặc nhiều phần tử vào cuối mảng, kết quả trả về là độ dài của mảng sau khi thêm
console.log(ngonngu.push('hichic'));
console.log(ngonngu);
// shift: xóa đi phần tử đầu tiên trong mảng và trả về phần tử bị xóa
console.log(ngonngu.shift());
console.log(ngonngu);
// unshift: thêm các phần tử vào đầu mảng, gần giống push, và trả về độ dài của mảng sau khi thêm
console.log(ngonngu.unshift('cuoi', 'khoc'));
console.log(ngonngu);
// slice(x,y): x,y số chỉ mục, x là vị trí bắt đầu cắt, y là vị trí kết thúc, vd: slice(1,3) sẽ cắt từ phần tử có index là 1, cắt đến trc phần tử có index là 3 (tức cắt chỉ mục 1 và 2). Kết quả trả về là mảng ngonngu mới đc tạo ra chỉ có 2 phần tử 1,2, mảng ban đầu giữ nguyên
console.log(ngonngu.slice(1,3))
console.log(ngonngu);
// slice(0): thêm số 0 và slice để copy mảng ngonngu y hệt
console.log(ngonngu.slice(0))
// slice(-x,-y): slice cho phép lựa chọn hướng cắt các phần tử trong mảng, cắt tử trái qua phải nếu là số dương, ngược lại nếu là số âm. Kết quả như sau: phần tử cuối cùng của mảng được tính là 0, dịch sang trái là -1, -2, -3, vậy nó sẽ cắt từ phần tử -2 đến -1. Kết quả trả về là mảng ngonngu mới đc tạo ra chỉ có 2 phần tử -2,-1, mảng ban đầu giữ nguyên
console.log(ngonngu.slice(-3,-1));
console.log(ngonngu);
// slice(x): nếu x khác 0 thì nó sẽ cắt từ phần tủ thứ x đến hết mảng
console.log(ngonngu.slice(1));
console.log(ngonngu);

var hoaqua = ['táo', 'lê', 'đào', 'mận', 'dưa'];
// concat("mảng cần nối"): Nối mảng hoaqua vào phía sau mang ngonngu
console.log(ngonngu.concat(hoaqua));
// splice(x,y): x là chỉ mục của phần tử cần xóa, y là số lượng phần tử bị xóa, vd splice(1,2) nó sẽ xóa phần tử có chỉ số là 1 và xóa 2 phần tử, tính luôn phần tử thứ 1 đó. Kết quả trả về là mảng chứa (các) phần tử bị xóa
console.log(ngonngu.splice(1,2))
console.log(ngonngu);
// splice(x,y, 'phần tử thay thế 1', "phần tử thay thế 2"): Xóa phần tử có chỉ mục là x, số lượng xóa là y và thay thế (các) phần tử bị xóa bằng (các) phần tử khác. Ngoài việc xóa linh hoạt, có thể dùng phương thức này để thay để phần tử. Kết quả trả về là mảng chứa (các) phần tử bị xóa
console.log(ngonngu.splice(1,3, 'JAVA','AHIHI', 'lips'));
console.log(ngonngu);
// sort: sắp xếp thứ tự các phần tử từ nhỏ đến lớn nếu mảng là số, từ a-z nếu mảng là string, lưu ý nếu trong mảng có chữ in hoa thì chữ in hoa được xếp đầu tiên, nếu có nhiều chữ in hoa thì sẽ xếp theo tiêu chí từ a-z
console.log(ngonngu.sort());
// reverse: đảo ngược vị trí các phần tử trong mảng, từ cuối lên đầu, từ đầu xuống cuối
console.log(ngonngu.reverse());
