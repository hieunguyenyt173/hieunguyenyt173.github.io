$("#heading").html("Xin chào các bạn");
// Tahy đổi nội dung

//Thay đổi css
$("#heading").css("color", "red");
$("#heading").css("background-color", "black");

// Lắng nghe sự kiện
$("#heading").click(function() {
        alert("Click vào thẻ h1");

})

// Sử dụng vòng lặp
$("p").each(function(index, element){
    $(element).html(`The para ${index + 1} đã được thay đổi nội dung`);
    $(element).css("color","blue");
}
)

//Truy cập vào 1 thẻ thoogn qua chỉ số
$("p").eq(1).html("Thẻ para 2 này được thay đổi nội dung");
$("p").first().css("color","pink");
$("p").last().css("color","green");

/// Thêm 
$("p").last().after("<button>Click me</button>");

// Xóa
$(".box ul").children().first().remove();
 // Thay thế

 $("p").first().replaceWith(`<input type="text" placeholder="Nhập nội dung"></input>`);


// Coppy 
$("#heading").clone().appendTo("body");

// Ẩn hiện 
$("ul").last().css( {
    "background-color" : "black",
    "color" : "white"
})

$("button").click(function() {
    $("ul").last().slideToggle();
})