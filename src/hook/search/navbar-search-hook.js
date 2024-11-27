import { useEffect, useState } from "react";
import ViewSearchProductsHook from "../products/view-search-products-hook";

const NavbarSearchHook = () => {
  const [items, pagination, onPress, getProduct, results] =
    ViewSearchProductsHook();
  const [searchWord, setSearchWord] = useState("");

  //when user type search word
  const OnChangeSearch = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);

    const path = window.location.pathname;
    setTimeout(() => {
      if (path != "/allProduct") {
        window.location.href = "/allProduct";
      }
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [searchWord]);

  return [OnChangeSearch, searchWord];
};

export default NavbarSearchHook;
