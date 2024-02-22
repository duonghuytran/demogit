//Chuyển các kdl JSON sang JS: dùng hàm parse và phải bảo đảm các nguyên tắc bên dưới
var hehe= "5" //số: đc đặt trong nháy đơn hoặc nháy kép
var haha = '"haha"' //chuỗi: được đặt trong nháy kép với nháy đơn bao ở ngoài
var mang = '["php", "java", 5]' //mảng, các phần tử phải được đưa vào trong dấu ngoặc kép, số trong mảng k cần đưa vào trong dấu " "
var object = '{"studentName": "Anna", "Age": 25}' //obj: toàn bộ obj phải đc đặt trong dấu nháy đơn, các thuộc tính trong object phải đc đặt trong dấu "", số thì k cần
var hihi = 'true' //boolean: true hoặc false sẽ có kdl là boolean
var nun = 'null' //null: ép ra giá trị null, kdl là obj
var undefined = 'undefined' //nó sẽ báo lỗi, chuỗi JSON sẽ k nhận đc giá trị undefined 

var data = JSON.parse(undefined)
console.log(undefined, typeof data)

//Chuyển các kdl từ JS sang JSON:dùng hàm stringify và phải bảo đảm các nguyên tắc bên dưới
var so = 5.75 //số: sẽ đc chuyển thành chuỗi của JSON
var chuoi = 'hello' //chuỗi: sẽ được chuyển thành chuỗi của JSON
var mang1 = [9, 10, true, 'hello'] //mảng: sẽ được chuyển thành chuỗi của JSON
var obj1 = {họten: 'huy', tuoi: 25} //obj: sẽ được chuyển thành chuỗi của JSON
var boolean = 'true' //boolean: true chuyển thành chuỗi của JSON
var nun1 = 'null' //null: null chuyển thành chuỗi của JSON

var json1 = JSON.stringify(nun1)
console.log(nun1, typeof json1)
