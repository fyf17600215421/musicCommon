const initData = {

};
export default (state = initData, actions) => {
    switch (actions.type) {
        case 'ADD_MYPAGE_LIST':
            return {...state, myPageList: actions.payload };
        default:
            return state;
    }
}