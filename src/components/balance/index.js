import { useState } from "react";
import { connect } from "react-redux";
import { receiveMoney, sendMoney } from "../store/balance/actions";
import balanceTypes from '../store/balance/balanceTypes';

const mapStateToProps = (state) => {
    return {
        amount: state.balanceReducer.amount
    }
}

const Home = ({ receiveMoney, sendMoney, amount }) => {
    const [value, setValue] = useState(0);

    const onChangeHandler = (e) => {
        setValue(parseInt(e.target.value))
    }

    const onClickHandler = (type) => {
        switch (type) {
            case balanceTypes.SEND_MONEY:
                sendMoney(value);
                break;
            case balanceTypes.RECEIVE_MONEY:
                receiveMoney(value);
                break;
            default:
                break;
        }
        setValue(0);
    }

    return (
        <div>
            <h2>Saldo actual</h2>
            <h3>${amount}</h3>
            <input onChange={(e) => onChangeHandler(e)} type='text' value={value === 0 ? '' : value} placeholder="Ingrese monto" />
            <br />
            <button onClick={() => onClickHandler(balanceTypes.SEND_MONEY)}>Transferir</button>
            <button onClick={() => onClickHandler(balanceTypes.RECEIVE_MONEY)}>Recibir</button>
        </div>
    );
}

export default connect(mapStateToProps, { receiveMoney, sendMoney })(Home);