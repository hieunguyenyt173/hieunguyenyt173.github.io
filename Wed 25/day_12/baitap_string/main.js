// Bài 1:Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

function checkStringExist(str1,sub) {
    
    if(str1.search(sub) == -1) {
        return false;
    }
    else {
        return true;
    }
}
console.log(checkStringExist("i love you" ,"you"));
console.log(checkStringExist("i love you" ,"hate"));

// Bài 2: Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

function shortenString(str) {
    let string = "";
    if(str.length > 8) {
        string = str.slice(0,8) + "...";
        return string;
    }
    else {
        return str;
    }
}
console.log(shortenString("Xin chào các bạn"));
console.log(shortenString("hello"));

// Bài 3:Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.


function checkString(str) {
    let string = str.toLowerCase().replace(" ","");
    let string_reverse = string.split("").reverse().join("");

    if(string == string_reverse) {
                return true;
            }
            else {
                return false;
            }
            
}
console.log(checkString("Race car"));
console.log(checkString("hello world"));
console.log(checkString("12 i21"));

// Bài 4:Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).
// Ví dụ

// 53751 -> 13557
// 14350 -> 10345
// 203950 -> 200359

function sapXep(num) {
    let number = String(num);
    let number1 = number.split("").sort();
    if(num > 0) 
    for(let i = 0; i <= number1.length - 1; i++) {
        if(number1[i] == 0) {
            continue;
            
        }
        else if(number1[0] != 0) {
            return Number(number1.join(""));
        }
        else {
            number1[0] = number1[i];
            number1[i] = "0";
            break;
        }
        
    }
    return Number(number1.join(""));
    

}

console.log(sapXep(203950));
console.log(sapXep(14350));
console.log(sapXep(53751));

// Bài 5:Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

// Ví dụ:

// “HELLO world” => “hello_world”
// “Xin Chào Các BẠN” => “xin_chào_các_bạn”

function convertToSnakeCase(str) {
    let string = str.toLowerCase();
    return string.split(" ").join("_");
    
}
console.log(convertToSnakeCase("HELLO world"));
console.log(convertToSnakeCase("Xin Chào Các BẠN"));


