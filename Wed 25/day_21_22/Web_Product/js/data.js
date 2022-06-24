// Danh sách sản phẩm 
let products = [
    {
        id : 1,
        name : "Áo thun siêu ngắn.",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore quia itaque harum consequuntur molestias.",
        images : [
            "https://images.unsplash.com/photo-1654885506947-fe5280d8e0ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1654886611366-72d5bc6be7c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1654863075380-5fce8cae1851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            "https://images.unsplash.com/photo-1654933922741-1d0f3e758055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ],
        rating : 4.5,
        price : 400000,
        sizes : ["M" , "L", "XL"]
    },
    {
        id : 2,
        name : "Áo dài siêu chất.",
        description : "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore quia itaque harum consequuntur molestias.",
        images : [
            "https://images.unsplash.com/photo-1655034646733-8a91a4708031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            "https://images.unsplash.com/photo-1654964150106-35d338e979cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1655032827680-1c5acdc6dea4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1655044403735-6d8a0ff883e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80",

        ],
        rating : 4.7,
        price : 500000,
        sizes : ["S" ,"M" , "L", "XL"]
    },
    {
        id : 3,
        name : "Quần rách Dior.",
        description : "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore quia itaque harum consequuntur molestias.",
        images : [
            "https://images.unsplash.com/photo-1655047273143-91261102716f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1655064099402-5f986f43420e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            "https://images.unsplash.com/photo-1654756451106-1b8e65da7f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1655139294116-0cf4b0d1d883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

        ],
        rating : 4.9,
        price : 680000,
        sizes : ["S" ,"M" , "L", "XL"]
    },
    {
        id : 4,
        name : "Quần thun nam.",
        description : "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore quia itaque harum consequuntur molestias.",
        images : [
            "https://images.unsplash.com/photo-1655139735973-d551b781e9ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1655056556210-329e6742bb7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
            "https://images.unsplash.com/photo-1654797657947-cb8fc4de5eb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1654871020349-2de959a42b12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

        ],
        rating : 4.7,
        price : 420000,
        sizes : ["S" ,"M" , "L"]
    },
    {
        id : 5,
        name : "Quần đùi siêu ngắn",
        description : "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolore quia itaque harum consequuntur molestias.",
        images : [
            "https://images.unsplash.com/photo-1649133816831-de3d91d25288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1653809462219-52fd507e819a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1654475677192-2d869348bb4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1654481862986-b7329dbdbbf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

        ],
        rating : 4.9,
        price : 450000,
        sizes : ["S" ,"M" , "L", "XL"]
    }
]


let promotionCode = {
    A: 10,
    B: 20,
    C: 30,
    D: 40,
};