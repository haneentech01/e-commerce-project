import { useState } from "react";
import { deleteUserAddress } from "../../redux/actions/userAddressesAction";
import { useDispatch } from "react-redux";

const DeleteAddressHook = (id) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handelDelete = async () => {
    await dispatch(deleteUserAddress(id));
    setShow(false);
    window.location.reload(false);
  };

  return [show, handleClose, handleShow, handelDelete];
};

export default DeleteAddressHook;
