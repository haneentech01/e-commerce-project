import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/‎CardProductsContainer';
import DiscountSection from './../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import ViewHomeProductsHook from './../../hook/products/view-home-products-hook';
import Silder from '../../Components/Home/Slider';

const HomePage = () => {
    const [items] = ViewHomeProductsHook();

    return (
        <div className='font' style={{ minHeight: '670px' }}>
            <Silder />
            <HomeCategory />
            <CardProductsContainer products={items} title="الأكثر مبيعاً" btnTitle="المزيد" pathText="/allProduct" />
            <DiscountSection />
            <CardProductsContainer products={items} title="أحدث الأزياء" btnTitle="المزيد" pathText="/allProduct" />
            <BrandFeatured title="أشهر الماركات" btnTitle="المزيد" />
        </div>
    )
}

export default HomePage
