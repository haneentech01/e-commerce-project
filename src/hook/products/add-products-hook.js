import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/brandAction';
import { getOneCategory } from '../../redux/actions/subcategoryAction';
import { createProduct } from '../../redux/actions/productsAction';
import notify from './../../hook/useNotifaction';

const useAddProductsHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
        dispatch(getAllBrand());
    }, [])
    
    //Get Last Catgeory State From Redux
    const category = useSelector(state => state.allCategory.category);
    //Get Last Brand State From Redux
    const brand = useSelector(state => state.allBrand.brand);
    //Get Last Sub Category State From Redux
    const subCategory = useSelector(state => state.subCategory.subcategory);
    //Get Last products State From Redux
    const product = useSelector(state=>state.allProducts.products);

    //Values Images Products
    const [images, setImages] = useState({});

    //Values State
    const [prodName, setProdName] = useState("");
    const [prodDescription, setProdDescription] = useState("");
    const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
    const [priceAfter, setPriceAfter] = useState('السعر بعد الخصم');
    const [qty, setQty] = useState('الكمية المتاحة');
    const [catID, setCatID] = useState('');
    const [subCatID, setSubCatID] = useState([]);
    const [seletedSubID, setSeletedSubID] = useState([]);
    const [brandID, setBrandID] = useState('');
    //To Show Hide Color Picker
    const [showColor, setShowColor] = useState(false);
    //To store All Pick Picker
    const [colors, setColors] = useState([]);
    // To Store All Sub Category
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);

    //To Change Name State
    const onChangeProdName = (event) => {
        event.persist();
        setProdName(event.target.value);
    }

    //To Change Discription Name State
    const onChangeDesName = (event) => {
        event.persist();
        setProdDescription(event.target.value);
    }

    //To Change Price Befor State
    const onChangePriceBefor = (event) => {
        event.persist();
        setPriceBefore(event.target.value);
    }

    //To Change Price After State
    const onChangePriceAfter = (event) => {
        event.persist();
        setPriceAfter(event.target.value);
    }

    //To Change Qty State
    const onChangeQty = (event) => {
        event.persist();
        setQty(event.target.value);
    }

    //When Selet Category Store Id
    const onSeletCategory = async(event) => {
        if (event.target.value !== 0) {
            await dispatch(getOneCategory(event.target.value));
        }
        setCatID(event.target.value);
    }

    useEffect(() => {
        if (catID != 0) {
            if (subCategory.data) {
                setOptions(subCategory.data);
            }
        }
    } , [catID])

    //When Selet Brand Store Id
    const onSeletBrand = (event) => {
        setBrandID(event.target.value)
    }

    const onChangeColor = (event) => {
        event.persist();
        setShowColor(!showColor)
    }

    const onSelect = (selectedList) => {
        setSeletedSubID(selectedList)
    }

    const onRemove = (selectedList) => { 
        setSeletedSubID(selectedList)
    }

    //When Choose New Color
    const handelChangeComplete = (color) => {
        setColors([...colors, color.hex])
        setShowColor(!showColor)
    }

    // When Color Remove
    const removeColor = (color) => {
        const newColor = colors.filter((e) => e !== color)
        setColors(newColor)
    }

    //to convert base 64 to file
    function dataURLtoFile(dataurl, filename) {

        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    // ToSave Data To Database
    const handelSubmit = async(event) => {
        event.preventDefault();

        if (prodName === "" || prodDescription === "" || images.length <= 0 || priceBefore <= 0  || catID === 0 ) {
            notify("من فضلك اكمل البيانات", "warn")
            return;
        }

        // if ( priceBefore >= priceAfter) {
        //     notify("الرجاء ادخال قيمة صحيحة لسعر المنتج بعد الخصم", "error");
        //     return;
        // }

        //convert base 64 image to file 
        const imgCover = dataURLtoFile(images[0], Math.random() + ".png");
        //convert array of base 64 image to file 
        const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                return dataURLtoFile(images[index], Math.random() + ".png")
            }
        )

        const formData = new FormData();
        formData.append("title", prodName);
        formData.append("description", prodDescription);
        formData.append("quantity", qty);
        formData.append("price", priceBefore);
        formData.append("imageCover", imgCover);
        formData.append("category", catID);
        formData.append("brand", brandID);
        itemImages.map((item) => formData.append("images", item));

        // Array In Form Data
        //availableColors --> It's Name In Database Like That
        colors.map((item) => formData.append("availableColors", item));
        //subcategory --> It's Name In Database Like That
        // item._id --> beacuse We Have Many Things In subcategory Like name and Id So I must Choose What I want Use
        seletedSubID.map((item) => formData.append("subcategory", item._id));

        setLoading(true);
        await dispatch(createProduct(formData));
        setLoading(false);
    }

    useEffect(() => {
        if (loading === false) {
            setProdName("");
            setProdDescription("");
            setPriceBefore('السعر قبل الخصم');
            setPriceAfter('السعر بعد الخصم');
            setQty('الكمية المتاحة');
            // setCatID(0);
            setSeletedSubID([]);
            setBrandID(0);
            setColors([]);
            setImages([]);
            setTimeout(() => setLoading(true), 1500);

            if (product) {
                if (product && product.status === 201) {
                    notify("تم الاضافة بنجاح", "success")
                } else {
                    notify("هناك مشكلة", "error")
                }
            }
        }
    }, [loading])

    return [onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeProdName, showColor, category, brand, priceAfter, images, setImages, onSelect, onRemove, options, handelChangeComplete, removeColor, onSeletCategory, handelSubmit, onSeletBrand, colors, priceBefore, qty, prodDescription, prodName];
}

export default useAddProductsHook;
