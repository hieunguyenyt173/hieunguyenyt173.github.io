const listUserEl = document.querySelector("tbody")
function getUserApi() {
    return axios.get("https://api.github.com/users");
}

let listUsers = [];
const getUsers = async function() {
    try {
        let res = await getUserApi();
        console.log(res);
        listUsers = res.data;
        // Hiển thị sanh sách user
        render(listUsers)
    } catch (error) {
        console.log(error);
    }
}
const render = arr => {
    $('.pagination-container').pagination({
        dataSource: arr,
        pageSize: 5,
        callback: function(data, pagination) {
            console.log(pagination);
            renderUser(data, pagination);
        }
    })
}
const renderUser= function(arr, pagination) {
    listUserEl.innerHTML= "";
    // Sử dụng vòng lặp
    let html = "";
    arr.forEach((user,index) => {
        const {id, login, avatar_url, html_url, repos_url} = user;
        const { pageNumber, pageSize } = pagination;
        html += ` <tr>
        <td>${(pageNumber - 1) * pageSize + (index + 1)}</td>
        <td>
            <img src="${avatar_url}" alt="mojombo">
        </td>
        <td>${login}</td>
        <td>${html_url}</td>
        <td>${repos_url}</td>
    </tr>
    `
    })
    listUserEl.innerHTML= html;
}
getUsers();



// Chức năng tìm kiếm
const searchEl = document.querySelector("input");
const btnSearchEl = document.querySelector(".btn");

btnSearchEl.addEventListener("click", function() {
    searchUser();
})

btnSearchEl.addEventListener("keydown", (e)=> {
    if(e.keyCode == 13) {
        searchUser();
    }
})
function searchUser() {
    let value = searchEl.value;
    if(value == "") {
        alert("Không được bỏ trống");
        return;
    }
    
    let filterUser = listUsers.filter(p => p.login.toLowerCase().includes(value.toLowerCase()))
    render(filterUser);
}