//break: for in sẽ in ra giá trị của phần tử thứ item, nh nếu gặp phần tử (item) có index = 2 sẽ thoát vòng lặp
//Cần lưu ý về việc sử dụng 2 hay 3 dấu =, 2 dấu = thì chỉ cần giống nhau giá trị, 3 dấu thì phải bằng cả kdl, mà item chỉ nhận kdl string, 2 là number nên 3 dấu = sẽ sai

var fruit = ['cam', 'xoài', 'lê', 'táo']
for (var item in fruit) {
    if (item == 2) {
        break
    }
    console.log(fruit[item])
}

//continue: for in sẽ in ra giá trị của phần tử thứ item, nh nếu gặp phần tử (item) có index = 2 sẽ bỏ qua phần tử đó và tiếp tục vòng lặp
//tức là nó sẽ bỏ qua dòng console.log(fruit[item]) và tiếp tục vòng lặp đến item == 3 khi gặp 'lê' (item == 2)
var fruit = ['cam', 'xoài', 'lê', 'táo']
for (var item in fruit) {
    if (item == 2) {
        continue
    }
    console.log(fruit[item])
}
