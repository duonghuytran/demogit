
function GetValue(value){
    console.log(value);
}

// không cần thêm cặp dấu ngoặc tròn () ở cuối tên hàm GetValue1 khi bạn gán nó cho sự kiện onclick, vì bạn không muốn gọi hàm ngay lập tức, mà chỉ muốn định nghĩa hàm để được gọi sau khi sự kiện xảy ra.
//GetValue1 là một hàm không có tham số. Khi bạn gọi nó bằng cách viết GetValue1(), nó sẽ thực hiện các lệnh bên trong mà không cần thông tin từ bất kỳ biến nào được truyền vào.
//do đó, hàm GetValue1() không cần có bất kỳ biến nào được chỉ định trong dấu ngoặc đơn ()

//gán tham chiếu của hàm cho sự kiện onclick khác với việc gọi hàm trực tiếp. Dưới đây là sự khác biệt giữa hai cách này:

// Gán tham chiếu của hàm cho sự kiện onclick:
// Khi bạn gán tham chiếu của hàm cho sự kiện onclick, bạn chỉ định rằng hàm đó sẽ được gọi khi sự kiện xảy ra, không phải là gọi ngay lập tức.
// Khi sự kiện xảy ra (ví dụ: khi người dùng nhấp vào nút), hàm sẽ được gọi và thực thi.

// Gọi hàm trực tiếp:
// Khi bạn gọi hàm trực tiếp, hàm sẽ được thực thi ngay lập tức tại thời điểm gọi.
// Điều này có nghĩa là không cần phải có sự kiện nào xảy ra để kích hoạt hàm, và hàm sẽ được gọi ngay lập tức trong luồng thực thi của chương trình.
//cách này sẽ giúp chúng ta chỉ cần viết bằng js thôi
function GetValue1(){
   console.log(this.title) ;
}
var button = document.querySelector('#btn-GetTitle')
button.onclick = GetValue1

//tương tự như trên, mỗi khi người dùng nhập vào trường văn bản, hàm GetValue2 sẽ được gọi để in ra giá trị của trường văn bản đó (giá trị value của nó). Điều này giúp bạn theo dõi các thay đổi trong trường văn bản một cách tức thì và thực hiện các hành động tương ứng.
function GetValue2(){
    console.log(this.value) ;
}
var studentName = document.querySelector('#txt-StudentName')
studentName.oninput = GetValue2

//tương tự như trên, nh khác là sự kiện onchange xảy ra thì hàm sẽ đc gọi
function GetValue3(){
    console.log(this.value) ;
}
var studentClass = document.querySelector('#txt-Class')
studentClass.onchange = GetValue3
 
// cach 3 event listenner
//thay vì viết như cách 2 thì dùng phương thức addEventListener, ghi tên sự kiện ở đối số thứ 1 (event ), đối số thứ 2 (function ) là tên hàm cần gọi
var button = document.querySelector('#btn-GetTitle');
button.addEventListener('click', GetValue1)

var studentName = document.querySelector('#txt-StudentName');
studentName.addEventListener('input', GetValue2)

var studentClass = document.querySelector('#txt-Class');
studentClass.addEventListener('change', GetValue2)

// cach 2 dom event
// var button = document.querySelector('#btn-GetTitle');
// button.onclick = GetValue1


// var studentName = document.querySelector('#txt-StudentName');
// studentName.oninput = GetValue2;

// var studentClass = document.querySelector('#txt-Class');
// studentClass.oninput = GetValue2;


