// Truy cập vào các thành phần
const productListEl = document.querySelector(".product-list");
let subTotalMoneyEl = document.getElementById("sub-total-money");
let discountMoney = document.getElementById("discount-money");
let discountInput = document.getElementById("discount-form-input");
const btnApplyEl = document.getElementById("btn-apply");
let  totalMoneyEl = document.getElementById("total-money");
// Lấy danh sách sản phẩm đang có trong giỏ hàng
let items = getDataFromLocalStorage();

// Hiển thị danh sách ra ngoài giao diện
const renderCart = arr => {
     productListEl.innerHTML = "";
     let html = "";
     arr.forEach(obj => {
        html += ` <div class="product-item d-flex border mb-4">
        <div class="image">
            <img src="${obj.image}" alt="" />
        </div>
        <div class="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
            <div>
                <div class="d-flex justify-content-between align-items-center">
                    <h2 class="text-dark fs-5 fw-normal">
                        ${obj.name} (${obj.size})
                    </h2>
                    <h2 class="text-danger fs-5 fw-normal">
                        ${formatMoney(obj.price)}
                    </h2>
                </div>
                <p class="text-black-50">
                    <span class="border d-inline-block me-3">
                        <span class="py-2 px-3 d-inline-block fw-bold bg-light" onclick="minusCount(${obj.id},'${obj.size}')">-</span>
                        <span class="py-2 px-3 d-inline-block fw-bold">${obj.count}</span>
                        <span class="py-2 px-3 d-inline-block fw-bold bg-light" onclick="plusCount(${obj.id},'${obj.size}')">+</span>
                    </span>
                </p>
            </div>
            <div>
                <button class="text-primary border-0 bg-transparent fw-light" onclick="deleteProduct(${obj.id}, '${obj.size}')">
                    <span><i class="fa-solid fa-trash-can"></i></span>
                    Xóa
                </button>
            </div>
        </div>
    </div>`
     });
     productListEl.innerHTML = html;
}
// Format tien
const formatMoney = number => {
    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}
// Xóa sản phẩm
const deleteProduct = (id, size) => {
    // Xác nhận xem có muốn xóa không
    let isConfirm = confirm("Bạn có muốn xóa không?");
    if(isConfirm) {
        // Tìm kiếm sản phẩm trùng id và size
        items = items.filter(p => p.id != id || p.size != size);
        // Lưu lại vào storage
        setDataToLocalStorage(items);
        // Cập nhật lại số lượng
        updateTotalCart();
        // hiển thị lại trên giao diện
        renderCart(items);
    }
    totalMoney();
}
// Tăng số lượng
const plusCount = (id, size) => {
    // lấy ra sản phẩm tương ứng
    let product = items.find(p => p.id == id && p.size == size);
    // Tăng số lượng
    product.count++
     // Lưu lại vào storage
     setDataToLocalStorage(items);
      // hiển thị lại trên giao diện
      renderCart(items);
      totalMoney();
}
const minusCount = (id, size) => {
    // lấy ra sản phẩm tương ứng
    let product = items.find(p => p.id == id && p.size == size);
    // Tăng số lượng
    product.count--;
    if(product.count < 1) {
        product.count = 1;
    }
     // Lưu lại vào storage
     setDataToLocalStorage(items);
      // hiển thị lại trên giao diện
      renderCart(items);
      totalMoney();
}
// Kiểm tra mã giảm giá

function checkPromotion() {
    let value = discountInput.value;
    
    if (promotionCode[value]) {
        return promotionCode[value];
    }
    return 0;
}

//Cập nhật số tiền
const totalMoney = () => {
    let discount = 0;
    let total = 0;
    // Tính tổng số tiền sản phẩm và hiển thị
    items.forEach(item => {
    total += (item.count * item.price);
})
    subTotalMoneyEl.innerText = formatMoney(total);
    
    totalMoneyEl.innerText = formatMoney(total);
    btnApplyEl.addEventListener("click", () => {
        let data = checkPromotion();
        if(data) {
            discount = (total * data) / 100;
            totalMoneyEl.innerText = formatMoney(total - discount);
            
        }
        else {
            alert("MÃ GIẢM GIÁ KHÔNG CHÍNH XÁC");
            totalMoneyEl.innerText = formatMoney(total);
            discountInput.value = "";
        }
        
        
    })
    
}
totalMoney();



renderCart(items);

