
//A. VÒNG LẶP WHILE: kiểm tra điều kiện trước khi thực hiện lệnh
//in trên chương trình
var i = 1
while (i <= 10) {
    console.log(i)
    i++;
}

//in trên trình duyệt
// 1. Đây là body của thẻ html
{/* <body>
    <div id="content"></div>
    <script src="./script.js"></script>
</body> */}
//2. Đây là code của file script.js
var i = 1
var html = '';
while (i <= 10) {
    html += '<p>${i}</p>' 
    console.log(i);
    i++;
}
document.getElementById('content').innerHTML = html

//B. VÒNG LẶP DO-WHILE: thực hiện lệnh sau đó mới kiểm tra điều kiện, do đó, vòng lặp này chắc chắn sẽ chạy ít nhất 1 lần, đây là điểm khác biệt với vòng lặp while
var j = 5
do {
    console.log(j)
    j++
} while (j<5)