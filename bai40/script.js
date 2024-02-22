//1. Viết hàm nhận giá trị điểm của học sinh, nếu điểm <5 thì trả ra "kém", =5 trả ra "TB", >5 trả ra "Khá"
function CheckScore(score){
    var result = "";
    if (score <5) {
    result = "Kém";
    }
    else if (score === 5){
        result = "Trung bình";
    }
    else {
        result="khá";
    }
    return result
}
function Display1(){
    var diemnhapvao = Number(document.getElementById('txt-score').value)
    var hihi = CheckScore(diemnhapvao)
    document.getElementById('txt-result1').innerHTML = hihi
}

//2. Viết hàm kiểm tra 1 năm có phải năm nhuận k? nếu là năm nhuận thì trả ra true, k thì ra false
function TinhNamNhuan(nam){
    ketqua = "";
    if (nam %100=== 0 && nam%400===0 || nam%4===0 && nam%100!=0) {
        ketqua = nam + " " + "là năm nhuận";
    }
    else{
        ketqua = nam + " " + "kp là năm nhuận";
    }
    return ketqua;
}
// để kiểm tra nhanh hàm, ta có thể dùng lệnh:console.log(TinhNamNhuan(2023))
//  thay vì phải viết html và hàm HienThi hoặc dùng debugger trước lệnh: var check TinhNamNhuan(2023); với check là biến lưu trữ giá trị của kết quả trả về sau khi chạy hàm TinhNamNhuan., dùng F10 để chạy debug nhanh, F11 để chạy từng dòng
function HienThi(){
    var laynamtuInput = Number(document.getElementById('nhapnam').value)
    var ketqua = TinhNamNhuan(laynamtuInput);
    document.getElementById('spanne').innerHTML = ketqua
}
//3. Viết hàm kiểm tra tuổi nếu <18 tuổi thì trả ra "k đủ điều kiện kết hôn", nếu >= 18 trả ra "đủ đk kết hôn"
// Cách 1:
function KiemTraTuoi(tuoi){
    kq = "";
    if (tuoi>=18) {
        kq = "Đủ tuổi kết hôn"
    }
    else{
        kq = "Không đủ tuổi kết hôn"
    }
    return kq;
}
function HienThi(){
    var laygiatriInput = Number(document.getElementById('nhaptuoi').value)
    var ketqua  = KiemTraTuoi(laygiatriInput);
    document.getElementById('spanne').innerHTML = ketqua
}
// Cách 2: Dùng toán tử ba ngôi
function KiemTraTuoi(tuoi){
    return kq = tuoi<18 ? "Không đủ điều kiện kết hôn" : "Đủ điều kiện kết hôn";
}
function HienThi(){
    var laygiatriInput = Number(document.getElementById('nhaptuoi').value)
    var ketqua  = KiemTraTuoi(laygiatriInput);
    document.getElementById('spanne').innerHTML = ketqua
}