import balanceTypes from "./balanceTypes"

const sendMoney = (amount) => {
    return {
        type: balanceTypes.SEND_MONEY,
        payload: amount
    }
}

const receiveMoney = (amount) => {
    return {
        type: balanceTypes.RECEIVE_MONEY,
        payload: amount
    }
}

export { sendMoney, receiveMoney }