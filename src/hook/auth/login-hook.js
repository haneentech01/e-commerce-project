import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/authAction';
import notify from '../useNotifaction';
import { useNavigate } from 'react-router-dom';

const LoginHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const OnSubmit = async () => {
        setIsPress(true);
        setLoading(true);
        await dispatch(
            loginUser({
                email,
                password,
            })
        );
        setLoading(false);
        setIsPress(false);
    }

    const res = useSelector((state) => state.authReducer.loginUser);

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res);
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("user", JSON.stringify(res.data.data));
                    notify("تم تسجيل الدخول بنجاح", "success");
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 1500)
                } else {
                    localStorage.removeItem("token", res.data.token);
                    localStorage.removeItem("user", res.data.data);
                }

                if (res.data.message === "Incorrect email or password") {
                    localStorage.removeItem("token", res.data.token);
                    localStorage.removeItem("user", res.data.data);
                    notify("كلمة السر او الايميل خطأ", "error");
                }
                setLoading(true);
            }
        }
    } , [loading])

    return [
        email,
        password,
        loading,
        onChangeEmail,
        onChangePassword,
        OnSubmit,
    ];
}

export default LoginHook;
