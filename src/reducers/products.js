var initialState  = [
    {
        id: 1,
        name: 'Iphone 7 plus',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-silver-select-2016?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795425349',
        rating: 3,
        description: 'Sản phẩm do apple sản xuất',
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: 'Samsung galaxy S7',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2016/2/23/635918156584359185_s7-g1.jpg',
        rating: 4,
        description: 'Sản phẩm do samsung sản xuất',
        price: 600,
        inventory: 15
    },
    {
        id: 3,
        name: 'Xiaomi note 4S',
        image: 'https://cdn.tgdd.vn/Products/Images/42/84905/xiaomi-redmi-note-4-1-400x460.png',
        rating: 5,
        description: 'Sản phẩm do Trung Quốc sản xuất',
        price: 450,
        inventory: 20
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: 
            return state;
    }
};

export default products;