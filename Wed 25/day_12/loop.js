// Bai 1:
function xepHinh(row, col) {
    let content = "";
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            content += "* ";
        }
        content += "<br>";
    }
    document.write(`${content}`);
}
xepHinh(5,4)

// Bài 2:
function printRectang(row, col) {
    let content = "";
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(i == 0 || i == row - 1 || j == 0 ||  j == col- 1) {
                content += "* ";
            }
            else {
                content += "  ";
            }
            
        }
        content += "<br>";
    }
    document.write(`<pre>${content}<pre>`);
}
printRectang(5,4)
//  Bài 3:
function printX(side) {
    let content = "";
    for(let i = 0; i < side; i++) {
        for(let j = 0; j < side; j++) {
            if(i == j || i == side - j - 1) {
                content += "* ";
            }
            else {
                content += "  ";
            }
            
        }
        content += "<br>";
    }
    document.write(`<pre>${content}<pre>`);
}
printX(5);
// Bài 4:
function printXXX(side) {
    let content = "";
    for(let i = 0; i < side; i++) {
        for(let j = 0; j < side; j++) {
            if(i == 0 || j == 0 || j == i + 1) {
                content += "* ";
            }
            // else {
            //     content += "  ";
            // }
            
        }
        content += "<br>";
    }
    document.write(`<pre>${content}<pre>`);
}
printXXX(4);