let initialState = [
    { tabName: 'topclothes', showName: 'Áo', type: 'topclothes' },
    { tabName: 'botclothes', showName: 'Quần', type: 'botclothes' },
    { tabName: 'shoes', showName: 'Giày dép', type: 'shoes' },
    { tabName: 'handbags', showName: 'Túi xách', type: 'handbags' },
    { tabName: 'necklaces', showName: 'Dây chuyền', type: 'necklaces' },
    // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
    { tabName: 'hairstyle', showName: 'Kiểu tóc', type: 'hairstyle' },
    { tabName: 'background', showName: 'Nền', type: 'background' }
];

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default CategoryReducer;
