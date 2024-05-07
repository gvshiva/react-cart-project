import { connect } from 'react-redux';
import Cart from '../components/cart/cart';
import { removeFromCart, getItems, getTotal, getCurrency} from '../ducks/cart';

//Cart needs only items, total, currency, removeFromCart where removeFromCart comes as dispatch
const mapStateToProps = (state, props) => {
    return {
        items: getItems(state,props),
        total: getTotal(state, props),
        currency: getCurrency(state, props)
    };
};

const mapDispatchToProps = (dispatch) =>  {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);