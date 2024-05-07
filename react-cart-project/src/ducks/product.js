// reducer : it doesnot need to have many state management as we need only list of products
export default function products(state = []) {
    return state; // nothing to do here, but we need products node in redux store
}

// selectors
export function getProducts(state, props) {
    return state.products;
}

export function getProduct(state, props) {
    return state.products.find(item => item.id === props.id);
}
