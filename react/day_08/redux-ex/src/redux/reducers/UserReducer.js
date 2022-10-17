import { Action } from "@remix-run/router"


const initUser = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        email: "nguyenvanA@gamil.com",
        phone: 322132132,
        address: "Hà Nội"
    },
    {
        id: 2,
        name: "Hà Văn B",
        email: "hab@gamil.com",
        phone: 3213654454,
        address: "Hải Phòng"
    },
    {
        id: 3,
        name: "Nguyễn Văn C",
        email: "nguyenvanC@gamil.com",
        phone: 2445765767867,
        address: "Hồ Chí Minh"
    },
    {
        id: 4,
        name: "Nguyễn Văn D",
        email: "nguyenvanD@gamil.com",
        phone: 8798798797,
        address: "Hà Nội"
    }
]

const userReducer = (state = initUser, action) => {
    switch (action.type) {
        case "ADD_REDUCER" : {
            return state
        }
        case "REMOVE_USER" : {
            let newUser = state.filter(user => user.id !== action.payload)
             return newUser
        }
        case "FILTER" : {
            return state
        }
        default : {
            return state
        }
        
    }
}

export default userReducer