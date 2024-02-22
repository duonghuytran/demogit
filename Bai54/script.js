

//vd1: Đây là cách lấy phần tử HTML có id là btn-who bằng cách sử dụng phương thức document.querySelector(). Phương thức này chọn phần tử đầu tiên mà nó tìm thấy trong tài liệu HTML phù hợp với một bộ chọn CSS được cung cấp (trong trường hợp này, #btn-who đề cập đến một phần tử có id là btn-who) và gán nó cho biến btn.
var btn = document.querySelector('#btn-who')

//Đây là phương thức addEventListener, được gọi trên phần tử HTML đã được chọn trước đó. Nó gán một hàm xử lý cho sự kiện click của phần tử đó. Trong trường hợp này, khi người dùng nhấp vào phần tử btn, hàm xử lý được cung cấp sẽ được gọi.
//function (){...}: Đây là hàm xử lý sự kiện được cung cấp. Nó là một hàm không tên (còn được gọi là hàm vô danh hoặc hàm ẩn danh), nghĩa là nó không có tên và chỉ được sử dụng trong phạm vi của phương thức addEventListener. Bên trong hàm này, có hai câu lệnh được thực thi:
btn.addEventListene('click', function (){
    //Câu lệnh này in ra giá trị của thuộc tính title của phần tử được nhấp vào (trong trường hợp này là phần tử có id là btn-who). Phương thức getAttribute() được sử dụng để lấy giá trị của thuộc tính title.
    console.log(this.getAttribute('title'))
    //Câu lệnh này đặt lại giá trị của thuộc tính title của phần tử được nhấp vào thành "từ viết tắt của tổ chức y tế thế giới". Phương thức setAttribute() được sử dụng để thiết lập giá trị của thuộc tính title.
    this.setAttribute('title', 'từ viết tắt của tổ chứ y tế thế giới')}
    )
//vd 2 về việc sử dụng getAttribute: đối với biến btn ở trên, khi xảy ra sự kiện click, hàm GetNote sẽ đc gọi, nó lấy attribute tên data-note và in giá trị của data-note ra cửa sổ console
btn.onclick = GetNote
function GetNote(){
    var note = this.getAttribute('data-note')
    console.log(note)
}

//vd 3: khi người dùng nhấp vào hình ảnh, sự kiện click sẽ được kích hoạt và hàm ChangeImage sẽ được gọi. Hàm này sẽ thay đổi giá trị của thuộc tính src của hình ảnh đó thành "/images/2.png", dẫn đến việc thay đổi hình ảnh hiển thị trên trang.
//lưu ý ở hàm này chúng ta k cần gọi đến getAttribute mà có thể set luôn giá trị mới cho attribute src của thẻ img
var image = document.querySelector('img')
image.onclick = 
function ChangeImage(){
    this.setAttribute('src','/images/2.png')
}