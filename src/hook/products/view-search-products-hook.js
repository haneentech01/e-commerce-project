import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsSearch } from "../../redux/actions/productsAction";

const ViewSearchProductsHook = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  let limit = 8;

  let word = "",
    queryCat = "",
    brandCat = "",
    priceFrom = "",
    priceTo = "";
  let pricefromString = "",
    priceToString = "";
  const getStorge = () => {
    if (localStorage.getItem("searchWord") != null)
      word = localStorage.getItem("searchWord");

    if (localStorage.getItem("catCecked") != null)
      queryCat = localStorage.getItem("catCecked");

    if (localStorage.getItem("brandCecked") != null)
      brandCat = localStorage.getItem("brandCecked");

    if (localStorage.getItem("priceFrom") != null)
      priceFrom = localStorage.getItem("priceFrom");

    if (localStorage.getItem("priceTo") != null)
      priceTo = localStorage.getItem("priceTo");

    if (priceFrom === "" || priceFrom <= 0) {
      pricefromString = "";
    } else {
      pricefromString = `&price[gt]=${priceFrom}`;
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
  };

  const getProduct = async () => {
    getStorge();
    sortData();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${brandCat}${pricefromString}${priceToString}`
      )
    );
  };

  // Fetch all products when the component mounts
  useEffect(() => {
    getProduct();
  }, []);

  // Select products from the Redux store
  const allProducts = useSelector((state) => state.allProducts.allProducts);

  // Extract items and pagination data with default values
  let items = [];
  try {
    if (allProducts.data) {
      items = allProducts.data;
    } else {
      items = [];
    }
  } catch (e) {
    setError(e.message);
  }

  // Extract pagination data with default values
  let pagination = [];
  try {
    if (allProducts.paginationResult) {
      pagination = allProducts.paginationResult.numberOfPages;
    } else {
      pagination = [];
    }
  } catch (e) {
    setError(e.message);
  }

  // Extract results data with default values
  let results = 0;
  try {
    if (allProducts.results) {
      results = allProducts.results;
    } else {
      results = [];
    }
  } catch (e) {
    setError(e.message);
  }

  // Function to handle page changes
  const onPress = async (page) => {
    getStorge();
    sortData();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${brandCat}${pricefromString}${priceToString}`
      )
    );
  };

  let sortType = "";
  let sort;
  //When User Choose Sort Type
  const sortData = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }

    if (sortType === "السعر من الأقل للأعلى") {
      sort = "+price";
    } else if (sortType === "السعر من الأعلى للأقل") {
      sort = "-price";
    } else if (sortType === "") {
      sort = "";
    } else if (sortType === "الأكثر مبيعاً") {
      sort = "-sold";
    } else if (sortType === "الأعلى تقييماً") {
      sort = "-quantity";
    }
  };

  // Optionally, you can return the error for further handling in the component
  return [items, pagination, onPress, getProduct, results];
};

export default ViewSearchProductsHook;
