// Bài 1:
function testNumber(a) {
    if(a % 3 == 0 && a % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if(a % 3 == 0) {
        console.log("Fizz");
    }
    else if(a % 5 == 0) {
        console.log("Buzz");
    }
}
testNumber(30);
testNumber(27);
testNumber(20);
testNumber(23);
testNumber(12);

// Bài 2:
function giai_pt_bac1(a, b) {
    if(a == 0 && b == 0) {
        console.log("Phương trình có vô số nghiệm");
    }
    else if(a != 0 && b == 0) {
        console.log("Phương trình có nghiệm x = 0");
    }
    else if(a == 0 && b != 0) {
        console.log("Phương trình vô nghiệm");
    }
    else {
        console.log("Phương trình có ngiệm x =" + -b/a);
    }
}
giai_pt_bac1(3,5);
giai_pt_bac1(1,3);
giai_pt_bac1(0,5)


//Bài 3:
function giai_pt_bac2(a, b, c) {
    if(a == 0) { 
        if(b == 0) {
            if(c == 0) {
                console.log("Phương trình có vô số nghiệm");
            }
            else {
                console.log("Phương trình vô nghiệm");
            }

        }
        else {
            console.log("Phương trình có nghiệm x = " + -c/b);
        }

    }
    else {
         let delta = b * b - 4 * a * c;
        if(delta < 0) {
            console.log("Phương trình vô nghiệm");
        }
        else if(delta == 0) {
            console.log("Phương trình có nghiệm kép x = " + -b/(2 * a));
        }
        else {
            console.log("Phương trình có 2 nghiệm x1 = " + (-b + Math.sqrt(delta)) / (2 * a) + " và x2 = " + (-b - Math.sqrt(delta)) / (2 * a));
        }
    }
}
giai_pt_bac2(4, -2, -6);
giai_pt_bac2(2,-7,3);
giai_pt_bac2(0,-2,3);
giai_pt_bac2(0,0,3);
giai_pt_bac2(3,2,5);

// Bài 4:
function kiemTraNamNhuan(year) {
    if((year % 4 == 0 && year % 100 !=0) || year % 400 == 0) {
        console.log("Là năm nhuận");
    }
    else {
        console.log("Không là năm nhuận");
    }
}
kiemTraNamNhuan(2018);
kiemTraNamNhuan(2032);
kiemTraNamNhuan(2000);


// Bài 5:
function testBmi(weight, height) {
    let bmi = weight/(height * height);
   
    if(bmi >= 40) {
        console.log("Béo phì độ 3");
        return;
    }
    else if(bmi >= 35 && bmi <= 39.9) {
        console.log("Béo phì độ 2");
        
    }
    
    else if(bmi >= 30 && bmi <= 34.9) {
        console.log("Béo phì độ 1");
        
    }
    else if(bmi >= 25 && bmi <= 29.9) {
        console.log("Tăng cân");
        
    }
    else if(bmi >= 18 && bmi <= 24.9) {
        console.log("Bình thường");
        
    }
    else {
        console.log("Gầy");
        
    }
}
testBmi(60, 1.74);
testBmi(75, 1.68);
testBmi(90, 1.68);

// Bài 6:
function change(temperature) {
    let f = (temperature * 1.8) + 32;
    return f;
}
console.log(change(30));
console.log(change(25.5));



