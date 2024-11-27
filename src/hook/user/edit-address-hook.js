import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editUserAddress,
  getOneUserAddress,
} from "../../redux/actions/userAddressesAction";
import { useNavigate } from "react-router-dom";
import notify from "../useNotifaction";

const EditAddressHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alias, setAlias] = useState("");
  const [detalis, setDetalis] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingEdit, setLoadingEdit] = useState(true);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getOneUserAddress(id));
      setLoading(false);
    };
    get();
  }, []);

  const onChangeAlias = (e) => {
    e.persist();
    setAlias(e.target.value);
  };

  const onChangeDetalis = (e) => {
    e.persist();
    setDetalis(e.target.value);
  };

  const onChangePhone = (e) => {
    e.persist();
    setPhone(e.target.value);
  };

  const resAddress = useSelector(
    (state) => state.userAddressesReducer.oneAddress
  );

  useEffect(() => {
    if (loading === false) {
      if (resAddress && resAddress.status === "success") {
        setAlias(resAddress.data.alias);
        setDetalis(resAddress.data.details);
        setPhone(resAddress.data.phone);
      }
    }
  }, [loading]);

  const handelEdit = async () => {
    setLoadingEdit(true);
    await dispatch(
      editUserAddress(id, {
        alias,
        details: detalis,
        phone,
      })
    );
    setLoadingEdit(false);
  };

  const resEdit = useSelector(
    (state) => state.userAddressesReducer.editAddress
  );

  useEffect(() => {
    if (loadingEdit === false) {
      if (resEdit && resEdit.status === 200) {
        notify("تمت عملية التعديل بنجاح", "success");
        setTimeout(() => {
          navigate("/user/addresses");
        }, 1000);
      } else {
        notify("فشل فى عملية التعديل", "error");
      }
    }
  }, [loadingEdit]);

  return [
    handelEdit,
    alias,
    detalis,
    phone,
    onChangeAlias,
    onChangeDetalis,
    onChangePhone,
  ];
};

export default EditAddressHook;
