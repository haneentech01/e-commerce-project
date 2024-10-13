import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/actions/productsAction';

const ViewHomeProductsHook  = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    const allProducts = useSelector((state) => state.allProducts.allProducts);

    let items = [];
    if (allProducts.data)
        items = allProducts.data.slice(0, 4);
    else
        items = [];

    // When I want Create Item For The itemsMostReated
    // let itemsMostReated = [];
    // if (allProducts.data) {
    //     itemsMostReated = allProducts.data.slice(0, 4);
    // } else {
    //     itemsMostReated = [];
    // }
    // return [itemsMostReated];

    return [items];

}

export default ViewHomeProductsHook 
