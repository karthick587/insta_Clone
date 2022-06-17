import React, { useEffect } from "react"
import LoginRegFooter from "../common/login&regFooter"
import LoginRegHeader from "../common/login&regHeader"
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/auth/actions";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useHistory } from "react-router-dom";

const schema = yup.object().shape({
    Email: yup.string().required('required-Field'),
    PhoneNumber: yup.string().required('required-Field'),
    UserName: yup.string().required('required-Field'),
    Password: yup.string().required('required-Field'),

});
export default function Register() {
    const dispatch = useDispatch()
    const histery=useHistory()
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
    });
   
        const { RegisterNavigate } = useSelector((state) => state.AuthReducer);
    const { errors } = formState;

    const save = (data) => {
        dispatch({
            type: actions.REGISTER_USER, userData: {
                Email: data.Email,
                PhoneNumber: data.PhoneNumber,
                UserName: data.UserName,
                Password: data.Password
            }
        });
    }
if(RegisterNavigate){
    dispatch({
        type: actions.SET_REGISTER_NAVIGATE, payload:false
    });
    histery.push("/")
}
    
   
    return (
        <body class="bg-gray-100">
            <div id="wrapper" class="flex flex-col justify-between h-screen">
                <LoginRegHeader />
                <div>
                    <div class="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
                        <h1 class="lg:text-3xl text-xl font-semibold mb-6"> Sign in</h1>
                        <p class="mb-2 text-black text-lg"> Register to manage your account </p>
                        <form action="#">
                            <div class="flex lg:flex-row flex-col lg:space-x-2">
                                <input type="Email" placeholder="Email" class={`bg-gray-200 mb-2 shadow-none  dark:bg-gray-800 login-input ${errors.Email?.message}`} name="Email"  {...register('Email')} />
                                <input type="text" placeholder="UserName" className={`bg-gray-200 mb-2 shadow-none  dark:bg-gray-800 login-input ${errors.UserName?.message}`} name="UserName"  {...register('UserName')} />
                            </div>
                            <input type="text" placeholder="PhoneNumber" class={`bg-gray-200 mb-2 shadow-none  dark:bg-gray-800 login-input ${errors.PhoneNumber?.message}`} name="PhoneNumber"  {...register('PhoneNumber')} />
                            <input type="text" placeholder="Password" class={`bg-gray-200 mb-2 shadow-none  dark:bg-gray-800 login-input ${errors.Password?.message}`} name="Password"  {...register('Password')} />
                            <div class="flex justify-start my-4 space-x-1">
                                <div class="checkbox">
                                    <input type="checkbox" id="chekcbox1" checked />
                                    <label for="chekcbox1"><span class="checkbox-icon"></span> I Agree</label>
                                </div>
                                <a href="/register"> Terms and Conditions</a>
                            </div>
                            <button type="submit" class="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full" onClick={handleSubmit(save)}>Register</button>
                            <div class="text-center mt-5 space-x-2">
                                <p class="text-base"> Do you have an account? <Link to="/"> Login </Link></p>
                            </div>
                        </form>
                    </div>
                </div>
                <LoginRegFooter />
            </div>
        </body>
    )
}