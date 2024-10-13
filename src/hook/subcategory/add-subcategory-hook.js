import { useEffect, useState } from 'react';
import { createSubCategory } from '../../redux/actions/subcategoryAction';
import { useSelector, useDispatch } from 'react-redux';
import notify from '../../hook/useNotifaction';
import { getAllCategory } from '../../redux/actions/categoryAction';

const useAddSubcategoryHook = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!navigator.onLine) {
            notify("هناك مشكله فى الاتصال بالانترنت", "warn");
            return;
        }
        dispatch(getAllCategory());
    }, []);

    const [id, setID] = useState('0');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);

    // Get last category state from redux
    const category = useSelector(state => state.allCategory.category);

    // Get last subcategory state from redux
    const subcategory = useSelector(state => state.subCategory.subcategory);

    // On change dropdown menu
    const handelChange = (e) => {
        setID(e.target.value);
    };

    // To save name
    const onChangeName = (e) => {
        e.persist();
        setName(e.target.value);
    };

    // On save data 
    const handelSubmit = async (e) => {
        e.preventDefault();
        if (!navigator.onLine) {
            notify("هناك مشكله فى الاتصال بالانترنت", "warn");
            return;
        }

        if (id === "0") {
            notify("من فضلك اختر تصنيف رئيسي", "warn");
            return;
        }

        if (name === "") {
            notify("من فضلك ادخل اسم التصنيف", "warn");
            return;
        }

        setLoading(true);

        await dispatch(createSubCategory({
            name,
            category: id
        }));
        setLoading(false);
    };

    useEffect(() => {
        if (loading === false) {
            setName("");
            setID("0");
            if (subcategory) {
                if (subcategory.status === 201) {
                    notify("تمت الاضافة بنجاح", "success");
                }
                else if (subcategory === "Error Error: Request failed with status code 400") {
                    notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "warn");
                }
                else {
                    notify("هناك مشكله فى عملية الاضافة", "warn");
                }
            }
            setLoading(true);
        }
    }, [loading]);

    return [id, name, loading, category, subcategory, handelChange, handelSubmit, onChangeName];
};

export default useAddSubcategoryHook;
