var products =
  [
    {
      Id: 1,
      ProductName: 'Asic',
      Price: 1000
    },
    {
      Id: 2,
      ProductName: 'Adidas',
      Price: 2000
    },
    {
      Id: 3,
      ProductName: 'New ballance',
      Price: 1000
    },
    {
      Id: 4,
      ProductName: 'Nike',
      Price: 3000
    },
    {
      Id: 5,
      ProductName: 'Head',
      Price: 2000
    },
    {
      Id: 6,
      ProductName: 'Babolat',
      Price: 5000
    }
  ]

//Tạo ra 1 mảng mới từ mảng product ở trên (trong tài liệu muốn xem thì mở file ra) nh thêm 1 thuộc tính Ngày sản xuất
//vd: ta dùng hàm map để thêm thuộc tính Ngày_sản_xuất cho tất cả item trong mảng trên, chúng ta có thể thêm nhiều thuộc tính khác nếu muốn 
//ngoài việc nhận item làm đại diện cho phần tử trong mảng, hàm map có thể nhận thêm 1 đối số khác với vai trò là index của phần tử trong mảng

var mapResult = products.map(function(item, chi_muc){
  return{
    Index: chi_muc, //đại diện cho index
    Mã: item.Id,
    Tên_sản_phẩm: item.ProductName,
    Giá: item.Price,
    Ngày_sản_xuất: 2020, //thuộc tính thêm mới
    Info: `Tên sản phẩm: ${item.ProductName}, Giá sản phẩm: ${item.Price}` //thuộc tính thêm mới
  }
})

//hiển thị thông tin bằng hàm map: hàm map sẽ trả về một mảng các chuỗi HTML, để hiển thị nó trong thẻ html, cần chuyển thành dạng chuỗi bằng hàm join()
var html = products.map(function(item){
  return `<div>
        <h3>Tên sản phẩm: ${item.ProductName}</h3>
        <p>Giá sản phẩm: ${item.Price}</p>
        <p>Mã số sản phẩm:${item.Id}</p>
    </div>`
})
document.getElementById('content').innerHTML = html.join(" ")