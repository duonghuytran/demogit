
//lấy ra full giờ-phút-giây ngày -tháng-năm múi giờ tại thời điểm truy vấn
var date = new Date();
console.log(date) //biến date chứa full thông tin thời gian ở trên
console.log(date.getFullYear()) //trả về giá trị "năm" từ biến date
//hàm này trả về tháng từ 0 đến 11, 0 sẽ là t1, 11 sẽ là t12, do đó cuối hàm phải +1
console.log(date.getMonth() + 1) 
console.log(date.getDate()) //trả về giá trị "ngày" từ biến date
console.log(date.getHours()) //trả về giá trị "giờ" từ biến date
console.log(date.getMinutes()) //trả về giá trị "phút" từ biến date
console.log(date.getSeconds()) //trả về giá trị "giây" từ biến date
console.log(date.getMilliseconds()) //trả về giá trị "mili giây" từ biến date

console.log(Math.PI) //lấy ra số PI khá dài
console.log(Math.round(5.5)) //trả về số nguyên gần cận trên/dưới nhất, 5.5 sẽ thành 6
console.log(Math.ceil(5.001)) //trả về số nguyên lên cận trên,k quan tâm số ở sau là số mấy, 5.1 sẽ thành 6
console.log(Math.floor(5.999)) //trả về số nguyên lên cận dưới,k quan tâm số ở sau là số mấy, 5.999 sẽ thành 5
console.log(Math.random()) //trả về 1 giá trị ngẫu nhiên trong khoảng từ 0.1 và 1
console.log(Math.round(Math.random()*100)) //trả về 1 giá trị ngẫu nhiên trong khoảng từ 0.1 và 100
console.log(Math.pow(2, 3))//hàm tính lũy thừa, đối số thứ nhất là số cơ sở , đối số thứ 2 là số mũ, đây là 2 mũ 3
console.log(Math.sqrt(9)) //hàm tính căn bậc 2, đối số là số cần tính căn (9 căn bậc 2 là 3)
console.log(Math.abs(-5)) //hàm tính giá trị tuyệt đối, đối số là số cần tính giá trị tuyệt đối
console.log(Math.min(1,2,3,4,5,6,7,8,9)) //trả về giá trị nhỏ nhất trong các đối số, sl đối số = 0 sẽ trả về Infinity
console.log(Math.max(1,2,3,4,5,6,7,8,9)) //trả về giá trị lớn nhất trong các đối số, sl đối số = 0 sẽ trả về -Infinity