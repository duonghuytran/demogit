// Cộng, trừ, nhân, chia, chia lấy dư, ++: cộng thêm 1, --: trừ đi 1
var number1 = 10;
var number2 = 3;
number1 ++;
number2 --;
// Cách 1 dùng dấu ""
console.log("Kết quả phép cộng: ", number1 + number2);
// Cách 2: Dùng dấu `` (dấu ở dưới nút esc)
console.log(`giá trị number1: ${number1}, giá trị number2: ${number2}`)
numberA = number1++
// Lưu ý: ở trên numberA sẽ bằng 10 vì biến number1 sẽ được gán cho biến numberA sau đó nó mới tăng lên giá trị
numberA = ++number1
// Ở trên đây number1 sẽ cộng thêm 1 đơn vị sau đó mới gán cho numberA
// number1 = number1 + 5 viết cách khác là:
number1 +=5

// 2. Toán tử so sánh
// 2.1 So sánh bằng: ==, kq bên dưới sẽ là true vì cả 2 đều bằng 5, dùng 2 dấu = sẽ chỉ so sánh giá trị chứ k so sánh thêm về kdl
var check = 5 == "5";
console.log("Kết quả biến check: ", check)
// 2.2 So sánh bằng cùng giá trị và kiểu dữ liệu: ===, kq ở dưới là false vì kdl number k thể bằng string
var check = 5 === "5";
console.log("Kết quả biến check: ", check)
// 2.3 SO sánh khác giá trị !=: ở bên dưới trả về false vì 5 k khác giá trị với 5 
var check1 = 5!= "5";
console.log("Kết quả biến check: ", check1)
// 2.4 SO sánh khác giá trị và khác kdl !==: kq bên dưới là true vì 2 số khác kdl dù cùng giá trị
var check1 = 5!== "5";
// 2.5 Lớn hơn >: kq bên dưới là true 6>5
var check2 = 6>5;
// 2.6 Lớn hơn hoặc bằng >=
// 3. Toán tử logic
// 3.1 &&: phép trả về là true nếu 2 số hạng là true: a && b, kq bên dưới sẽ là true, nếu đối lại 1 biểu thức bị sai thì kq sẽ là false
// biểu thức 9%3===0 so sánh kết quả của phép chia lấy dư 9%3 với 0, và nó cũng kiểm tra xem kết quả này có cùng kiểu dữ liệu và giá trị với 0 hay không
var check3 = 9%3===0 && 9>3;
// 3.2 || phép hoặc trả về true nếu 1 trong 2 số hạng là true: a || b
var check3 = 9%3===0 || 9<3;
// 2.9 Phủ định, trả về giá trị ngược với biểu thức !a




