const users = [
  {
    username: "bob",
    password: "123",
  },
  {
    username: "alice",
    password: "456",
  },
  {
    username: "hieunguyen",
    password: "321",
  },
];

// Khi người dùng bấm vào nút “Login” thì thực hiện các chức năng sau:

// Kiểm tra xem có trường nào được để trống hay không, nếu có thì thông báo (sử dụng alert)
// Nếu người dùng đã điền đầy đủ thông tin thì kiểm tra với thông tin đó, có trùng với user nào không?
// Nếu có thông báo “Đăng nhập thành công”
// Nếu không thông báo “Tài khoản hoặc mật khẩu không chính xác”
const login = document.querySelector("#btn-login");
const user = document.getElementById("username");
const pass = document.getElementById("password");
// Truy cập vào button và các ô input
login.addEventListener("click", function () {
  let username = user.value;
  let password = pass.value;
  //Lấy dữ liệu các ô input
  if (username == "" && password == "") {
    if (username == "" && password == "") {
      alert("Vui lòng nhập dầy đủ thông tin");
    } else if (username = "") {
      alert("Vui lòng nhập thêm tên"); // Kiểm tra xem nhập đã nhập đầy đủ thông tin chưa
    } else if (password == "") {
      alert("Vui lòng nhập thêm mật khẩu");
    }
  } else {
    //Kiểm tra thông tin đăng nhập đúng hay không
    const isLogin = users.some(
      (ele) => ele.username == username && ele.password == password
    );
    if (isLogin) {
      alert("Đăng nhập thành công");
    } else {
      alert("Tài khoản hoặc mật khẩu không chính xác");
    }
  }
});
