const inputEl = 
// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)
$("#list").after(`<input type="text" class="input"></input> `);
$("#list").after(`<button class="btn-add">Add</button>`)
$(".btn-add").click(function() {
    if(!($('input').val())) {
        alert("Vui lòng nhập thông tin");
    }
    else {
        $("#list").append(`<li>${$('input').val()}</li>`);
    }
   
    
})

// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul
$(".input").after(`<button class="btn-remove">Remove</button>`);
$(".btn-remove").click(function() {
    $("#list li").last().remove();
})
// Thêm 1 nút Hide trên đầu của danh sách ul
$("#list").before(`<button class="btn-hide">Hide</button>`)
// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide
$(".btn-hide").click(function() {
    $("#list").slideToggle();
    $(".btn-hide").html("Show");
})

