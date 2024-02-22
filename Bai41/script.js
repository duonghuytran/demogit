// Viết 1 hàm nhận vào 1 mã status code và trả ra các message tương ứng
// 200 => ok 401=> unauthorized, 403 => forrbident, 404 => not found, 500 => server error, nằm ngoài các mã này thì trả về undefined
// Hàm chung cho cả 2 cách
function KiemTraSo(so){
    kq = "";
    switch (so) {
        case 200:
            kq = "ok";
            break;
        case 401:
            kq = 'unauthorized';
            break;
        case 403:
            kq = 'forrbident';
            break;
        case 404:
            kq = 'not found';
            break;
        case 500:
            kq = 'server error';
            break;
        default:
            kq = 'undefined';
            break;
    }
    return kq;
}
// Cách 1: 
function HienThi(){
    // ở đây cho dù giá trị lấy từ phần tử có id "nhapso" là number thì biến laygiatriInput cũng sẽ trả về giá trị là 1 chuỗi, do đó vẫn phải dùng hàm Number để chuyển sang số nguyên trước khi đưa vào hàm KiemTraSo
    var laygiatriInput = Number(document.getElementById('nhapso').value)
    var ketqua  = KiemTraSo(laygiatriInput);
    document.getElementById('spanne').innerHTML = ketqua
}
// Cách 2:
function HienThi(){
    var laygiatriInput = Number(document.getElementById('hihi').value)
    var ketqua  = KiemTraSo(laygiatriInput);
    document.getElementById('spanne').innerHTML = ketqua
}