// document.addEventListener('click', function() {
//     console.log('click');
//    })
   
//    document.addEventListener('mousedown', function() {
//     console.log('mousedown');
//    })
   
//    document.addEventListener('mousemove', function() {
//     console.log('mousemove');
//    })
   
//    document.addEventListener('mouseup', function() {
//     console.log('mouseup');
//    })
   

document.addEventListener("click", function(event) {
    // Xóa hình tròn có sẵn nếu có
    const boxEl = document.querySelector(".box");
    if(boxEl) {
        boxEl.parentElement.removeChild(boxEl);
    }
    // B1 tạo ra hình tròn
    let box = document.createElement("div");
    box.classList.add("box");
    // B2 Gán tọa độ
    console.log(event);
    box.style.top = `${event.offSetY - 50}px`;
    box.style.left = `${event.offSetX - 50}px`;
    // B3 gắn vào DOM
    document.body.prepend(box);
})