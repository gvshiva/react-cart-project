import { connect } from 'react-redux';
import Product from '../components/product/product';
import { addToCart, isInCart, removeFromCart} from '../ducks/cart';

//Product needs id, addToCart, removeFromCart, isInCart
const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props)
    };
};

const mapDispatchToProps = (dispatch) =>  {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);