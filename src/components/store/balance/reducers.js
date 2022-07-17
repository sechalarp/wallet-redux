import balanceTypes from "./balanceTypes";

const initialState = {
    amount: 0
}

const balanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case balanceTypes.SEND_MONEY:
            return {
                ...state,
                amount: state.amount - action.payload
            }
        case balanceTypes.RECEIVE_MONEY:
            return {
                ...state,
                amount: state.amount + action.payload
            }
        default:
            return state;
    }
}

export default balanceReducer;