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

//hàm every nhận vào đối số là 1 hàm, hàm đó sẽ có 1 biến tạm, nhận vào đối số là các phần tử trong mảng, mỗi lần lặp qua phần tử nó sẽ gán cho biến item
var everyResult = products.every(function (item) {
  return item.Price > 500; //item trong 1 mảng là 1 object, do đó item.Price chính là truy cập vào thuộc tính Price, ctrinh sẽ duyệt qua toàn bộ item, nếu item nào có Price "K LỚN HƠN 500" nó sẽ return false
})
console.log('kết quả của everyResult: ', everyResult)


//hàm some: chỉ cần có 1 trong các item thỏa mãn điều kiện thì trả về true, nếu k có item nào thỏa đk thì trả về false
var someResult = products.some(function (item) {
  return item.Price > 5000;
})
console.log('kết quả của someResult: ', someResult)

//hàm find: trả về kq của 1 item (bao gồm cả các thuộc tính) nào đó trong mảng thỏa mãn 1 đk nào đó cho trc
//vd: bên dưới sẽ trả về item đầu tiên có thuộc tính Price === 2000
var findResult = products.find(function(item){
  return item.Price ===2000
}) //tuy nhiên pt này chỉ trả về phần tử đầu tiên thỏa đk, các pt khác thỏa đk sẽ k trả về
console.log('kết quả của findResult: ', findResult)

//hàm filter: trả về kq 1 mảng chứa các item (bao gồm cả các thuộc tính) nào đó trong mảng thỏa mãn 1 đk nào đó cho trc
//vd bên dưới sẽ trả về 1 mảng chứa các item có thuộc tính Price === 2000
var filterResult = products.filter(function(item){
  return item.Price ===2000
})
console.log('kết quả của filter: ', filterResult)

//hàm forEach: duyệt qua các item và in chúng lên trình duyệt bằng chuỗi động
var html = '';
products.forEach(function(item){
html += 
`<div>
<h3>Tên sản phẩm: ${item.ProductName}</h3>
<p>Giá sản phẩm: ${item.Price}</p>
<p>Mã số sản phẩm: ${item.Id}</p>
</div>`
})
document.getElementById('content').innerHTML = html

