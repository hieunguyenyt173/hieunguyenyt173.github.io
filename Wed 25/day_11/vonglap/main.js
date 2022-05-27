// Bài 1:
function repeatString(a) {
  let str = "";
  for (let i = 1; i <= 10; i++) {
    str = str + `${a}`;
  }
  return str;
}
console.log(repeatString("a"));
console.log(repeatString("1"));


// Bài 2:
function repeatString1(b) {
  let str1 = b;
  for (let i = 1; i < 10; i++) {
    str1 += `-${b}`;
  }
  return str1;
}
console.log(repeatString1("a"));
console.log(repeatString1("5"));
console.log(repeatString1("Hiếu"));

// Bài 3:
function repeatString2(c, n) {
  let str2 = c;
  if (n > 1) {
    for (let i = 1; i < n; i++) {
      str2 += `-${c}`;
    }
    return str2;
  }
}
console.log(repeatString2("a", 5));
console.log(repeatString2("Hiếu", 10));

// Bài 4:
function tinhTong(){
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
     sum += i;
    }
  }
    return sum;
}

console.log(tinhTong());

// Bài 5:
function tinhTheTich(r) {
  let v = (4 * Math.PI * Math.pow(r, 3)) / 3;
  return v;
}
console.log(tinhTheTich(10));
console.log(tinhTheTich(25));

// Bài 6:
function sum1(a, b) {
  let total = 0;
  if (a < b) {
    for (let i = a + 1; i < b; i++) {
      total += i;
    }
  } else {
    for (let i = b + 1; i < a; i++) {
      total += i;
    }
    
  }
  return total;
}
console.log(sum1(3, 8));
console.log(sum1(8, 3));
//   function sum(num1,num2) {
//   let min = Math.min(num1,num2);
//   let max = Math.max(num1,num2);
//   total = 0;
//   for(let i = min + 1;i < max; i++) {
//   total += i;
// }
//   return total;
// }

// Bài 7:
function checkNumber(n) {
  if (n < 2) {
    return false;
  }
  let count = 0;
  for (let i = 2; i <= n - 1; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  if (count == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkNumber(15));
console.log(checkNumber(17));
console.log(checkNumber(21));


// Bài 8:
function sumNumber(n) {
    let sum = 0;
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
    return sum;
}
console.log(sumNumber(11));
console.log(sumNumber(19));

// Bài 9:
function sumNumber1(f) {
  let sum = 0;
  if (f > 0) {
    for (let i = 1; i <= f; i++) {
      if (f % i == 0) {
        sum += i;
      }
    }
    return sum;
  }
}
console.log(sumNumber1(15));
console.log(sumNumber1(17));

