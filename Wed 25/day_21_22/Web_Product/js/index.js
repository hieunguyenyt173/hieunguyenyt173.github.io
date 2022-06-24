// Truy cập vào các thành phần
const productListEl = document.querySelector(".product-list");
const searchFormInput = document.querySelector(".seach-form-input");
const btnSearch = document.querySelector(".seach-form-button");

// Tìm kiếm sản phẩm 

// Tìm kiếm sản phẩm với ô input
searchFormInput.addEventListener("keydown", (e) => {
    if(e.keyCode == 13) {
        searchProduct();
    }
})
// Tìm kiếm sản phẩm với nút
btnSearch.addEventListener("click", () => {
    searchProduct();
})
const searchProduct = () => {
    let value = searchFormInput.value;
    if(value == "") {
        alert("Từ khóa không được để trống");
        return;
    }
    let productFilter = products.filter(p => p.name.toLowerCase().includes(value.toLowerCase()))
    renderProduct(productFilter);
}
// Hiển thị sản phẩm 
const renderProduct = arr => {
    productListEl.innerHTML = "";

    // Kiểm tra xem có sản phẩm không
    if(arr.length == 0) {
        productListEl.innerHTML = "Shop nghỉ bán hàng";
        return;
    }
    // Hiển thị ds sản phẩm nếu có
    let html = "";
    arr.forEach(p => {
        html += `
        <div class="col-md-3">
                    <a href="./detail.html?id=${p.id}">
                        <div class="product-item shadow-sm rounded mb-4">
                            <div class="product-item-image">
                                <img src="${p.images[0]}"
                                    alt="${p.name}">
                            </div>
                            <div class="product-item-info p-3">
                                <h2 class="fs-5 mb-4 text-dark">${p.name}</h2>
                                <div class="d-flex justify-content-between align-items-center fw-light text-black-50">
                                    <p class="type fs-5 text-danger fw-normal">${formatMoney(p.price)}</p>
                                    <p class="rating">
                                        ${p.rating} <span class="text-warning"><i class="fa-solid fa-star"></i></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        `
    })
    productListEl.innerHTML = html;
}
// Format tiền
const formatMoney = number =>{
    return  number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}
renderProduct(products)