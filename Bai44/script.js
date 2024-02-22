var  content = 'Xin chào bạn nha'
//Với chuỗi ở trên, nếu cần thêm dấu nháy cho 1 phần tử nào đó của chuỗi ta thêm dấu nháy khác với dấu nháy bao bọc chuỗi, vd:
var  content = 'Xin chào bạn "Huy" nha'
//Ở trên Huy đc đặt trong dấu nháy kép, đưa dấu nháy kép ra ngoài, nháy đơn ở trong cũng đc
var  content = 'Xin chào bạn "Huy" nha'
//Để sử dụng cũng dấu nháy cho cả trong và ngoài ta thêm dấu \ vào trước mỗi dấu nháy bao bọc phần tử đó,vd:
var  content = 'Xin chào bạn \'Huy\' nha'
//Nếu cần thêm ký tự \ trong chuỗi có chứa phần tử trong dấu \\ như trên thì ta viết 2 dấu \\ liên tiếp:
var  content = 'Xin chào \\ bạn \'Huy\' nha'

//Để truyền biến vào chuỗi để tạo chuỗi động, dùng dấu `` ở 2 đầu chuỗi thay vì dấu nháy
var fullname =  'Trần Dương Huy'
var age = 30
var address = 'HCM'
console.log(`Họ tên là: ${fullname}, Tuổi là: ${age}, Địa chỉ là: ${address} `)

//Với mỗi ký từ trong chuỗi (bao gồm khoảng trắng) sẽ được tính vào chiều dài của chuỗi
var  content = 'Xin chào bạn nha'
//Dùng cú pháp bên dưới để xem độ dài chuỗi
console.log(content.length)

//Dùng cú pháp sau để xem vị trí bắt đầu xuất hiện của ký tự đầu tiên của chuỗi nhỏ trong chuỗi lớn, giống như mảng, nó cũng sẽ tính từ vị trí thứ 0 cho ký tự đầu tiên (bao gồm cả khoảng trắng)
console.log(content.indexOf('chào')) //Kết quả sẽ là 4
//Nh giả sử trong chuỗi có ít nhất 2 lần xuất hiện từ chào thì ta sẽ thêm 1 đối số tìm kiếm từ vị trí mà bảo đảm chuỗi đó sẽ xuất hiện ở vị trí sau (các) vị trí đầu tiên
console.log(content.indexOf('chào',5)) //ctrinh sẽ tìm kiếm chuỗi con "chào" từ index thứ 5 trong chuỗi lớn
//Muốn tìm ra vị trí chuỗi con xuất hiện cuối cùng trong chuỗi lớn, ta dùng cú pháp sau
console.log(content.lastIndexOf('chào'))
//Trường hợp k tìm thấy chuỗi con trong chuỗi lớn, kết quả trả về sẽ là -1

//Cắt chuỗi con trong chuỗi lớn từ vị trí thứ 4 đến 5, kq trả về là chuỗi con đc cắt
console.log(content.slice(4,6))
//Muốn cắt từ vị trí thứ 4 đến hết, kq trả về là chuỗi con đc cắt
console.log(content.slice(4))
//Copy y nguyên chuỗi gốc (tức là cắt từ vị trí thứ 0)
console.log(content.slice(0))
//Thay thế chuỗi 'chào' thành chuỗi 'chào hihi' xuất hiện ở vị trí đầu tiên trong chuỗi lớn
console.log(content.replace('chào', 'chào hihi'))
//Thay thế toàn bộ chuỗi con trong chuỗi lớn từ 'chào' thành 'chào hihi'
console.log(content.replace(/chào/g, 'chào hihi'))


//Chuyển toàn bộ chuỗi thành viết hoa:
content.toUpperCase()
//Chuyển toàn bộ chuỗi thành viết thường:
content.toLowerCase()

//Cắt tất cả khoảng trắng ở đầu và cuối chuỗi
content.trim()
//Chuyển chuỗi thành mảng, kq trả về 1 mảng chỉ có 1 phần tử duy nhất, chính là chuỗi content, nh lúc này là dạng mảng chứ k còn là dạng chuỗi nữa
content.split()  //kq là:  ['Xin chào bạn nha']
//Chuyển chuỗi thành mảng nh tách các phần tử trong chuỗi bởi ký tự nào đó, vd dấu cách:
content.split(' ') //kq là:  ['Xin', 'chào', 'bạn', 'nha'] vì ctrinh sẽ tách các phần tử nào được cách nhau bởi dấu cách, nếu chuỗi gốc là
//'Xin-chào-bạn-nha' thì hàm cần viết sẽ là content.split('-')
