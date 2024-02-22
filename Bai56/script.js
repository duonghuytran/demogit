//Classlist là 1 thuộc tính của phần tử HTML, chúng ta có thể dùng js để truy cập và làm việc với attribute class của phần tử HTML thông qua thuộc tinh này
//biến div đại diện cho thẻ button có id là div-1, khi bấm vào, F12 sẽ thấy kq trả về là 1 mảng chứa các class của thẻ này, tức là (các) attribute class đc khai báo trong thẻ button

//phương thức add: sử dụng phương thức add của classList để thêm 1 class mới cho thẻ button ở trên,, đối số nhận vào sẽ là tên của class mà ta muốn add vào
//phương thức remove: gược lại hàm add là hàm remove, xóa bỏ 1 class trong thẻ button
//phương thức toggle: sẽ kiểm tra xem class para đã có trong thẻ button chưa, nếu chưa có thỉ thêm vào, nếu có rồi thì xóa đi, cứ lặp lại mỗi lần phát sinh sự kiện click vào button
//phương thức contains: kiểm tra xem 1 class đã có trong thẻ button hay chưa, kq trả về là true hoặc false
function wwClassList(){
    var div = document.querySelector('#div-1')
    console.log(div.classList)
    // div.classList.add('para')
    div.classList.toggle('para')
    div.classList.remove('cover1')
    console.log(div.classList.contains('cover'))
}