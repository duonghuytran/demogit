// Hàm fix cứng, tức k thể thay đổi được nội dung bên trong hàm
function PrintInfo(){
    console.log('Hello world')
}
// Hàm có thể truyền đối số linh hoạt. 
// Ta dùng từ khóa debugger ở trước dòng lệnh cần debug, 
// lúc này lệnh sẽ dừng lại ngay chữ debugger, bấm F10 để tiếp tục debug. 
// Tuy nhiên để đi sâu hơn vào để xem cách hoạt động của hàm đó sau khi 
// được truyền đối số, ta dùng F11 để xem dòng lệnh chạy và hiển thị các 
// giá trị tương ứng trong cửa sổ Sources của DevTools, xem ví dụ về tính 
// hình chữ nhật bên dưới
PrintInfo();
// debugger
function PrintInfo1(hihi){
    console.log(hihi);
}
PrintInfo1('Xin chào nha')
// Hàm có kết quả trả về, vd hàm tính diện tích hình chữ nhật, khi người dùng gọi hàm TinhSChuNhat và truyền đối số lần lượt là 12 và 5 vào thì kq trả về sẽ là 60
function TinhSChuNhat(cd, cr){
    var kq = cd * cr;
    return kq;
}
var result = TinhSChuNhat(12,5);
function Display(){
    //Trong: var cd = document.getElementById('txt-cd').value
//   document chính là chỉ đến file html.html và lấy giá trị phần tử có id = txt-cd. Tuy nhiên cần phải ép kiểu nó bằng hàm Number nếu k giá trị lấy về sẽ chỉ là dạng chuỗi
    var cd = Number(document.getElementById('txt-cd').value);
    // Dòng lệnh ở dưới Tương tự như đối với txt-cd
    var cr = Number(document.getElementById('txt-cr').value);
    
    var result = TinhSChuNhat(cd,cr);
    //Đoạn code bên dưới: .innetHTML nghĩa là Truy cập đến nội dung có id là txt-dt trong document, trong trường hợp hiện tại là thẻ span, nội dung bên trong thẻ span sẽ được gán cho biến result
    document.getElementById('txt-dt').innerHTML = result;

}