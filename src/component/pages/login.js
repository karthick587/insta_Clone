import React from "react"
import LoginRegFooter from "../common/login&regFooter"
import LoginRegHeader from "../common/login&regHeader"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/auth/actions";
import * as yup from 'yup';

const schema = yup.object().shape({
    Email: yup.string().required('required-Field'),
    Password: yup.string().required('required-Field'),

});
export default function Login() {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
    });

    const { errors } = formState;
    const login=(data)=>{
        dispatch({
            type: actions.GET_AUTHETICATRION, userData: {
                Email: data.Email,
                Password: data.Password
            }
        });
    }
    return (
        <body class="bg-gray-100">
            <div id="wrapper" class="flex flex-col justify-between h-screen">
                <LoginRegHeader />
                <div>
                    <div class="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
                        <h1 class="lg:text-3xl text-xl font-semibold  mb-6"> Log in</h1>
                        <p class="mb-2 text-black text-lg"> Email or Username</p>
                        <form action="#">
                            <input type="text" placeholder="example@mydomain.com" name="Email"  {...register('Email')} class={`g-gray-200 mb-2 shadow-none dark:bg-gray-800${errors.Email?.message}`} />
                            <input type="text"  class={`bg-gray-200 mb-2 shadow-none dark:bg-gray-800 ${errors.Password?.message}`} name="Password"  {...register('Password')} />
                            <div class="flex justify-between my-4">
                                <div class="checkbox">
                                    
                                   
                                </div>
                                <a href="/"> Forgot Your Password? </a>
                            </div>
                            <button type="submit" class="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full" onClick={handleSubmit(login)}>Login</button>
                            <div class="text-center mt-5 space-x-2">
                                <p class="text-base"> Not registered? <a href="/register" class=""> Create a account </a></p>
                            </div>
                        </form>
                    </div>
                </div>
                <LoginRegFooter />
            </div>
        </body>
    )
}