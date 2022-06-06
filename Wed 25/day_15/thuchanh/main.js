// Danh sách các sản phẩm có trong giỏ hàng
let products = [
  {
    name: "Iphone 13 Pro Max", // Tên sản phẩm
    price: 30000000, // Giá mỗi sản phẩm
    brand: "Apple", // Thương hiệu
    count: 2, // Số lượng sản phẩm trong giỏ hàng
  },
  {
    name: "Samsung Galaxy Z Fold3",
    price: 41000000,
    brand: "Samsung",
    count: 1,
  },
  {
    name: "IPhone 11",
    price: 15500000,
    brand: "Apple",
    count: 1,
  },
  {
    name: "OPPO Find X3 Pro",
    price: 19500000,
    brand: "OPPO",
    count: 3,
  },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
const showInfoProduct = (arr) => {
  arr.forEach((product) => {
    console.log(
      `${product.name} - ${product.price} - ${product.brand} - ${product.count}`
    );
  });
}
showInfoProduct(products);
// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
const getTotalMoney = (arr) => {
  return arr.reduce(
    (total, product) => total + product.price * product.count,
    0
  );
}
console.log(getTotalMoney(products));
// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
const findBrandProduct = (arr, brand) => {
  return arr.filter((product) => product.brand == brand);
}
console.log(findBrandProduct(products, "Apple"));
// 4. Tìm các sản phẩm có giá > 20000000
const findPriceproduct = (arr, money) => {
  return arr.filter((product) => product.price > 20000000);
}
console.log(findPriceproduct(products, 20000000));
// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
const findBrandPro = (arr, name) => {
  return arr.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );
}
console.log(findBrandPro(products, "pro"));
// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
const addProduct = (arr) => {
    arr.push({
    name: "Samsung s21 untra",
    price: 22000000,
    brand: "Samsung",
    count: 4,
  });
  return arr;
}
console.log(addProduct(products));
// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
const deleteBrand = (arr, brand) => {
  arr.forEach((ele, index) => {
    if (ele.brand == brand) {
      arr.splice(index, 1);
    }
  });
  return arr;
}
console.log(deleteBrand(products, "Samsung"));
// 8. Sắp xếp giỏ hàng theo price tăng dần
const sortPrice = (arr) => {
  return arr.sort((a, b) => {
    return a.price - b.price;
  });
}
console.log(sortPrice(products));
// 9. Sắp xếp giỏ hàng theo count giảm dần
const sortCount = (arr) => {
  return arr.sort((a, b) => {
    return b.count - a.count;
  });
}
console.log(sortCount(products));
// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
const takeRandomProduct = (arr) => {
  let randomProduct = [];
  for (let i = 0; i < 2; i++) {
    randomProduct.push(arr[Math.floor(Math.random() * (arr.length + 1))]);
  }
  return randomProduct;
}
console.log(takeRandomProduct(products));
