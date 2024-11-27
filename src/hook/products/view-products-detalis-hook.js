import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  getProductLike,
} from "../../redux/actions/productsAction";
import mobile from "../../Assets/images/mobile.png";
import { getOneCategory } from "../../redux/actions/categoryAction";
import { getOneBrand } from "../../redux/actions/brandAction";

const ViewProductsDetalisHook = (prodID) => {
  const dispatch = useDispatch();

  // الحالة لتخزين البيانات
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // تحميل المنتج فقط عند تغير prodID
    if (prodID) {
      dispatch(getOneProduct(prodID));
    }
  }, [dispatch, prodID]);

  // استدعاء الـ Redux Store
  const oneProducts = useSelector((state) => state.allProducts.oneProduct);
  const oneCategory = useSelector((state) => state.allCategory.oneCategory);
  const oneBrand = useSelector((state) => state.allBrand.oneBrand);
  const productLike = useSelector((state) => state.allProducts.productLike);

  // التعامل مع البيانات
  let item = oneProducts?.data || [];
  let images = item.images
    ? item.images.map((img) => ({ original: img }))
    : [{ original: mobile }];
  let cat = oneCategory?.data || [];
  let brand = oneBrand?.data || [];
  let prod = productLike?.data || [];

  useEffect(() => {
    // تحديد إذا كان يجب تحميل الفئة والعلامة التجارية فقط إذا لم تكن موجودة
    if (item.category && !oneCategory?.data) {
      dispatch(getOneCategory(item.category));
    }
    if (item.brand && !oneBrand?.data) {
      dispatch(getOneBrand(item.brand));
    }
    if (item.category && !productLike?.data) {
      dispatch(getProductLike(item.category));
    }
    setLoading(false); // عندما تنتهي من تحميل البيانات
  }, [item, dispatch, oneCategory?.data, oneBrand?.data, productLike?.data]);

  // إرجاع البيانات بعد تحميلها
  return [item, images, cat, brand, prod, loading];
};

export default ViewProductsDetalisHook;
