let money = 10000;
switch (money) {
  case 20000:
  case 15000:
  case 12000: {
    console.log("Cà phê sữa");
    break;
  }
  case 10000: {
    console.log("Cafe đá");
    break;
  }
  case 8000: {
    console.log("Sting dâu");
    break;
  }
  case 2000: {
    console.log("Trà đá");
    break;
  }
  default: {
    console.log("Không có đồ uống phù hợp");
  }
}

// Bài tâp:
let day = 2;
switch (day) {
  case 0: {
    console.log("Chủ nhật");
    break;
  }
  case 1: {
    console.log("Thứ 2");
    break;
  }
  case 2: {
    console.log("Thứ 3");
    break;
  }
  case 3: {
    console.log("Thứ 4");
    break;
  }
  case 4: {
    console.log("Thứ 5");
    break;
  }
  case 5: {
    console.log("Thứ 6");
    break;
  }
  case 6: {
    console.log("Thứ 7");
    break;
  }
  default : {
      console.log("Chỉ nhập từ 0 đến 6")
  }
}
//  Bài 2:
let month = 10;
switch (month) {
  case 1:
  case 2:
  case 3: {
    console.log("Mùa xuân");
    break;
  }
  case 4:
  case 5:
  case 6: {
    console.log("Mùa hạ");
    break;
  }
  case 7:
  case 8:
  case 9: {
    console.log("Mùa thu");
    break;
  }
  case 10:
  case 11:
  case 12: {
    console.log("Mùa đông");
    break;
  }
  default : {
      console.log("Chỉ nhập từ 1 đến 12")
  }
}
