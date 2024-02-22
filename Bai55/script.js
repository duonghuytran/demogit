//Thay vì tạo thẻ style trong thẻ head cho các thẻ trong thẻ body, chúng ta có thể sử dụng JavaScript để làm việc đó bằng cách sử dụng code bên dưới, bấm F12 để xem, kq trả về là 1 CSSStyleDeclaration, trong này chứa rất nhiều thuộc tính css, lựa chọn để set cho thẻ html
//cần lưu ý tên thuộc tính css trong thẻ style trong thẻ head file html sẽ có cách viết khác so với tên thuộc tính trong js, vd: khác nhau dấu _,...nên để chắc chắn, chúng ta vào F12 copy về cho chính xác
var element = document.querySelector('#div-1')
var css_for_html = element.style
console.log(css_for_html)
//Cách 1: gọi đến tên tên biến css_for_html và gán các thuộc tính cho nó, nh nếu chúng ta cần gán nhiều thuộc tính thì cách này sẽ làm việc viết code trở nên dài dòng
css_for_html.width = '200px'
css_for_html.height = '200px'
css_for_html.backgroundColor = 'yellow'

//Cách 2: dùng phương thức assign với Object, chỉ định Object ở đối số đầu tiên của phương thức, sau đó là các thuộc tính
Object.assign(css_for_html,
    {
        width: '200px',
        height: '200px',
        backgroundColor: 'yellow'
    })