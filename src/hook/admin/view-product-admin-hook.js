import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getAllProductsPage } from '../../redux/actions/productsAction';

const useViewProductAdminHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts(8));
    }, [])

    const onPress = async(page) => {
        await dispatch(getAllProductsPage(page , 8))
    }

    const allProducts = useSelector((state) => state.allProducts.allProducts);
    let items = [];
    let pagination = [];

    try {
        if (allProducts.data) {
            items = allProducts.data;
        } else {
            items = [];
        }

        if (allProducts.paginationResult) {
            pagination = allProducts.paginationResult.numberOfPages;
        } else {
            pagination = [];
        }
    }
    catch (e) { }
    
    return [items , pagination , onPress]
}

export default useViewProductAdminHook
