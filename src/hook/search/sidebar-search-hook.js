import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/brandAction';
import ViewSearchProductsHook from '../products/view-search-products-hook';

const SidebarSearchHook = () => {
    const [items, pagination, onPress, error, getProduct, results] = ViewSearchProductsHook();
    const dispatch = useDispatch();

    useEffect(() => {
        const get = async () => {
            await dispatch(getAllCategory());
            await dispatch(getAllBrand());
        }
        get();
    }, [])
    
    //to get state from redux
    const allCategory = useSelector((state) => state.allCategory.category);
    //to get state from redux
    const allBrand = useSelector((state) => state.allBrand.brand);

    //to get category
    let category = [];
    if (allCategory.data) {
        category = allCategory.data;
    }

    //to get Brand
    let brand = [];
    if (allBrand.data) {
        brand = allBrand.data;
    }

    const [catChecked, setCatChecked] = useState([])
    //when user press any category
    const clickCategory = (e) => { 
        let value = e.target.value
        if (value === '0') {
            setCatChecked([]);
        } else {
            if (e.target.checked === true) {
                setCatChecked([...catChecked, value]);
            } else if (e.target.checked === false) {
                const newArray = catChecked.filter((e) =>  e !== value ) 
                setCatChecked(newArray);
            }
        }
    }
  
    useEffect(() => {
        const queryCat = catChecked.map(val => "category[in][]=" + val).join("&");
        localStorage.setItem("catCecked", queryCat)
        setTimeout(() => {
            getProduct();
        } , 1000)
    } , [catChecked , getProduct])

    const [brandChecked, setBrandChecked] = useState([])
    //when user press any brand
    const clickBrand = (e) => { 
        let value = e.target.value
        if (value === '0') {
            setBrandChecked([]);
        } else {
            if (e.target.checked === true) {
                setBrandChecked([...brandChecked, value]);
            } else if (e.target.checked === false) {
                const newArray = brandChecked.filter((e) =>  e !== value ) 
                setBrandChecked(newArray);
            }
        }
    }


    useEffect(() => {
        const queryBrand = brandChecked.map(val => "brand[in][]=" + val).join("&");
        localStorage.setItem("brandCecked", queryBrand)
        setTimeout(() => {
            getProduct();
        }, 1000);
    }, [brandChecked, getProduct]);

    const [From, setPriceFrom] = useState(0);
    const [To, setToFrom] = useState(0);

    const priceFrom = (e) => { 
        localStorage.setItem("priceFrom", e.target.value);
        setPriceFrom(e.target.value);
    }
    
    const priceTo = (e) => {
        localStorage.setItem("priceTo", e.target.value);
        setToFrom(e.target.value);
        
    }

    return [category, brand, clickCategory, clickBrand, priceFrom , priceTo] 
}

export default SidebarSearchHook
