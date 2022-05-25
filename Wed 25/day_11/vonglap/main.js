// Bài 1:
function repeatString(a) {
  let str = "";
  for (let i = 1; i <= 10; i++) {
    str = str + `${a}`;
  }
  console.log(str);
}
repeatString("a");
repeatString("1");
repeatString("Hiếu");

// Bài 2:
function repeatString1(b) {
  let str1 = b;
  for (let i = 1; i < 10; i++) {
    str1 += `-${b}`;
  }
  console.log(str1);
}
repeatString1("a");
repeatString1("5");
repeatString1("Hiếu");

// Bài 3:
function repeatString2(c, n) {
  let str2 = c;
  if (n > 1) {
    for (let i = 1; i < n; i++) {
      str2 += `-${c}`;
    }
    console.log(str2);
  }
}
repeatString2("a", 5);
repeatString2("Hiếu", 10);

// Bài 4:
let sum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 5 == 0) {
    sum += i;
  }
}
console.log(sum);

// Bài 5:
function tinhTheTich(r) {
  let v = (4 * Math.PI * Math.pow(r, 3)) / 3;
  console.log(v);
}
tinhTheTich(10);
tinhTheTich(25);

// Bài 6:
function sum1(a, b) {
  let total = 0;
  if (a < b) {
    for (let i = a + 1; i < b; i++) {
      total += i;
    }
  } else {
    for (let i = b + 1; i < a; i++) total += i;
  }
  console.log(total);
}
sum1(3, 8);
sum1(8, 3);

// Bài 7:
function checkNumber(n) {
  if (n < 2) {
    console.log(false);
  }
  let count = 0;
  for (let i = 2; i <= n - 1; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  if (count == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkNumber(15);
checkNumber(17);
checkNumber(19);
checkNumber(25);

// Bài 8:
function sumNumber(n) {
    sum = 0;
    for(let j = 2; j <= n; j++){
      let count = 0;
      for (let i = 2; i <= j - 1; i++) {
        if (j % i == 0) {
          count++;
        }
      }
      if (count == 0) {
        sum += j;
      } 
    }
    console.log(sum);
}
sumNumber(11);
sumNumber(19);

// Bài 9:
function sumNumber1(f) {
  let sum = 0;
  if (f > 0) {
    for (let i = 1; i <= f; i++) {
      if (f % i == 0) {
        sum += i;
      }
    }
    console.log(sum);
  }
}
sumNumber1(15);
sumNumber1(17);
sumNumber1(13);
