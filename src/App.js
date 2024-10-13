import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Uitily/Footer";
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import HomePage from "./Page/Home/HomePage";
import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductDetalisPage from "./Page/Products/ProductDetalisPage";
import CartPage from "./Page/Cart/CartPage";
import ChoosePayMethoudPage from "./Page/Checkout/ChoosePayMethoudPage";
import AdminAddProducts from "./Page/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./Page/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./Page/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";
import UserAllAddresPage from "./Page/User/UserAllAddresPage";
import UserProfilePage from "./Page/User/UserProfilePage";
import UserFavoriteProductPage from "./Page/User/UserFavoriteProductPage";
import UserAddAddressPage from "./Page/User/UserAddAddressPage";
import UserEditAddressPage from "./Page/User/UserEditAddressPage";
import AdminEditProductsPage from "./Page/Admin/AdminEditProductsPage";
import ForgetPasswordPage from "./Page/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./Page/Auth/VerifyPasswordPage";
import RsetPasswordPage from "./Page/Auth/ResetPasswordPage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />

      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allCategory" element={<AllCategoryPage />} />
          <Route path="/allBrand" element={<AllBrandPage />} />
          <Route path="/allProduct" element={<ShopProductsPage />} />
          <Route path="/allProduct/:id" element={<ProductDetalisPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />
          <Route path="/admin/allProducts" element={<AdminAddProducts />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route
            path="/admin/addsubcategory"
            element={<AdminAddSubCategoryPage />}
          />
          <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
          <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route
            path="/user/favoriteproducts"
            element={<UserFavoriteProductPage />}
          />
          <Route path="/user/addresses" element={<UserAllAddresPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route
            path="/admin/editproduct/:id"
            element={<AdminEditProductsPage />}
          />
          <Route
            path="/user/forget-password"
            element={<ForgetPasswordPage />}
          />
          <Route path="/user/verify-code" element={<VerifyPasswordPage />} />
          <Route path="/user/reset-password" element={<RsetPasswordPage />} />
        </Routes>
      </BrowserRouter> 
      <Footer />
    </div>
  );
}

export default App;
