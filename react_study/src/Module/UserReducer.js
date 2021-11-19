const USER_REMOVE = 'REMOVE';
const USER_SAVE = 'SAVE';
const USER_SELECT_ROW = 'SELECT_ROW';

export const userSave = (saveData) => ({
    type: USER_SAVE,
    saveData: {
        userid: saveData.userid,
        password: saveData.password,
        num: saveData.num
    }
});

export const userRemove = (userid) => ({
    type: USER_REMOVE,
    userid: userid,
});

export const userSelectRow = (userid) => ({
    type: USER_SELECT_ROW,
    userid: userid
});

const initialState = {
    user: [
        {
            userid: 'asdasd',
            password: '123',
            num: 1
        }
    ],
    lastNum: 1,
    selectRowData: {}
}

export default  function userReducer(state=initialState, action) {
    switch (action.type) {
        case USER_REMOVE:
            return {
                ...state, user: state.user.filter(row => row.userid !== action.userid)
            };
        case USER_SAVE:
            if(action.saveData.userid === '') {
                return {
                    lastNum: state.lastNum + 1,
                    user: state.user.concat({
                        ...action.saveData,
                        num: state.lastNum + 1
                    }),
                    selectRowData: {}
                }
            } else {
                    return {
                        ...state, user: state.user.map(data => data.userid === action.saveData.userid ? {...action.saveData}: data), selectRowData: {}
                    }
                }

        case USER_SELECT_ROW:
            return {
                ...state, selectRowData: state.user.find(row => row.userid === action.userid)
            };
        default:
            return state;
    }
}