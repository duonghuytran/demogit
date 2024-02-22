// DẤU NHÁY TRONG CHUỖI: Chuỗi được đặt trong dấu nháy đơn hoặc nháy kép. Có thể đặt 1 chuỗi có dấu nháy đơn trong dấu nháy kép và ngược lại, có thể cùng lúc có 2 loại dấu nháy trong cùng 1 chuỗi (Cách 1), lúc này, dấu nháy bên trong sẽ được hiển thị cùng nội dung chuỗi như bên dưới. Để hiển thị cùng lúc 2 dấu nháy cùng loại ta phải làm như cách 2. Vậy để hiển thị dấu \ ta phải làm cách 3
// Cách 1: var content = "Cùng học 'lập trình' Front-end"; kq: Cùng học 'lập trình' Front-end
// Cách 2: var content = "Cùng học \'lập trình\' Front-end"; kq: Cùng học 'lập trình' Front-end
// Cách 3: var content = "Cùng \\ học \'lập trình\' Front-end"; kq: Cùng \ học 'lập trình' Front-end

// BIẾN ĐỘNG TRONG CHUỖI: thêm biến động vào để tùy biến, dùng dấu `` đặt thay cho dấu ''
var fullName = 'trần văn a';
var age = 30;
var address = 'Cầu Giấy';
console.log(`tên: ${fullName} , tuổi: ${age}, địa chỉ: ${address}`);
// length: XÁC ĐỊNH ĐỘ DÀI CHUỖI: mỗi 1 ký tự đc tính là 1, bao gồm cả khoảng trắng
var content1 = 'Học js cơ js bản';
console.log('Chiều dài chuỗi content1: ', content1.length);

// XÁC ĐỊNH VỊ TRỊ CHUỖI CON TRONG CHUỖI LỚN: giả sử trong 1 chuỗi có 2 chuỗi con có cùng tên, nếu dùng hàm indexOf('tên chuỗi con') để tìm thì nó sẽ chỉ hiển thị vị trí xuất hiện đầu tiên của chuỗi đó (Cách 1), để xác định vị trí khác của chuỗi đó ta truyền thêm 1 đối số vào sau chỉ mục của vị trí đầu của chuỗi con đó (Cách 2). Ví dụ ở dưới ta có 2 chuỗi js, js đầu tiên có index là 4, ta có thể truyền 5 vào để tìm xem sau index 4 đó có chuỗi js nào tính từ 5 k. Nếu muốn tìm vị trí cuối cùng mà chuỗi đó xuất hiện ta dùng lastIndexOf (Cách 3). Nếu k tìm thấy chuỗi con trong chuỗi lớn, kq trả về là -1
var content1 = 'Học js cơ js bản';
// Cách 1: console.log(content1.indexOf('js'));
// Cách 2: console.log(content1.indexOf('js',5));
// Cách 3: console.log(content1.lastIndexOf('js'));



// CẮT CHUỖI: dùng hàm index để cắt ra từ chuỗi từ index 4 đến index 5, nếu muốn cắt từ index 4 đến hết thì k cần truyền index 6 vào. Để copy chuỗi đó thì truyền vào số 0. 
var content1 = 'Học js cơ js bản';
console.log(content1.slice(4,6));
console.log(content1.slice(4));
console.log(content1.slice(0));

// HÀM REPLACE: dùng để thay thể js (xuất hiện lần đầu tiên trong chuỗi) bằng java (Cách 1), để thay thế tất cả các js trong chuỗi thành java dùng Cách 2
// Cách 1: console.log(content1.replace('js','java')); 
// Cách 2: console.log(content1.replace(/js/g,'java'));

// CHUYỂN KÝ TỰ THÀNH VIẾT HOA (Cách 1), VIẾT THƯỜNG (Cách 2):
console.log(content1.toUpperCase());
console.log(content1.toLowerCase());

// HÀM trim: xóa các khoảng trắng ở đầu và cuối chuỗi
var hihi = '    hello các bạn nhé   ';
console.log(hihi);
console.log(hihi.trim());
 
// HÀM split: chuyển chuỗi thành mảng (Cách 1), và mảng đó chỉ chứa duy nhất 1 phần tử,kq: ['hello các bạn nhé'], nếu muốn tách các phần tử trong mảng thành các phần tử nhỏ hơn (bao gồm tất cả khoảng trắng) thì dùng Cách 2, kq: ['h', 'e', 'l', 'l', 'o', ' ', 'c', 'á', 'c', ' ', 'b', 'ạ', 'n', ' ', 'n', 'h', 'é']. TÁch các phần tử cách nhau bởi dấu "cách" thì dùng Cách 3 ('dấu cách'), kq: ['hello', 'các', 'bạn', 'nhé']. Vậy tách dựa vào tiêu chí nào thì thêm tiêu chí đó vào trong dấu '', vd dấu -,+,=,...
var hihi1 = 'hello các bạn nhé';
console.log(hihi1.split());
console.log(hihi1.split(''));
console.log(hihi1.split(' '));











