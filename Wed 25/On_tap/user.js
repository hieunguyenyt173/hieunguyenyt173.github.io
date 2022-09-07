// Đóng gói 
// Kế thừa
// Trừu tượng
// Đa hình

class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Xin chào ${this.name}`)
    }
}

export default User;